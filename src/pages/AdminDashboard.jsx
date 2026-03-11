import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
    const [events, setEvents] = useState([]);
    const [year, setYear] = useState('');
    const [description, setDescription] = useState('');
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const token = localStorage.getItem('tedx_admin_token');

    useEffect(() => {
        fetchEvents();
    }, []);

    const fetchEvents = async () => {
        try {
            const res = await fetch('http://localhost:5000/api/events');
            if (res.ok) {
                const data = await res.json();
                setEvents(data);
            }
        } catch (err) {
            console.error('Failed to fetch events', err);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('tedx_admin_token');
        navigate('/login');
    };

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');

        if (!file || !year) {
            setMessage('Year and Photo are required!');
            setLoading(false);
            return;
        }

        const formData = new FormData();
        formData.append('year', year);
        formData.append('description', description);
        formData.append('photo', file);

        try {
            const res = await fetch('http://localhost:5000/api/events', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                body: formData
            });

            if (res.ok) {
                setMessage('Event archived successfully!');
                setYear('');
                setDescription('');
                setFile(null);
                // Reset file input element visually
                document.getElementById('file-upload').value = '';
                fetchEvents();
            } else {
                const data = await res.json();
                setMessage(data.error || 'Failed to upload event.');
            }
        } catch (err) {
            setMessage('Error connecting to server.');
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this event?')) return;

        try {
            const res = await fetch(`http://localhost:5000/api/events/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (res.ok) {
                fetchEvents();
            } else {
                alert('Failed to delete event.');
            }
        } catch (err) {
            alert('Error deleting event.');
        }
    };

    return (
        <div className="min-h-screen bg-black text-white p-8 font-inter">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-12 border-b border-gray-800 pb-6">
                    <div>
                        <h1 className="text-4xl font-playfair font-bold text-white mb-2">TEDx<span className="text-tedx-red">PSGTech</span> Archive Admin</h1>
                        <p className="text-gray-400">Manage historical event photos and descriptions</p>
                    </div>
                    <div className="flex gap-4">
                        <button
                            onClick={() => navigate('/archive')}
                            className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                        >
                            View Archive Gallery
                        </button>
                        <button
                            onClick={handleLogout}
                            className="px-4 py-2 bg-tedx-red hover:bg-red-700 text-white rounded-lg transition-colors"
                        >
                            Logout
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Upload Form */}
                    <div className="lg:col-span-1 border border-gray-800 bg-[#0a0a0a] rounded-xl p-6 h-fit sticky top-8">
                        <h2 className="text-2xl font-bold mb-6 border-b border-gray-800 pb-4">Add New Event</h2>

                        {message && (
                            <div className={`p-3 rounded-lg mb-6 text-sm ${message.includes('success') ? 'bg-green-500/10 text-green-500 border border-green-500/50' : 'bg-red-500/10 text-red-500 border border-red-500/50'}`}>
                                {message}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Edition Year / Theme</label>
                                <input
                                    type="text"
                                    value={year}
                                    onChange={(e) => setYear(e.target.value)}
                                    placeholder="e.g. 2024 - 'Unveiling Horizons'"
                                    className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-tedx-red transition-colors"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Photo</label>
                                <input
                                    id="file-upload"
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                    className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 text-gray-400 focus:outline-none focus:border-tedx-red transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-tedx-red file:text-white hover:file:bg-red-700 cursor-pointer"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Description</label>
                                <textarea
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    placeholder="Brief description of the event..."
                                    rows="4"
                                    className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-tedx-red transition-colors resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className={`w-full font-semibold py-3 px-4 rounded-lg transition-colors flex justify-center items-center ${loading ? 'bg-red-900 text-gray-300 cursor-not-allowed' : 'bg-tedx-red hover:bg-red-700 text-white'}`}
                            >
                                {loading ? 'Uploading...' : 'Upload Event'}
                            </button>
                        </form>
                    </div>

                    {/* Events List */}
                    <div className="lg:col-span-2 space-y-6">
                        <h2 className="text-2xl font-bold mb-6 border-b border-gray-800 pb-4">Manage Uploaded Events</h2>

                        {events.length === 0 ? (
                            <div className="text-center py-12 border border-gray-800 border-dashed rounded-xl text-gray-500">
                                No events found in the archive. Upload your first event photo!
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {events.map((event) => (
                                    <div key={event.id} className="border border-gray-800 bg-[#0a0a0a] rounded-xl overflow-hidden group">
                                        <div className="h-48 relative overflow-hidden bg-black">
                                            <img
                                                src={`http://localhost:5000${event.photo_url}`}
                                                alt={event.year}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                            <div className="absolute top-2 right-2 flex gap-2">
                                                <button
                                                    onClick={() => handleDelete(event.id)}
                                                    className="bg-black/80 hover:bg-tedx-red text-white p-2 rounded-lg backdrop-blur text-sm transition-colors"
                                                    title="Delete Event"
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="p-5">
                                            <h3 className="text-xl font-bold text-white mb-2">{event.year}</h3>
                                            <p className="text-gray-400 text-sm line-clamp-3">
                                                {event.description || 'No description provided.'}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;

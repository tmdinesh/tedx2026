import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await fetch('http://localhost:5000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                const data = await response.json();
                localStorage.setItem('tedx_admin_token', data.token);
                navigate('/admin');
            } else {
                const errorData = await response.json();
                setError(errorData.error || 'Login failed');
            }
        } catch (err) {
            setError('Error connecting to server. Is the backend running?');
        }
    };

    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center font-inter">
            <div className="bg-[#111] p-8 rounded-xl border border-tedx-red/20 shadow-[0_0_30px_rgba(235,0,40,0.15)] w-full max-w-md">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-playfair font-bold text-tedx-red mb-2">Admin Login</h1>
                    <p className="text-gray-400">Sign in to manage the TEDx Archive</p>
                </div>

                {error && (
                    <div className="bg-red-500/10 border border-red-500/50 text-red-500 p-3 rounded-lg mb-6 text-sm">
                        {error}
                    </div>
                )}

                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-tedx-red transition-colors"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-tedx-red transition-colors"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-tedx-red hover:bg-red-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
                    >
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;

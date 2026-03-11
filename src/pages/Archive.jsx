import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Archive = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/events');
                if (response.ok) {
                    const data = await response.json();
                    setEvents(data);
                }
            } catch (error) {
                console.error('Failed to fetch archive events:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchEvents();
    }, []);

    return (
        <div className="min-h-screen bg-black text-white font-inter">
            {/* Header Section */}
            <div className="relative pt-32 pb-20 px-6 text-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-tedx-red/10 to-transparent" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-tedx-red/5 rounded-full blur-3xl" />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-playfair font-bold mb-6"
                    >
                        Our <span className="text-tedx-red italic">Legacy</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-400 max-w-2xl mx-auto"
                    >
                        A journey through past TEDxPSGTech editions, celebrating the ideas and speakers that shaped our community.
                    </motion.p>
                </div>
            </div>

            {/* Gallery Section */}
            <div className="max-w-7xl mx-auto px-6 pb-32 relative z-10">
                {loading ? (
                    <div className="flex justify-center items-center py-32">
                        <div className="w-12 h-12 border-4 border-gray-800 border-t-tedx-red rounded-full animate-spin"></div>
                    </div>
                ) : events.length === 0 ? (
                    <div className="text-center py-20 bg-[#0a0a0a] border border-gray-800 rounded-2xl">
                        <p className="text-gray-500 text-lg">No past events have been archived yet.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {events.map((event, index) => (
                            <motion.div
                                key={event.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative rounded-2xl overflow-hidden bg-[#0a0a0a] border border-gray-800 hover:border-tedx-red/50 transition-colors duration-500 flex flex-col h-full"
                            >
                                <div className="h-64 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                                    <img
                                        src={`http://localhost:5000${event.photo_url}`}
                                        alt={event.year}
                                        className="w-full h-full object-cover transform group-hover:scale-110 group-hover:-rotate-1 transition-all duration-700"
                                    />
                                    <div className="absolute top-4 right-4 z-20 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-sm font-semibold text-tedx-red">
                                        {event.year}
                                    </div>
                                </div>
                                <div className="p-8 flex-1 flex flex-col justify-center">
                                    <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-500">
                                        {event.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>

            {/* Simple footer link back to home */}
            <div className="text-center pb-12 border-t border-gray-900 pt-12">
                <a href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors group">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:-translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                    Back to Home
                </a>
            </div>
        </div>
    );
};

export default Archive;

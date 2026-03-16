import { useState, useEffect } from 'react';
import tedxConfig from '../../tedxConfig';
import techLogo from '../../assets/logo/tech_logo.png';
import TedxLogo from './TedxLogo';

import { Link } from 'react-router-dom';

export default function TedxNavbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        setMobileOpen(false);
    };

    const links = [
        { label: 'About', id: 'tedx-about' },
        { label: 'Speakers', id: 'tedx-speakers' },
        { label: 'Schedule', id: 'tedx-schedule' },
        { label: 'Contact', id: 'tedx-contact' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? 'bg-black/80 backdrop-blur-xl shadow-2xl shadow-black/40 border-b border-white/5'
                : 'bg-transparent'
                }`}
        >
            <div className="tedx-container">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <button
                        onClick={() => scrollTo('tedx-hero')}
                        className="flex items-center gap-3 group"
                    >
                        <div className="flex items-center gap-3">
                            <TedxLogo size="sm" />
                            <div className="w-px h-8 sm:h-12 bg-white/20" />
                            <div className="flex items-center gap-3">
                                <img
                                    src={techLogo}
                                    alt="PSG Tech"
                                    className="h-10 sm:h-16 w-auto bg-white rounded-lg p-1 shadow-lg"
                                />
                                <span className="hidden sm:block text-white font-semibold text-sm xl:text-lg whitespace-nowrap">
                                    PSG College of Technology
                                </span>
                            </div>
                        </div>
                    </button>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-1">
                        {links.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => scrollTo(link.id)}
                                className="relative px-4 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors group"
                            >
                                {link.label}
                                <span
                                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 rounded-full transition-all duration-300 group-hover:w-6"
                                    style={{ background: 'var(--ted-red)' }}
                                />
                            </button>
                        ))}
                        <Link
                            to="/archive"
                            className="relative px-4 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors group"
                        >
                            Archive
                            <span
                                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 rounded-full transition-all duration-300 group-hover:w-6"
                                style={{ background: 'var(--ted-red)' }}
                            />
                        </Link>
                        <a
                            href="https://events.psginstitutions.in/EMS/register/6ABCD31A131"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-4 px-6 py-2.5 text-sm font-bold rounded-full transition-all duration-300 hover:scale-105"
                            style={{
                                background: 'linear-gradient(135deg, var(--ted-red) 0%, var(--ted-red-dark) 100%)',
                                color: 'white',
                                boxShadow: '0 4px 20px rgba(230,43,30,0.3)',
                            }}
                        >
                            Register Now
                        </a>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="md:hidden text-white p-2"
                    >
                        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {mobileOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/5">
                    <div className="px-6 py-4 space-y-1">
                        {links.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => scrollTo(link.id)}
                                className="block w-full text-left px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors font-medium"
                            >
                                {link.label}
                            </button>
                        ))}
                        <Link
                            to="/archive"
                            onClick={() => setMobileOpen(false)}
                            className="block w-full text-left px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors font-medium"
                        >
                            Archive
                        </Link>
                        <a
                            href="https://linktr.ee/ylgcmun2026"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full text-center mt-3 px-6 py-3 rounded-full font-bold text-white transition-all"
                            style={{
                                background: 'linear-gradient(135deg, var(--ted-red) 0%, var(--ted-red-dark) 100%)',
                            }}
                        >
                            Register Now
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}

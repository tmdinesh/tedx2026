import { useEffect, useRef, useState } from 'react';
import tedxConfig from '../../tedxConfig';
import TedxLogo from './TedxLogo';

export default function TedxHero() {
    const canvasRef = useRef(null);
    const [scrollY, setScrollY] = useState(0);

    // Parallax scroll listener
    useEffect(() => {
        const onScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Particle canvas animation
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let animId;
        let particles = [];

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const createParticles = () => {
            particles = [];
            const count = Math.min(Math.floor(window.innerWidth / 12), 120);
            for (let i = 0; i < count; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * 0.4,
                    vy: (Math.random() - 0.5) * 0.4,
                    r: Math.random() * 1.8 + 0.5,
                    alpha: Math.random() * 0.5 + 0.1,
                    isRed: Math.random() < 0.15,
                });
            }
        };

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw connections
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 120) {
                        const alpha = (1 - dist / 120) * 0.08;
                        ctx.beginPath();
                        ctx.strokeStyle =
                            particles[i].isRed || particles[j].isRed
                                ? `rgba(230, 43, 30, ${alpha * 2})`
                                : `rgba(255, 255, 255, ${alpha})`;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }

            // Draw particles
            for (const p of particles) {
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = p.isRed
                    ? `rgba(230, 43, 30, ${p.alpha})`
                    : `rgba(255, 255, 255, ${p.alpha})`;
                ctx.fill();
            }

            animId = requestAnimationFrame(draw);
        };

        resize();
        createParticles();
        draw();

        window.addEventListener('resize', () => {
            resize();
            createParticles();
        });

        return () => cancelAnimationFrame(animId);
    }, []);

    const parallax = Math.max(scrollY * 0.3, 0);
    const fadeOpacity = Math.max(1 - scrollY / 800, 0);

    return (
        <section
            id="tedx-hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
            style={{ background: 'linear-gradient(180deg, #0a0a0a 0%, #111 50%, #0a0a0a 100%)' }}
        >
            {/* Particle canvas */}
            <canvas ref={canvasRef} className="tedx-particle-canvas" />

            {/* Radial glow behind title */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        'radial-gradient(ellipse 60% 50% at 50% 45%, rgba(230,43,30,0.08) 0%, transparent 70%)',
                }}
            />

            {/* Hero content */}
            <div
                className="relative z-10 text-center px-4 max-w-5xl mx-auto"
                style={{ transform: `translateY(${parallax}px)`, opacity: fadeOpacity }}
            >
                {/* Overline */}
                <div
                    className="inline-block px-5 py-2 rounded-full border text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-8"
                    style={{
                        borderColor: 'rgba(230,43,30,0.3)',
                        background: 'rgba(230,43,30,0.06)',
                        color: 'rgba(255,255,255,0.8)',
                    }}
                >
                    {tedxConfig.date} &bull; {tedxConfig.venue.split(',')[0]}
                </div>

                {/* Main Title — TEDx Brand Compliant Logo */}
                <h1 className="mb-6">
                    <TedxLogo size="hero" className="justify-center" />
                </h1>

                {/* Theme */}
                <div className="mt-8 mb-10">
                    <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-white/40 mb-3">
                        {tedxConfig.year} Theme
                    </p>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold tedx-shimmer-text">
                        {tedxConfig.theme}
                    </h2>
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
                    <a
                        href="https://events.psginstitutions.in/EMS/register/6ABCD31A131"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto text-center px-10 py-4 rounded-full font-bold text-white text-base md:text-lg transition-all duration-300 hover:scale-105 tedx-glow-pulse"
                        style={{
                            background: 'linear-gradient(135deg, var(--ted-red) 0%, var(--ted-red-dark) 100%)',
                            boxShadow: '0 8px 32px rgba(230,43,30,0.3)',
                        }}
                    >
                        Register Now
                    </a>
                    <a
                        href="#tedx-speakers"
                        className="w-full sm:w-auto text-center px-8 py-4 rounded-full font-semibold text-white/80 text-base md:text-lg border border-white/10 hover:border-white/30 hover:text-white transition-all duration-300 hover:bg-white/5"
                    >
                        Meet the Speakers
                    </a>
                    <a
                        href="#tedx-schedule"
                        className="w-full sm:w-auto text-center px-8 py-4 rounded-full font-semibold text-white/80 text-base md:text-lg border border-white/10 hover:border-white/30 hover:text-white transition-all duration-300 hover:bg-white/5"
                    >
                        View Schedule
                    </a>
                </div>

                {/* Scroll indicator */}
                <div className="mt-20 tedx-float">
                    <div className="w-6 h-10 rounded-full border-2 border-white/20 mx-auto flex items-start justify-center p-1.5">
                        <div
                            className="w-1.5 h-3 rounded-full"
                            style={{ background: 'var(--ted-red)', animation: 'tedx-float 2s ease-in-out infinite' }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

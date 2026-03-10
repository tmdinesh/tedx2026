import { useTedxReveal, staggerDelay } from '../../hooks/useTedxReveal';

const highlights = [
    {
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
        ),
        title: 'Powerful Ideas',
        description:
            'Experience 18-minute talks that distill years of research, innovation, and lived experience into insights that shift your perspective.',
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
        title: 'Meaningful Connections',
        description:
            'Network with fellow thinkers, creators, and changemakers during curated networking sessions and interactive experience zones.',
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        title: 'Catalyst for Change',
        description:
            'Leave with actionable ideas and renewed energy to drive positive change in your community, career, and worldview.',
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        title: 'Global TED Community',
        description:
            'Join the worldwide TEDx movement — thousands of independently organized events in 170+ countries, all united by one mission.',
    },
];

export default function TedxHighlights() {
    const [headerRef, headerRevealed] = useTedxReveal();

    return (
        <section
            className="relative py-24 md:py-32 overflow-hidden"
            style={{
                background: 'linear-gradient(180deg, #0a0a0a 0%, #0e0508 50%, #0a0a0a 100%)',
            }}
        >
            {/* Wide red glow strip */}
            <div
                className="absolute top-1/2 left-0 w-full h-[1px] pointer-events-none"
                style={{
                    background: 'linear-gradient(90deg, transparent 5%, rgba(230,43,30,0.08) 30%, rgba(230,43,30,0.15) 50%, rgba(230,43,30,0.08) 70%, transparent 95%)',
                    boxShadow: '0 0 60px 20px rgba(230,43,30,0.04)',
                }}
            />

            <div className="tedx-container relative z-10">
                {/* Header */}
                <div
                    ref={headerRef}
                    className={`text-center mb-16 md:mb-20 tedx-reveal ${headerRevealed ? 'revealed' : ''}`}
                >
                    <p
                        className="text-xs md:text-sm uppercase tracking-[0.3em] font-semibold mb-4"
                        style={{ color: 'var(--ted-red)' }}
                    >
                        The Experience
                    </p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white mb-6">
                        Why <span style={{ color: 'var(--ted-red)' }}>Attend</span>?
                    </h2>
                    <div className="tedx-section-divider mx-auto" />
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {highlights.map((item, i) => (
                        <HighlightCard key={item.title} item={item} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function HighlightCard({ item, index }) {
    const [ref, isRevealed] = useTedxReveal({ threshold: 0.1 });

    return (
        <div
            ref={ref}
            className={`tedx-glass-premium tedx-gradient-border rounded-2xl md:rounded-3xl p-7 md:p-9 group tedx-reveal ${isRevealed ? 'revealed' : ''
                }`}
            style={staggerDelay(index, 150)}
        >
            <div className="flex items-start gap-5">
                {/* Icon */}
                <div
                    className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg"
                    style={{
                        background: 'linear-gradient(135deg, rgba(230,43,30,0.15) 0%, rgba(230,43,30,0.05) 100%)',
                        border: '1px solid rgba(230,43,30,0.15)',
                        color: 'var(--ted-red)',
                        boxShadow: '0 4px 15px rgba(230,43,30,0.05)',
                    }}
                >
                    {item.icon}
                </div>

                <div>
                    <h3 className="text-lg md:text-xl font-display font-bold text-white mb-2 group-hover:text-white transition-colors">
                        {item.title}
                    </h3>
                    <p className="text-sm md:text-base text-white/45 leading-relaxed group-hover:text-white/60 transition-colors duration-300">
                        {item.description}
                    </p>
                </div>
            </div>
        </div>
    );
}

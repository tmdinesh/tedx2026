import tedxConfig from '../../tedxConfig';
import { useTedxReveal, staggerDelay } from '../../hooks/useTedxReveal';

function TimelineItem({ item, index, isLeft }) {
    const [ref, isRevealed] = useTedxReveal({ threshold: 0.1 });
    const isTalk = item.type === 'talk';

    const iconMap = {
        talk: (
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
            </svg>
        ),
        break: (
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        ceremony: (
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
        ),
    };

    return (
        <div
            ref={ref}
            className={`relative flex items-start mb-6 md:mb-10 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} tedx-reveal ${isRevealed ? 'revealed' : ''}`}
            style={staggerDelay(index, 80)}
        >
            {/* Timeline dot — desktop */}
            <div className="tedx-timeline-dot hidden md:block" style={{ top: '18px' }} />
            {/* Timeline dot — mobile */}
            <div
                className="md:hidden absolute left-[20px] top-[18px] w-3.5 h-3.5 rounded-full z-10"
                style={{
                    background: isTalk ? 'var(--ted-red)' : 'rgba(255,255,255,0.15)',
                    boxShadow: isTalk ? '0 0 12px var(--ted-red-glow)' : 'none',
                    border: '3px solid var(--bg-dark)',
                }}
            />

            {/* Card */}
            <div className={`ml-10 md:ml-0 md:w-[calc(50%-40px)]`}>
                <div
                    className={`tedx-glass-premium rounded-xl md:rounded-2xl p-5 md:p-6 tedx-gradient-border group ${isTalk ? 'tedx-card-tilt' : ''
                        }`}
                >
                    {/* Time + type badge */}
                    <div className="flex items-center gap-3 mb-3">
                        <span
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold tracking-wider"
                            style={{
                                background: isTalk ? 'rgba(230,43,30,0.12)' : 'rgba(255,255,255,0.04)',
                                color: isTalk ? 'var(--ted-red)' : 'rgba(255,255,255,0.4)',
                                border: isTalk ? '1px solid rgba(230,43,30,0.15)' : '1px solid rgba(255,255,255,0.05)',
                            }}
                        >
                            <span style={{ color: isTalk ? 'var(--ted-red)' : 'rgba(255,255,255,0.3)' }}>
                                {iconMap[item.type]}
                            </span>
                            {item.time}
                        </span>
                        {isTalk && (
                            <span className="text-[10px] uppercase tracking-[0.15em] text-white/25 font-semibold">
                                Speaker Session
                            </span>
                        )}
                    </div>

                    {/* Title */}
                    <h4
                        className={`font-display font-bold mb-1 transition-colors duration-300 ${isTalk
                                ? 'text-lg md:text-xl text-white group-hover:text-white'
                                : 'text-base text-white/50'
                            }`}
                    >
                        {item.title}
                    </h4>

                    {/* Subtitle */}
                    {item.subtitle && (
                        <p className="text-sm text-white/35 italic mt-1 group-hover:text-white/50 transition-colors">
                            "{item.subtitle}"
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default function TedxSchedule() {
    const [headerRef, headerRevealed] = useTedxReveal();

    return (
        <section
            id="tedx-schedule"
            className="relative py-24 md:py-32 overflow-hidden tedx-noise"
            style={{ background: 'var(--bg-dark)' }}
        >
            <div className="tedx-container relative z-10">
                {/* Section Header */}
                <div
                    ref={headerRef}
                    className={`text-center mb-16 md:mb-20 tedx-reveal ${headerRevealed ? 'revealed' : ''}`}
                >
                    <p
                        className="text-xs md:text-sm uppercase tracking-[0.3em] font-semibold mb-4"
                        style={{ color: 'var(--ted-red)' }}
                    >
                        Event Day
                    </p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white mb-6">
                        The <span style={{ color: 'var(--ted-red)' }}>Schedule</span>
                    </h2>
                    <div className="tedx-section-divider mx-auto mb-6" />
                    <p className="text-white/50 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
                        A full day of powerful ideas, thought-provoking conversations, and meaningful
                        connections that will stay with you long after the event.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative max-w-4xl mx-auto">
                    {/* Center line — desktop */}
                    <div className="tedx-timeline-line hidden md:block" />
                    {/* Left line — mobile */}
                    <div
                        className="md:hidden absolute top-0 bottom-0 w-0.5"
                        style={{
                            left: '20px',
                            background:
                                'linear-gradient(180deg, transparent 0%, var(--ted-red) 10%, var(--ted-red) 90%, transparent 100%)',
                        }}
                    />

                    {tedxConfig.schedule.map((item, i) => (
                        <TimelineItem key={i} item={item} index={i} isLeft={i % 2 === 0} />
                    ))}
                </div>
            </div>
        </section>
    );
}

import tedxConfig from '../../tedxConfig';
import { useTedxReveal } from '../../hooks/useTedxReveal';

export default function TedxAbout() {
    const [headerRef, headerRevealed] = useTedxReveal();
    const [leftRef, leftRevealed] = useTedxReveal({ threshold: 0.1 });
    const [rightRef, rightRevealed] = useTedxReveal({ threshold: 0.1 });
    const [statsRef, statsRevealed] = useTedxReveal({ threshold: 0.1 });

    return (
        <section
            id="tedx-about"
            className="relative py-24 md:py-32 overflow-hidden tedx-noise"
            style={{ background: 'var(--bg-dark)' }}
        >
            {/* Subtle grid background */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.03]"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                    backgroundSize: '60px 60px',
                }}
            />

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
                        About the Event
                    </p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white mb-6">
                        What is <span style={{ color: 'var(--ted-red)' }}>TEDx</span>?
                    </h2>
                    <div className="tedx-section-divider mx-auto" />
                </div>

                {/* Two-column layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                    {/* TEDx explanation */}
                    <div
                        ref={leftRef}
                        className={`tedx-glass-premium rounded-2xl md:rounded-3xl p-8 md:p-10 tedx-gradient-border tedx-reveal-left ${leftRevealed ? 'revealed' : ''}`}
                    >
                        <div
                            className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                            style={{ background: 'linear-gradient(135deg, rgba(230,43,30,0.15) 0%, rgba(230,43,30,0.05) 100%)' }}
                        >
                            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'var(--ted-red)' }}>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                        </div>
                        <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-4">
                            Ideas Worth Spreading
                        </h3>
                        <p className="text-white/55 leading-relaxed mb-4 text-base md:text-lg">
                            In the spirit of TED's mission — <em className="text-white/70">"Ideas Worth Spreading"</em> — TEDx is a
                            program of locally organized events that bring people together to share a TED-like
                            experience. At a TEDx event, TED Talks video and live speakers combine to spark deep
                            conversations and connections.
                        </p>
                        <p className="text-white/55 leading-relaxed text-base md:text-lg">
                            The <strong className="text-white/80">x</strong> in TEDx stands for independently
                            organized TED event. TEDx events are fully planned and coordinated independently,
                            under a free license granted by TED to PSG College of Technology.
                        </p>
                    </div>

                    {/* This year's theme */}
                    <div
                        ref={rightRef}
                        className={`tedx-glass-premium rounded-2xl md:rounded-3xl p-8 md:p-10 tedx-gradient-border tedx-reveal-right ${rightRevealed ? 'revealed' : ''}`}
                    >
                        <div
                            className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                            style={{ background: 'linear-gradient(135deg, rgba(230,43,30,0.15) 0%, rgba(230,43,30,0.05) 100%)' }}
                        >
                            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'var(--ted-red)' }}>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <p
                            className="text-xs uppercase tracking-[0.25em] font-semibold mb-2"
                            style={{ color: 'var(--ted-red)' }}
                        >
                            {tedxConfig.year} Theme
                        </p>
                        <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-4">
                            {tedxConfig.theme}
                        </h3>
                        <p className="text-white/55 leading-relaxed mb-6 text-base md:text-lg">
                            {tedxConfig.themeDescription}
                        </p>

                        {/* Event details chips */}
                        <div className="flex flex-wrap gap-3">
                            {[
                                {
                                    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />,
                                    text: tedxConfig.date,
                                },
                                {
                                    icon: <><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></>,
                                    text: tedxConfig.venue.split(',')[0],
                                },
                                {
                                    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />,
                                    text: `${tedxConfig.speakers.length} Speakers`,
                                },
                            ].map((chip) => (
                                <span
                                    key={chip.text}
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 hover:scale-105"
                                    style={{
                                        borderColor: 'rgba(230,43,30,0.2)',
                                        background: 'rgba(230,43,30,0.06)',
                                        color: 'rgba(255,255,255,0.8)',
                                    }}
                                >
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'var(--ted-red)' }}>
                                        {chip.icon}
                                    </svg>
                                    {chip.text}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Stats strip */}
                <div
                    ref={statsRef}
                    className={`grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12 md:mt-16 tedx-reveal ${statsRevealed ? 'revealed' : ''}`}
                >
                    {[
                        { value: tedxConfig.speakers.length, label: 'Speakers' },
                        { value: '1', label: 'Inspiring Day' },
                        { value: '500+', label: 'Attendees' },
                        { value: '∞', label: 'Ideas' },
                    ].map((stat) => (
                        <div
                            key={stat.label}
                            className="tedx-glass-premium rounded-xl md:rounded-2xl p-6 text-center tedx-gradient-border"
                        >
                            <div
                                className="text-3xl md:text-4xl font-display font-black mb-1 tedx-number"
                                style={{ color: 'var(--ted-red)' }}
                            >
                                {stat.value}
                            </div>
                            <div className="text-sm text-white/50 font-medium">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

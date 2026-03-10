import techLogo from '../../assets/logo/tech_logo.png';
import { useTedxReveal } from '../../hooks/useTedxReveal';

export default function TedxAboutCollege() {
    const [headerRef, headerRevealed] = useTedxReveal();
    const [logoRef, logoRevealed] = useTedxReveal({ threshold: 0.1 });
    const [textRef, textRevealed] = useTedxReveal({ threshold: 0.1 });

    return (
        <section
            id="tedx-college"
            className="relative py-24 md:py-32 overflow-hidden tedx-noise"
            style={{ background: 'linear-gradient(180deg, #0a0a0a 0%, #0d0d0d 50%, #0a0a0a 100%)' }}
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
                        Our Institution
                    </p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white mb-6">
                        PSG College of <span style={{ color: 'var(--ted-red)' }}>Technology</span>
                    </h2>
                    <div className="tedx-section-divider mx-auto" />
                </div>

                {/* Content */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12 items-center">
                    {/* Logo + Image */}
                    <div
                        ref={logoRef}
                        className={`lg:col-span-2 flex flex-col items-center tedx-reveal-left ${logoRevealed ? 'revealed' : ''}`}
                    >
                        <div className="relative p-6 bg-white rounded-2xl shadow-xl mb-6 inline-block">
                            <img
                                src={techLogo}
                                alt="PSG College of Technology"
                                className="w-48 md:w-64 h-auto object-contain"
                            />
                        </div>
                        <a
                            href="https://psgtech.edu"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold border transition-all duration-300 hover:scale-105"
                            style={{
                                borderColor: 'rgba(230,43,30,0.3)',
                                color: 'rgba(255,255,255,0.8)',
                                background: 'rgba(230,43,30,0.06)',
                            }}
                        >
                            <svg
                                className="w-4 h-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                style={{ color: 'var(--ted-red)' }}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                />
                            </svg>
                            Visit College Website
                        </a>
                    </div>

                    {/* Text Content */}
                    <div
                        ref={textRef}
                        className={`lg:col-span-3 space-y-6 tedx-reveal-right ${textRevealed ? 'revealed' : ''}`}
                    >
                        <div className="tedx-glass-premium rounded-2xl p-6 md:p-8 tedx-gradient-border">
                            <p className="text-white/55 leading-relaxed text-base md:text-lg">
                                <strong className="text-white/90">PSG College of Technology</strong>, an ISO
                                9001:2015 certified institution, is one of the foremost institutions founded by the{' '}
                                <strong className="text-white/80">PSG & Sons' Charities Trust (1926)</strong>.
                                Established in 1951, the college is located in the same campus as the PSG Industrial
                                Institute, fostering effective industry-institute interaction.
                            </p>
                        </div>

                        <div className="tedx-glass-premium rounded-2xl p-6 md:p-8 tedx-gradient-border">
                            <p className="text-white/55 leading-relaxed text-base md:text-lg">
                                Conferred with Autonomous status by Anna University, PSG Tech offers{' '}
                                <strong className="text-white/80">21 undergraduate</strong> and{' '}
                                <strong className="text-white/80">24 postgraduate programmes</strong> in Science,
                                Engineering, and Technology. Celebrating its Platinum Jubilee, the institution
                                consistently ranks among the top engineering colleges in the country.
                            </p>
                        </div>

                        {/* Quick stats */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {[
                                { value: '1951', label: 'Established' },
                                { value: '45+', label: 'Programmes' },
                                { value: '75+', label: 'Years of Excellence' },
                            ].map((stat) => (
                                <div key={stat.label} className="tedx-glass-premium rounded-xl p-4 text-center tedx-gradient-border">
                                    <div
                                        className="text-xl md:text-2xl font-display font-black mb-1 tedx-number"
                                        style={{ color: 'var(--ted-red)' }}
                                    >
                                        {stat.value}
                                    </div>
                                    <div className="text-xs text-white/40 font-medium">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

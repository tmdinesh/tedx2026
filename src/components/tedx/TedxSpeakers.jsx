import tedxConfig from '../../tedxConfig';
import { useTedxReveal, staggerDelay } from '../../hooks/useTedxReveal';

function SpeakerCard({ speaker, index }) {
    const [ref, isRevealed] = useTedxReveal({ threshold: 0.1 });
    const initials = speaker.name
        .split(' ')
        .map((w) => w[0])
        .join('')
        .slice(0, 2);

    return (
        <div
            ref={ref}
            className={`tedx-glass-premium tedx-card-tilt tedx-gradient-border rounded-2xl md:rounded-3xl p-6 md:p-8 text-center group tedx-reveal ${isRevealed ? 'revealed' : ''}`}
            style={staggerDelay(index, 120)}
        >
            {/* Avatar */}
            <div className="tedx-speaker-ring mx-auto w-28 h-28 md:w-36 md:h-36 rounded-full mb-6 relative">
                {speaker.image ? (
                    <img
                        src={speaker.image}
                        alt={speaker.name}
                        className="w-full h-full object-cover rounded-full"
                    />
                ) : (
                    <div
                        className="w-full h-full rounded-full flex items-center justify-center text-3xl md:text-4xl font-display font-black transition-all duration-500 group-hover:scale-110"
                        style={{
                            background: `linear-gradient(135deg, rgba(230,43,30,0.18) 0%, rgba(230,43,30,0.06) 100%)`,
                            border: '2px solid rgba(230,43,30,0.2)',
                            color: 'var(--ted-red)',
                        }}
                    >
                        {initials}
                    </div>
                )}
            </div>

            {/* Red dot accent */}
            <div
                className="w-2 h-2 rounded-full mx-auto mb-4"
                style={{ background: 'var(--ted-red)', boxShadow: '0 0 8px var(--ted-red-glow)' }}
            />

            {/* Name */}
            <h3 className="text-lg md:text-xl font-display font-bold text-white mb-1 tedx-underline-anim">
                {speaker.name}
            </h3>

            {/* Title */}
            <p className="text-sm text-white/40 font-medium mb-5">{speaker.title}</p>

            {/* Talk topic */}
            <div
                className="rounded-xl px-4 py-4 mb-5 transition-all duration-300 group-hover:shadow-lg"
                style={{
                    background: 'linear-gradient(135deg, rgba(230,43,30,0.08) 0%, rgba(230,43,30,0.03) 100%)',
                    border: '1px solid rgba(230,43,30,0.12)',
                }}
            >
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/25 mb-1.5 font-semibold">Talk</p>
                <p className="text-sm font-semibold text-white/85 leading-snug">"{speaker.topic}"</p>
            </div>

            {/* Bio */}
            <p className="text-sm text-white/35 leading-relaxed group-hover:text-white/50 transition-colors duration-300">
                {speaker.bio}
            </p>
        </div>
    );
}

export default function TedxSpeakers() {
    const [headerRef, headerRevealed] = useTedxReveal();

    return (
        <section
            id="tedx-speakers"
            className="relative py-24 md:py-32 overflow-hidden tedx-noise"
            style={{ background: 'linear-gradient(180deg, #0a0a0a 0%, #0f0f0f 50%, #0a0a0a 100%)' }}
        >
            {/* Ambient glow */}
            <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse, rgba(230,43,30,0.04) 0%, transparent 60%)',
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
                        {tedxConfig.year} Lineup
                    </p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white mb-6">
                        Our <span style={{ color: 'var(--ted-red)' }}>Speakers</span>
                    </h2>
                    <div className="tedx-section-divider mx-auto mb-6" />
                    <p className="text-white/50 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
                        Visionaries, innovators, and storytellers converging to share ideas that will shape the
                        future. Each speaker brings a unique perspective — prepared to challenge assumptions and
                        inspire action.
                    </p>
                </div>

                {/* Speaker Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {tedxConfig.speakers.map((speaker, i) => (
                        <SpeakerCard key={speaker.name} speaker={speaker} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}

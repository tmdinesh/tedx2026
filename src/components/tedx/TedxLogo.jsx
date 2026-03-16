export default function TedxLogo({
    variant = 'light',
    size = 'md',
    className = '',
    showEventName = true,
}) {
    const textColor = variant === 'light' ? '#ffffff' : '#1a1a1a';
    const redColor = '#e62b1e';

    const sizeMap = {
        sm:   { tedSize: 'clamp(1rem, 2vw, 1.25rem)',     xRatio: 0.58, lift: '0.28em', gap: '0.06em' },
        md:   { tedSize: 'clamp(1.25rem, 3vw, 1.75rem)',  xRatio: 0.58, lift: '0.28em', gap: '0.06em' },
        lg:   { tedSize: 'clamp(1.75rem, 4vw, 2.5rem)',   xRatio: 0.58, lift: '0.28em', gap: '0.06em' },
        xl:   { tedSize: 'clamp(2.25rem, 6vw, 3.5rem)',   xRatio: 0.58, lift: '0.30em', gap: '0.07em' },
        hero: { tedSize: 'clamp(3rem, 10vw, 6rem)',        xRatio: 0.58, lift: '0.30em', gap: '0.07em' },
    };

    const s = sizeMap[size] || sizeMap.md;

    return (
        <span
            className={`inline-flex items-baseline select-none ${className}`}
            style={{
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                lineHeight: 1,
            }}
            aria-label={`TEDx${showEventName ? 'PSGTech' : ''}`}
        >
            {/* TED — bold, main size */}
            <span
                style={{
                    color: redColor,
                    fontSize: s.tedSize,
                    fontWeight: 900,
                    letterSpacing: '-0.03em',
                    lineHeight: 1,
                }}
            >
                TED
            </span>

            {/* x — superscript raised, slightly smaller */}
            <span
                style={{
                    color: redColor,
                    fontSize: `calc(${s.tedSize} * ${s.xRatio})`,
                    fontWeight: 900,
                    position: 'relative',
                    bottom: s.lift,
                    marginLeft: '0.01em',
                    marginRight: s.gap,
                    lineHeight: 1,
                }}
            >
                x
            </span>

            {/* PSGTech — light weight, matches TED size */}
            {showEventName && (
                <span
                    style={{
                        color: textColor,
                        fontSize: s.tedSize,
                        fontWeight: 300,
                        letterSpacing: '-0.01em',
                        lineHeight: 1,
                    }}
                >
                    PSGTech
                </span>
            )}
        </span>
    );
}

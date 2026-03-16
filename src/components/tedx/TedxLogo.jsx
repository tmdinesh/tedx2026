export default function TedxLogo({
    variant = 'light',
    size = 'md',
    className = '',
    showEventName = true,
}) {
    const textColor = variant === 'light' ? '#ffffff' : '#1a1a1a';
    const redColor = '#c1392b';

    const sizeMap = {
        sm:   { tedSize: 'clamp(1rem, 2vw, 1.25rem)' },
        md:   { tedSize: 'clamp(1.25rem, 3vw, 1.75rem)' },
        lg:   { tedSize: 'clamp(1.75rem, 4vw, 2.5rem)' },
        xl:   { tedSize: 'clamp(2.25rem, 6vw, 3.5rem)' },
        hero: { tedSize: 'clamp(3rem, 10vw, 6rem)' },
    };

    const s = sizeMap[size] || sizeMap.md;

    return (
        <span
            className={`inline-flex items-stretch select-none ${className}`}
            style={{
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                lineHeight: 1,
            }}
            aria-label={`TEDx${showEventName ? 'PSGTech' : ''}`}
        >
            {/* TED — bold, red */}
            <span
                style={{
                    color: redColor,
                    fontSize: s.tedSize,
                    fontWeight: 900,
                    letterSpacing: '-0.02em',
                    lineHeight: 1,
                    alignSelf: 'flex-end',
                }}
            >
                TED
            </span>

            {/* x — top-right superscript position */}
            <span
                style={{
                    color: redColor,
                    fontSize: `calc(${s.tedSize} * 0.55)`,
                    fontWeight: 900,
                    lineHeight: 1,
                    alignSelf: 'flex-start',
                    marginTop: '0.05em',
                }}
            >
                x
            </span>

            {/* PSGTech — light weight */}
            {showEventName && (
                <span
                    style={{
                        color: textColor,
                        fontSize: s.tedSize,
                        fontWeight: 300,
                        letterSpacing: '-0.01em',
                        lineHeight: 1,
                        alignSelf: 'flex-end',
                    }}
                >
                    PSGTech
                </span>
            )}
        </span>
    );
}


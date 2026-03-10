/**
 * TEDxPSGTech Logo Component
 *
 * Follows official TEDx brand guidelines:
 * - "TED" in white (or black on light bg), "x" in red, "PSGTech" in white
 * - Helvetica Bold typeface
 * - Must appear on solid background (black or white)
 * - No decorative overlays on the logo itself
 *
 * Props:
 *   variant: 'light' (white text for dark bg) | 'dark' (black text for light bg)
 *   size: 'sm' | 'md' | 'lg' | 'xl' | 'hero'
 *   className: additional classes
 *   showEventName: whether to show "PSGTech" (default true)
 */
export default function TedxLogo({
    variant = 'light',
    size = 'md',
    className = '',
    showEventName = true,
}) {
    const textColor = variant === 'light' ? '#ffffff' : '#1a1a1a';
    const redColor = '#e62b1e';

    const sizeMap = {
        sm: { fontSize: 'clamp(1rem, 2vw, 1.25rem)', tracking: '-0.02em' },
        md: { fontSize: 'clamp(1.25rem, 3vw, 1.75rem)', tracking: '-0.02em' },
        lg: { fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', tracking: '-0.02em' },
        xl: { fontSize: 'clamp(2.25rem, 6vw, 3.5rem)', tracking: '-0.03em' },
        hero: { fontSize: 'clamp(3rem, 10vw, 6rem)', tracking: '-0.03em' },
    };

    const s = sizeMap[size] || sizeMap.md;

    return (
        <span
            className={`inline-flex items-baseline select-none ${className}`}
            style={{
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                fontWeight: 700,
                fontSize: s.fontSize,
                letterSpacing: s.tracking,
                lineHeight: 1,
            }}
            aria-label={`TEDx${showEventName ? 'PSGTech' : ''}`}
        >
            <span style={{ color: textColor }}>TED</span>
            <span style={{ color: redColor }}>x</span>
            {showEventName && (
                <span style={{ color: textColor }}>PSGTech</span>
            )}
        </span>
    );
}

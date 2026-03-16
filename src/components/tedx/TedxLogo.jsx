/**
 * TEDx Logo Component
 *
 * Adjusted to match the provided image exactly:
 * - "TED" and "x" are both in red
 * - Helvetica Bold/Black typeface (weight 900)
 * - Top-aligned "x" with scaled-down font size
 *
 * Props:
 * size: 'sm' | 'md' | 'lg' | 'xl' | 'hero'
 * className: additional classes
 */
export default function TedxLogo({
    size = 'md',
    className = '',
}) {
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
            className={`inline-flex items-start select-none ${className}`}
            style={{
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                fontWeight: 900,
                fontSize: s.fontSize,
                letterSpacing: s.tracking,
                lineHeight: 1,
            }}
            aria-label="TEDx"
        >
            <span style={{ color: redColor }}>TED</span>
            <span style={{ color: redColor, fontSize: '0.73em' }}>x</span>
        </span>
    );
}

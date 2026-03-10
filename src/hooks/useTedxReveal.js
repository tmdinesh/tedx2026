import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for scroll-triggered reveal animations.
 * Returns a ref to attach to the element and a boolean indicating visibility.
 */
export function useTedxReveal(options = {}) {
    const ref = useRef(null);
    const [isRevealed, setIsRevealed] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsRevealed(true);
                    observer.disconnect();
                }
            },
            {
                threshold: options.threshold || 0.15,
                rootMargin: options.rootMargin || '0px 0px -60px 0px',
            }
        );

        observer.observe(element);
        return () => observer.disconnect();
    }, [options.threshold, options.rootMargin]);

    return [ref, isRevealed];
}

/**
 * Staggered children reveal - returns class string for nth child delays
 */
export function staggerDelay(index, baseMs = 100) {
    return { transitionDelay: `${index * baseMs}ms` };
}

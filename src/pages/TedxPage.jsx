import { useState, useEffect } from 'react';
import TedxNavbar from '../components/tedx/TedxNavbar';
import TedxHero from '../components/tedx/TedxHero';
import TedxAboutCollege from '../components/tedx/TedxAboutCollege';
import TedxAbout from '../components/tedx/TedxAbout';
import TedxHighlights from '../components/tedx/TedxHighlights';
import TedxSpeakers from '../components/tedx/TedxSpeakers';
import TedxSchedule from '../components/tedx/TedxSchedule';
import TedxFooter from '../components/tedx/TedxFooter';

function ScrollProgressBar() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const onScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <div
            className="tedx-scroll-progress"
            style={{ width: `${progress}%` }}
        />
    );
}

function BackToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 500);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <button
            className={`tedx-back-to-top ${visible ? 'visible' : ''}`}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
        >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" />
            </svg>
        </button>
    );
}

export default function TedxPage() {
    return (
        <div className="relative" style={{ background: 'var(--bg-dark)' }}>
            <ScrollProgressBar />
            <TedxNavbar />
            <main>
                <TedxHero />
                <TedxAboutCollege />
                <TedxAbout />
                <TedxHighlights />
                <TedxSpeakers />
                <TedxSchedule />
            </main>
            <TedxFooter />
            <BackToTop />
        </div>
    );
}

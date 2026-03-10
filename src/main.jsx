import React from 'react';
import ReactDOM from 'react-dom/client';
import TedxPage from './pages/TedxPage';

// Import fonts
import '@fontsource/inter/400.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/playfair-display/700.css';
import '@fontsource/playfair-display/900.css';

// Import TEDx styles
import './styles/tedx.css';

ReactDOM.createRoot(document.getElementById('tedx-root')).render(
    <React.StrictMode>
        <TedxPage />
    </React.StrictMode>,
);

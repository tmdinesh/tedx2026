import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TedxPage from './pages/TedxPage';
import Archive from './pages/Archive';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import PrivateRoute from './components/PrivateRoute';

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
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<TedxPage />} />
                <Route path="/archive" element={<Archive />} />
                <Route path="/login" element={<AdminLogin />} />
                <Route path="/admin" element={
                    <PrivateRoute>
                        <AdminDashboard />
                    </PrivateRoute>
                } />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
);

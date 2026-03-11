import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const token = localStorage.getItem('tedx_admin_token');

    // Simple check: if there is a token, allow access.
    // In a fully robust app, we'd also verify the token isn't expired on the frontend.
    if (!token) {
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default PrivateRoute;

import React, { useEffect } from 'react';
import { useAuth } from '../context/Auth-context';
import { useNavigate } from 'react-router-dom';

const Protected = ({ children }) => {
    const { loginUserData } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        // Check if the user is logged in and is an admin
        if (!loginUserData || !loginUserData.isAdmin) {
            navigate("/login");
        }
    }, [loginUserData, navigate]); // Add LoginUserData as a dependency

    return (
        <>
            {children} {/* Render children components if the user is an admin */}
        </>
    );
};

export default Protected;

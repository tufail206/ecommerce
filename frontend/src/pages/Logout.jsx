import React, { useEffect } from 'react';
import { useAuth } from '../context/Auth-context';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    logOut();
    navigate('/login');
  }, [logOut, navigate]);

  return <>Logging out...</>;
};

export default Logout;

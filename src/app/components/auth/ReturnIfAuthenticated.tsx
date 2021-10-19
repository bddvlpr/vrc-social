import React from 'react';
import { Redirect } from 'react-router';
import { useAuthSlice } from '../../features/auth/authSlice';

const ReturnIfAuthenticated = () => {
  const authSlice = useAuthSlice();
  return <>{authSlice.accessToken && <Redirect to='/' />}</>;
};

export { ReturnIfAuthenticated };

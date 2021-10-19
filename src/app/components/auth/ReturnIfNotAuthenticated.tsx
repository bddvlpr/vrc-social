import React from 'react';
import { Redirect } from 'react-router';
import { useAuthSlice } from '../../features/auth/authSlice';

const ReturnIfNotAuthenticated = () => {
  const authSlice = useAuthSlice();
  return <>{!authSlice.accessToken && <Redirect to='/' />}</>;
};

export { ReturnIfNotAuthenticated };

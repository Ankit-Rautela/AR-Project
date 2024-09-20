import './App.css'
import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";

import { Toaster } from 'react-hot-toast'
import { useAuthstore } from './store/authStore';
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import LoadingSpinner from './Components/LoadingSpinner';


const Start = lazy(() => import("./Components/Start"));
const Home = lazy(() => import("./Components/Home"));
const Signup = lazy(() => import('./pages/Signup'));
const Login = lazy(() => import('./pages/Login'));
const Services = lazy(() => import('./pages/Services'));
const EmailVerification = lazy(() => import('./pages/EmailVerification'));
const ForgotPassword = lazy(() => import('./pages/ForgotPassword'));
const ResetPassword = lazy(() => import('./pages/ResetPassword'));



const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuthstore();

  if (!isAuthenticated) {
    return <Navigate to='/login' replace />;
  }

  if (!user.isVerified) {
    return <Navigate to='/verify-email' replace />;
  }

  return children;
};

const RedirectAuthenticatedUser = ({ children }) => {
  const { isAuthenticated, user } = useAuthstore();

  if (isAuthenticated && user.isVerified) {
    return <Navigate to='/services' replace />;
  }

  return children;
};

function App() {
  const { isCheckingAuth, checkAuth } = useAuthstore();

  useEffect(() => {
    checkAuth()
  }, [checkAuth])

  if(isCheckingAuth) return <LoadingSpinner />;  
  return (
    <>
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/services" element={<ProtectedRoute><Services /></ProtectedRoute>} />
        <Route path="/" element={<Start />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/signup" element={<RedirectAuthenticatedUser><Signup /></RedirectAuthenticatedUser>} />
        <Route path="/login" element={<RedirectAuthenticatedUser><Login />
        </RedirectAuthenticatedUser>} />
        <Route path="/forgot-password" element={<RedirectAuthenticatedUser><ForgotPassword /></RedirectAuthenticatedUser>} />
        <Route path="/reset-password/:token" element={<RedirectAuthenticatedUser><ResetPassword /></RedirectAuthenticatedUser>} />
        <Route path="/verify-email" element={<EmailVerification />} />
      </Routes>
    </Suspense>
    <Toaster />
  </>
  );
}

export default App;
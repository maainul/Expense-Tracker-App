import './App.css';
import User from './pages/user/User';
import About from './pages/about/About';
import Profile from './pages/profile/Profile';
import Expense from './pages/expense/Expense';
import Signup from './pages/auth/signup/Signup';
import Signin from './pages/auth/signin/Signin';
import { Routes, Route } from 'react-router-dom';
import VerifyEmail from './pages/auth/verifyEmail/VerifyEmail';
import Analytics from './pages/analytics/Analytics';
import Pagenotfound from './pages/misc/Pagenotfound';
import NotAuthorized from './pages/misc/NotAuthorized';
import LaunchingSoon from './pages/misc/LaunchingSoon';
import ResetPassword from './pages/auth/resetPassword/ResetPassword';
import ForgotPassword from './pages/auth/forgotPassword/ForgotPassword';
import ExpenseTypes from './pages/expeseTypes/ExpenseTypes';
import UserPrivateRoute from './components/layout/routes/UserPrivateRoute';
import UnderMaintenance from './pages/misc/UnderMaintenance';
import AdminPrivateRoute from './components/layout/routes/AdminPrivateRoute';
import UserDashboard from './pages/dashboard/user/UserDashboard';
import AdminDashboard from './pages/dashboard/admin/AdminDashboard';
import TwoStepVerification from './pages/auth/twoStepVerification/TwoStepVerification';
import LandingPage from './pages/landingPage/LandingPage';


function App() {
  return (
    <>
      <Routes>

        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/two-step-verification" element={<TwoStepVerification />} />


        <Route path="/dashboard" element={<UserPrivateRoute />}>
          <Route path="user" element={<UserDashboard />} />
          <Route path="user/profile" element={<Profile />} />
          <Route path="user/about" element={<About />} />
          <Route path="user/expense" element={<Expense />} />
          <Route path="user/expense-type" element={<ExpenseTypes />} />
          <Route path="user/analytics" element={<Analytics />} />
        </Route>

        <Route path='/dashboard' element={<AdminPrivateRoute />}>
          <Route path='admin' element={<AdminDashboard />} />
          <Route path="admin/user-list" element={<User />} />
        </Route>

        <Route path="*" element={<Pagenotfound />} />
        <Route path="/under-maintenance" element={<UnderMaintenance />} />
        <Route path="/launching-soon" element={<LaunchingSoon />} />
        <Route path="not-authorized" element={<NotAuthorized />} />

      </Routes >
    </>

  );
}

export default App;

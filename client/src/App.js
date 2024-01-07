import './App.css';
import Home from './pages/Home/Home';
import User from './pages/User/User';
import About from './pages/About/About';
import Profile from './pages/Profile/Profile';
import Expense from './pages/Expense/Expense';
import Signup from './pages/Auth/Signup/Signup';
import Signin from './pages/Auth/Signin/Signin';
import { Routes, Route } from 'react-router-dom';
import VerifyEmail from './pages/Auth/VerifyEmail';
import Analytics from './pages/Analytics/Analytics';
import Pagenotfound from './pages/Misc/Pagenotfound';
import NotAuthorized from './pages/Misc/NotAuthorized';
import LaunchingSoon from './pages/Misc/LaunchingSoon';
import ResetPassword from './pages/Auth/ResetPassword';
import ForgotPassword from './pages/Auth/ForgotPassword';
import ExpenseTypes from './pages/ExpeseTypes/ExpenseTypes';
import UserRoute from './Components/Layout/Routes/UserRoute';
import UnderMaintenance from './pages/Misc/UnderMaintenance';
import AdminRoute from './Components/Layout/Routes/AdminRoute';
import UserDashboard from './pages/Dashboard/User/UserDashboard';
import AdminDashboard from './pages/Dashboard/Admin/AdminDashboard';
import TwoStepVerification from './pages/Auth/TwoStepVerification';


function App() {
  return (
    <>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/two-step-verification" element={<TwoStepVerification />} />


        <Route path="/dashboard" element={<UserRoute />}>
          <Route path="user" element={<UserDashboard />} />
          <Route path="user/profile" element={<Profile />} />
          <Route path="user/about" element={<About />} />
          <Route path="user/expense" element={<Expense />} />
          <Route path="userexpense-type" element={<ExpenseTypes />} />
          <Route path="user/analytics" element={<Analytics />} />
        </Route>

        <Route path='/dashboard' element={<AdminRoute />}>
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

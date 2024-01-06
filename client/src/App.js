import './App.css';
import User from './pages/User/User';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Expense from './pages/Expense/Expense';
import Profile from './pages/Profile/Profile';
import Signup from './pages/Auth/Signup/Signup';
import Signin from './pages/Auth/Signin/Signin';
import { Routes, Route } from 'react-router-dom';
import Analytics from './pages/Analytics/Analytics';
import ExpenseTypes from './pages/ExpeseTypes/ExpenseTypes';
import Dashboard from './pages/User/Dashboard';
import PrivateRoute from './Components/Routes/PrivateRoute';

function App() {

  return (
    <>

      <Routes>

        <Route path={'/'} element={<Home />} />
        <Route path={'/signup'} element={<Signup />} />
        <Route path={'/signin'} element={<Signin />} />

        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="" element={<Dashboard />} />
          <Route path={'/dashboard/profile'} element={<Profile />} />
          <Route path={'/dashboard/about'} element={<About />} />
          <Route path={'/dashboard/expense'} element={<Expense />} />
          <Route path={'/dashboard/expense-type'} element={<ExpenseTypes />} />
          <Route path={'/dashboard/analytics'} element={<Analytics />} />
          <Route path={'/dashboard/user-list'} element={<User />} />
        </Route>

      </Routes >
    </>
  );
}

export default App;

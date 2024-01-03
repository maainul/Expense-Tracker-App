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

function App() {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/about'} element={<About />} />
        <Route path={'/expense'} element={<Expense />} />
        <Route path={'/expense-type'} element={<ExpenseTypes />} />
        <Route path={'/signup'} element={<Signup />} />
        <Route path={'/analytics'} element={<Analytics />} />
        <Route path={'/signin'} element={<Signin />} />
        <Route path={'/profile'} element={<Profile />} />
        <Route path={'/user-list'} element={<User />} />
      </Routes>
    </>
  );
}

export default App;

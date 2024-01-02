import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Expense from './pages/Expense/Expense';
import ExpenseTypes from './pages/ExpeseTypes/ExpenseTypes';
import Profile from './pages/Profile/Profile';
import Analytics from './pages/Analytics/Analytics';
import './App.css';
import Sidebar from './Components/Layout/Sidebar/Sidebar';
import User from './pages/User/User';
import Signin from './pages/Auth/Signin/Signin';
import Signup from './pages/Auth/Signup/Signup';


function App() {
  return (
    <>
      <div className='App'>
        <div className='AppGlass'>
          <Sidebar />
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
        </div>
      </div>
    </>
  );
}

export default App;

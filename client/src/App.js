import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Expense from './pages/Expense/Expense';
import ExpenseTypes from './pages/ExpeseTypes/ExpenseTypes';
import Registration from './pages/Auth/Registration/Registration';
import Login from './pages/Auth/Login/Login';
import Profile from './pages/Profile/Profile';
import Analytics from './pages/Analytics/Analytics';
import './App.css';
import Sidebar from './Components/Layout/Sidebar/Sidebar';
import User from './pages/User/User';


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
            <Route path={'/registration'} element={<Registration />} />
            <Route path={'/analytics'} element={<Analytics />} />
            <Route path={'/login'} element={<Login />} />
            <Route path={'/profile'} element={<Profile />} />
            <Route path={'/user-list'} element={<User />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;

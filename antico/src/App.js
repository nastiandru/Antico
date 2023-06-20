import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import SignupPage from './pages/SighupPage/SignupPage'

const App = () => {
  return (
    <Router>
      <div className='app'>
        {/* Навігаційне меню */}
        <nav>
          
        </nav>

        {/* Вміст сторінок */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/signup" element={<SignupPage/>} />
          {/* Додайте інші шляхи для сторінок */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
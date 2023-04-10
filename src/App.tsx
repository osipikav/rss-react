import './App.css';
import React from 'react';

import Header from './components/Header/Header';
import { Navigate, Route, Routes } from 'react-router-dom';
import NotFoundPage from './pages/NotFondPage';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage';
import FormPage from './pages/FormPage/FormPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="*" element={<Navigate to="/404" />} />
        <Route path="/404" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;

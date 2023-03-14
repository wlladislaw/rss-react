import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Error from './Error';
import AboutUs from './AboutUs';
import NavBar from './NavBar';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/about_us" element={<AboutUs />} />
        <Route path="/" element={<App />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

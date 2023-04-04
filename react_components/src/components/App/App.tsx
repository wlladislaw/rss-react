import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFound from '../NotFound/NotFound';
import AboutUs from '../About/AboutUs';
import NavBar from '../NavBar/NavBar';
import MainPage from '../MainPaige/MainPage';
import './App.scss';
import Form from '../Form/Form';

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/forms" element={<Form />} />
        <Route path="/about_us" element={<AboutUs />} />
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

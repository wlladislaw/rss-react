import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFound from '../NotFound/NotFound';
import AboutUs from '../About/AboutUs';
import NavBar from '../NavBar/NavBar';
import MainPage from '../MainPaige/MainPage';
import './App.scss';
class App extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <Routes>
          <Route path="/about_us" element={<AboutUs />} />
          <Route path="/" element={<MainPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </>
    );
  }
}

export default App;

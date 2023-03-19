import React from 'react';
import './index.scss';
import { Routes, Route } from 'react-router-dom';
import NotFound from './NotFound';
import AboutUs from './AboutUs';
import NavBar from './NavBar';
import MainPage from './MainPage';
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

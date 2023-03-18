import React from 'react';
import './index.scss';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Error from './Error';
import AboutUs from './AboutUs';
import NavBar from './NavBar';
import MainPage from './MainPage';
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/about_us" element={<AboutUs />} />
          <Route path="/" element={<MainPage />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;

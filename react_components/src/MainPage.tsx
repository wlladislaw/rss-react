import React from 'react';
import './App.scss';

import Cards from './Cards';
import SearchBar from './SearchBar';

class MainPage extends React.Component {
  render() {
    return (
      <div className="App">
        <SearchBar prop={''} />
        <Cards />
      </div>
    );
  }
}

export default MainPage;

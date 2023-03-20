import React from 'react';

import Cards from '../CardsList/CardsList';
import SearchBar from '../SearchBar/SearchBar';

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

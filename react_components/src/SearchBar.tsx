import React from 'react';

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
    };
  }
  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
    console.log(this.state.name);
  };
  componentWillUnmount(): void {
    console.log('Unmount', this.state.name);
  }
  render() {
    return (
      <div className="search_bar">
        <form>
          <input type="text" onChange={this.handleNameChange} placeholder="Click here to search!" />
        </form>
      </div>
    );
  }
}
export default SearchBar;

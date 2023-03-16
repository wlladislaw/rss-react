import React from 'react';

interface SearchBarProps {
  prop: string;
}
interface SearchBarState {
  input: string;
}

class SearchBar extends React.Component<SearchBarProps, SearchBarState> {
  constructor(props: SearchBarProps) {
    super(props);
    this.state = {
      input: '',
    };
  }
  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ input: event.target.value });
    console.log(this.state.input);
  };

  componentDidMount() {
    const inputStorage = localStorage.getItem('inputValue');
    if (inputStorage) {
      this.setState({ input: inputStorage });
    }
  }

  componentWillUnmount(): void {
    localStorage.setItem('inputValue', this.state.input);
  }
  render() {
    return (
      <div className="search_bar">
        <form>
          <input
            type="text"
            value={this.state.input}
            onChange={this.handleInputChange}
            placeholder="Click here to search!"
          />
        </form>
        <div>{this.state.input}</div>
      </div>
    );
  }
}
export default SearchBar;

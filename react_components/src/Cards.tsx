import React from 'react';
import Card from './Card';
import './cards.scss';
import { data } from './data';

class Cards extends React.Component {
  state = {
    data: data,
  };

  componentDidMount() {
    const inputStorage = localStorage.getItem('inputValue');

    const filtered = data.filter((el) => {
      if (inputStorage !== null)
        return (
          el.title.toLowerCase().includes(inputStorage.toLowerCase()) ||
          el.description.toLowerCase().includes(inputStorage.toLowerCase()) ||
          el.price == +inputStorage ||
          el.category.toLowerCase().includes(inputStorage.toLowerCase())
        );
    });
    this.setState({ data: filtered });
  }

  render() {
    return (
      <div data-testid="list" className="cards_container">
        {this.state.data.map((el) => (
          <Card key={el.id} card={el} />
        ))}
      </div>
    );
  }
}

export default Cards;

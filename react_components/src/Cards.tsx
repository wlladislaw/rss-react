import React from 'react';
import Card from './Card';
import './cards.scss';
import { data } from './data';

// interface Data {
//   id: number;
//   title: string;
//   description: string;
//   price: number;
//   discountPercentage: number;
//   rating: number;
//   stock: number;
//   brand: string;
//   category: string;
//   thumbnail: string;
//   images: string[];
// }

class Cards extends React.Component {
  state = {
    data: data,
  };
  render() {
    const { data } = this.state;
    return (
      <div className="cards_container">
        {data.map((el) => (
          <Card key={el.id} card={el} />
        ))}
      </div>
    );
  }
}

export default Cards;

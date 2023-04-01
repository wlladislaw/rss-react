import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import './Cards.scss';
import { data } from '../../data';

function Cards() {
  const [cards, setCards] = useState(data);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const inputStorage = localStorage.getItem('inputValue') || '';
    setInputValue(inputStorage.toLowerCase());
  }, []);

  useEffect(() => {
    const filtered = data.filter((card) => {
      const title = card.title.toLowerCase();
      const description = card.description.toLowerCase();
      const category = card.category.toLowerCase();
      const price = card.price.toString();
      return (
        title.includes(inputValue) ||
        description.includes(inputValue) ||
        category.includes(inputValue) ||
        price.includes(inputValue)
      );
    });
    setCards(filtered);
  }, [inputValue]);

  return (
    <div data-testid="list" className="cards_container">
      {cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
}

export default Cards;

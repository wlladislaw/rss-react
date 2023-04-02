import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import './Cards.scss';
import { data } from '../../data';

import { Data } from '../../types';

function filterCards(cards: Data[], inputValue: string) {
  const input = inputValue.toLowerCase();
  return cards.filter((card) => {
    const title = card.title.toLowerCase();
    const description = card.description.toLowerCase();
    const category = card.category.toLowerCase();
    const price = card.price.toString();
    return (
      title.includes(input) ||
      description.includes(input) ||
      category.includes(input) ||
      price.includes(input)
    );
  });
}

export default function Cards() {
  const [cards, setCards] = useState(data);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const storedValue = localStorage.getItem('inputValue') || '';
    setInputValue(storedValue);
  }, []);

  useEffect(() => {
    setCards(filterCards(data, inputValue));
  }, [inputValue]);

  return (
    <div data-testid="list" className="cards_container">
      {cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
}

import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import './Cards.scss';

export default function Cards({ data }) {
  // const [cards, setCards] = useState(data);
  // const [inputValue, setInputValue] = useState('');

  // useEffect(() => {
  //   const storedValue = localStorage.getItem('inputValue') || '';
  //   setInputValue(storedValue);
  // }, []);

  // useEffect(() => {
  //   setCards(filterCards(data, inputValue));
  // }, [inputValue]);

  return (
    <div data-testid="list" className="cards_container">
      {data?.map((card, index) => (
        <Card key={index} card={card} />
      ))}
    </div>
  );
}

import Card from '../Card/Card';
import './Cards.scss';
import { data } from '../../data';
import { useEffect, useState } from 'react';

const Cards = () => {
  const [cards, setData] = useState(data);

  useEffect(() => {
    const inputStorage = localStorage.getItem('inputValue');

    const filtered = cards.filter((el) => {
      if (inputStorage !== null)
        return (
          el.title.toLowerCase().includes(inputStorage.toLowerCase()) ||
          el.description.toLowerCase().includes(inputStorage.toLowerCase()) ||
          el.price == +inputStorage ||
          el.category.toLowerCase().includes(inputStorage.toLowerCase())
        );
    });
    setData(filtered);
  }, []);

  return (
    <div data-testid="list" className="cards_container">
      {cards.map((el) => (
        <Card key={el.id} card={el} />
      ))}
    </div>
  );
};

export default Cards;

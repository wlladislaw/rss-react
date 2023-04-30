import { CardsProps } from '../../types';
import Card from '../Card/Card';
import './Cards.scss';

export default function Cards({ cards }: CardsProps) {
  return (
    <div data-testid="list" className="cards_container">
      {cards?.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
}

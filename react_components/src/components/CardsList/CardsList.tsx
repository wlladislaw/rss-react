import Card from '../Card/Card';
import './Cards.scss';

export default function Cards({ data }) {
  return (
    <div data-testid="list" className="cards_container">
      {data?.map((card, index) => (
        <Card key={index} card={card} />
      ))}
    </div>
  );
}

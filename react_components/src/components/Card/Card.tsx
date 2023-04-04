import { Data } from '../../types';

const Card = ({ card }: { card: Data }) => {
  return (
    <div className="card">
      <p className="title_card">{card.title}</p>
      <div className="card_info">
        <img src={card.thumbnail} className="card_image" alt="image" />
        <ul className="description_card">
          <li>
            <b>{`rating: ${card.rating}`}</b>
          </li>
          <li>
            <b>{`count: ${card.stock}`}</b>
          </li>
          <li>
            <b>{`brand: ${card.brand}`}</b>
          </li>
          <li>
            <b>{`${card.price} $`}</b>
          </li>
          <li>
            <span className="card_more">SEE MORE</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Card;

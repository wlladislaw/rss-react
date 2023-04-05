import { Data } from '../../types';

const Card = ({ card }: { card }) => {

  return (
    <div className="card">
      {/* <p className="title_card">{card.}</p> */}
      <div className="card_info">
        <img src={card} className="card_image" alt="image" />
        <ul className="description_card">
          <li>
            {/* <b>{`rating: ${card.server}`}</b> */}
          </li>
         
        </ul>
      </div>
    </div>
  );
};

export default Card;

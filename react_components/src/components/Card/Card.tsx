import React from 'react';
interface Data {
  card: {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
  };
}
class Card extends React.Component<Data> {
  render() {
    const { card } = this.props;
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
              <b>{` ${card.price} $`}</b>
            </li>
            <li>
              <span className="card_more">SEE MORE</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Card;

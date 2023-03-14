import React from 'react';
import Vite from '../public/vite.svg';

class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <img src={Vite} className="card-image" alt={'svg'} />

        <p>title of product </p>

        <span>
          <b>{'Rating: '}</b>
        </span>
      </div>
    );
  }
}

export default Card;

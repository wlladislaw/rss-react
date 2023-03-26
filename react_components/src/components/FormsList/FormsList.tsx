import React from 'react';
import { Forms } from '../../types';
import './FormsList.scss';
class FormsList extends React.Component<{ forms: Forms[] }> {
  render() {
    return (
      <div className="formsList_container">
        <h3> SAVED FORMS : </h3>
        {this.props.forms.map((el, index) => (
          <div className="info_card-item" key={index}>
            <p>Name: {el.name}</p>
            <p>Phone: {el.phone}</p>
            <p>Birthday: {el.date}</p>
            <p>Payment method: {el.select}</p>
            <p>Delivery: {el.checkbox ? 'need delivery' : 'without delivery'}</p>
            <p>Gender: {el.gender}</p>
            <p>Ava: {el.file}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default FormsList;

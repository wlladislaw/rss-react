import React from 'react';
import './FormsList.scss';
import Form from '../Form/Form';

class FormsList extends React.Component {
  render() {
    return (
      <div className="formsList_container">
        <Form />
        <h3>FORMS</h3>
      </div>
    );
  }
}

export default FormsList;

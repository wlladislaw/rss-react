import React from 'react';
import './Form.scss';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.input = React.createRef();
  }
  handleSubmit(event) {
    alert('A name was submitted: ' + this.input.current.value);
    event.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form_container">
          <div className="form_info">
            <h3>Information</h3>
            <label>
              Your name
              <input id="name" name="name" type="text" placeholder="Name" />
            </label>
            {/* <img src={} className="form_image" alt="image" /> */}
            <label htmlFor="phone">Your phone</label>
            <input id="phone" name="phone" type="string" placeholder="+*********" />

            <input id="email" name="email" type="email" />
            <label>
              {' '}
              date of birthday
              <input type="date" />
            </label>

            <label htmlFor="cars">Choose a car:</label>
            <select name="cars" id="cars">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="audi">Audi</option>
            </select>

            <input type="checkbox" />

            <h3>male/female ?</h3>
            <div className="switch_field">
              <input type="radio" id="radio-one" name="switch-one" value="yes" checked />
              <label htmlFor="radio-one">Yes</label>
              <input type="radio" id="radio-two" name="switch-one" value="no" />
              <label htmlFor="radio-two">No</label>
            </div>

            <input type="file" />
            <button className="form_btn">Submit</button>
          </div>
        </div>
      </form>
    );
  }
}

export default Form;

import React from 'react';
import './Form.scss';

class Form extends React.Component<{}, {}> {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.nameInput = React.createRef();
    this.phoneInput = React.createRef();
    this.dateInput = React.createRef();
  }
  // handleSubmit(event) {
  //   event.preventDefault();
  //   const email = this._emailInput.value;
  //   console.log('email: ', email);
  //   // console.log('A name was submitted: ' + this.input.current.value);
  // }
  handleSubmit(event) {
    event.preventDefault();
    alert(
      'A name was submitted: ' +
        this.nameInput.current.value +
        this.phoneInput.current.value +
        this.dateInput.current.value
    );
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form_container">
          <div className="form_info">
            <h3>Information</h3>

            <label>
              Your name
              <input id="name" ref={this.nameInput} name="name" type="text" placeholder="Name" />
            </label>

            <label htmlFor="phone">Your phone</label>
            <input
              id="phone"
              ref={this.phoneInput}
              name="phone"
              type="text"
              placeholder="+*********"
            />

            {/* <input
              id="email"
              ref={(inp) => (this._emailInput = inp)}
              name="email"
              type="email"
              placeholder="email@gmail.com"
            /> */}

            <label>
              date of birthday
              <input type="date" ref={this.dateInput} />
            </label>

            <label htmlFor="cars">Choose a car:</label>
            <select name="cars" id="cars">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="audi">Audi</option>
            </select>

            <label>
              automatic
              <input type="checkbox" />
            </label>

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

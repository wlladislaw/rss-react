import React from 'react';
import './Form.scss';

class Form extends React.Component<{}, {}> {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.nameInput = React.createRef();
    this.phoneInput = React.createRef();
    this.dateInput = React.createRef();

    this.state = {
      forms: [],
    };
  }

  handleSubmit(event) {
    event.preventDefault();

    const newForm = {
      name: this.nameInput.current.value,
      phone: this.phoneInput.current.value,
      date: this.dateInput.current.value,
    };
    this.setState((prevState) => ({
      forms: [...prevState.forms, newForm],
    }));
    this.nameInput.current.value = '';
    this.phoneInput.current.value = '';
    this.dateInput.current.value = '';
  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <div className="form_container">
            <div className="form_info">
              <h3>Information</h3>
              <label>
                Your name
                <input
                  id="name"
                  ref={this.nameInput}
                  name="name"
                  type="text"
                  placeholder="Name"
                  required
                />
              </label>

              <label htmlFor="phone">Phone</label>
              <input
                id="phone"
                ref={this.phoneInput}
                name="phone"
                type="text"
                placeholder="+***..."
                required
              />
              {/*
              <input
                id="email"
                ref={(inp) => (this._emailInput = inp)}
                name="email"
                type="email"
                placeholder="email@gmail.com"
              /> */}
              <br />
              <label>
                Date of birthday
                <input type="date" ref={this.dateInput} value="1960-01-01" />
              </label>
              <br />
              <label htmlFor="payment">Choose a payment method:</label>
              <select name="payment">
                <option value="cash">Cash</option>
                <option value="online">Online</option>
                <option value="crypto">Crypto</option>
              </select>
              <br />
              <label>
                Delivery:
                <input type="checkbox" />
              </label>

              <div className="switch_field">
                <span>Gendre:</span>
                <input type="radio" name="switch-one" value="male" checked />
                <label htmlFor="radio-one">male</label>
                <input type="radio" name="switch-one" value="female" />
                <label htmlFor="radio-two">female</label>
              </div>
              {/* <label className="file_upload">
                <span>Upload files</span>
                <input type="file" name="file" />
              </label> */}
              <div id="file_upload-container">
                <label>
                  <input type="file" name="file" id="uploade_file" />
                  <span>Upload file</span>
                </label>
              </div>

              <button className="form_btn">Save</button>
            </div>
          </div>
        </form>
        <div className="info_cards">
          {this.state.forms.map((el) => (
            <div className="info_card-item" key={el.phone}>
              <h1>{el.name}</h1>
              <h1>{el.phone}</h1>
              <h1>{el.date}</h1>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Form;

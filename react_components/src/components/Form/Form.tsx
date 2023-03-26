import React, { Component, FormEvent, RefObject } from 'react';
import './Form.scss';

interface FormState {
  forms: Forms[];
  isSubmited: boolean;
  isValidPhone: boolean;
  isValidName: boolean;
}

interface Forms {
  name: string;
  phone: string;
  date: string;
  select: string;
  checkbox: boolean;
  gender: string;
  file: string;
}

const validate = (name: string) => {
  const onlyLettersRegex = /^[a-zA-Z]+$/;
  if (name.charAt(0) !== name.charAt(0).toUpperCase() || !onlyLettersRegex.test(name)) {
    return false;
  }
  const minNameLength = 2;
  const maxNameLength = 42;
  const isValidName = name.length >= minNameLength && name.length <= maxNameLength;
  return isValidName;
};

class Form extends Component<object, FormState> {
  private nameInput: RefObject<HTMLInputElement>;
  private phoneInput: RefObject<HTMLInputElement>;
  private dateInput: RefObject<HTMLInputElement>;
  private selectInput: RefObject<HTMLSelectElement>;
  private checkboxInput: RefObject<HTMLInputElement>;
  private radioRefMale: RefObject<HTMLInputElement>;
  private fileInput: RefObject<HTMLInputElement>;

  constructor(props: object) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.nameInput = React.createRef<HTMLInputElement>();
    this.phoneInput = React.createRef<HTMLInputElement>();
    this.dateInput = React.createRef<HTMLInputElement>();
    this.selectInput = React.createRef<HTMLSelectElement>();
    this.checkboxInput = React.createRef<HTMLInputElement>();
    this.radioRefMale = React.createRef<HTMLInputElement>();
    this.fileInput = React.createRef<HTMLInputElement>();

    this.state = {
      forms: [],
      isSubmited: false,
      isValidPhone: true,
      isValidName: true,
    };
  }

  handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nameInputValue = this.nameInput.current!.value;
    if (!validate(nameInputValue)) {
      this.setState({
        isValidName: false,
      });
    } else {
      this.setState({
        isValidName: true,
      });
    }

    const phoneInputValue = this.phoneInput.current!.value;
    const phoneRegex =
      /(\+)[- _]*\(?[- _]*(\d{3}[- _]*\)?([- _]*\d){7}|\d\d[- _]*\d\d[- _]*\)?([- _]*\d){6})/g;
    const isValidPhone = phoneRegex.test(phoneInputValue);

    if (!isValidPhone) {
      this.setState({
        isValidPhone: false,
      });
      return null;
    }
    console.log('work!');

    const selectedRadio = this.radioRefMale.current!.checked ? 'male' : 'female';
    const newForm: Forms = {
      name: nameInputValue,
      phone: phoneInputValue,
      date: this.dateInput.current!.value,
      select: this.selectInput.current!.value,
      checkbox: this.checkboxInput.current!.checked,
      gender: selectedRadio,
      file: this.fileInput.current!.value,
    };
    this.setState((prevState) => ({
      forms: [...prevState.forms, newForm],
      isSubmited: true,
      isValidPhone: true,
      isValidName: true,
    }));

    event.currentTarget.reset();

    setTimeout(() => {
      this.setState({
        isSubmited: false,
      });
    }, 3500);
  }

  render() {
    const { isValidPhone, isValidName } = this.state;
    return (
      <>
        {this.state.isSubmited && (
          <div className="confirmation_message">
            <h2>Data has been saved! Thanks for order!</h2>
          </div>
        )}
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
              <p style={{ color: 'red', margin: 0 }}>{!isValidName ? 'Invalid value' : null}</p>

              <label htmlFor="phone">Phone</label>
              <input
                id="phone"
                ref={this.phoneInput}
                name="phone"
                type="text"
                placeholder="+*********"
                required
              />
              <p style={{ color: 'red', margin: 0 }}>{!isValidPhone ? 'Invalid value' : null}</p>
              <br />
              <label>
                Date of birthday
                <input
                  type="date"
                  ref={this.dateInput}
                  defaultValue="1990-01-01"
                  max={new Date().toISOString().split('T')[0]}
                  min="1900-01-01"
                />
              </label>
              <br />
              <label htmlFor="payment">Choose a payment method </label>
              <select ref={this.selectInput} name="payment">
                <option value="cash">Cash</option>
                <option value="online">Online</option>
                <option value="crypto">Crypto</option>
              </select>
              <br />
              <label>
                Delivery
                <input type="checkbox" ref={this.checkboxInput} />
              </label>

              <div className="switch_field">
                <span>Gender</span>
                <input
                  type="radio"
                  ref={this.radioRefMale}
                  name="switch"
                  value="male"
                  defaultChecked
                />
                <label htmlFor="radio-one">Male</label>
                <input type="radio" name="switch" value="female" />
                <label htmlFor="radio-two">Female</label>
              </div>
              <div id="file_upload-container">
                <label>
                  <input
                    type="file"
                    name="file"
                    ref={this.fileInput}
                    id="upload_file"
                    accept="image/*"
                  />
                  <span>Upload avatar</span>
                </label>
              </div>

              <button className="form_btn">Save</button>
            </div>
          </div>
        </form>
        <div className="info_cards">
          {this.state.forms.map((el, index) => (
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
      </>
    );
  }
}

export default Form;

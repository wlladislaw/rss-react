import React, { Component, FormEvent, RefObject } from 'react';
import './Form.scss';

interface FormState {
  forms: Forms[];
  isSubmited: boolean;
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
    // this.formElement = React.createRef<HTMLFormElement>();
    this.nameInput = React.createRef<HTMLInputElement>();
    this.phoneInput = React.createRef<HTMLInputElement>();
    this.dateInput = React.createRef<HTMLInputElement>();
    this.selectInput = React.createRef<HTMLSelectElement>();
    this.checkboxInput = React.createRef<HTMLInputElement>();
    this.radioRefMale = React.createRef<HTMLInputElement>();
    //this.femaleInput = React.createRef<HTMLInputElement>();
    this.fileInput = React.createRef<HTMLInputElement>();

    this.state = {
      forms: [],
      isSubmited: false,
    };
  }

  handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const selectedRadio = this.radioRefMale.current!.checked ? 'male' : 'female';
    const newForm: Forms = {
      name: this.nameInput.current!.value,
      phone: this.phoneInput.current!.value,
      date: this.dateInput.current!.value,
      select: this.selectInput.current!.value,
      checkbox: this.checkboxInput.current!.checked,
      gender: selectedRadio,
      file: this.fileInput.current!.value,
    };
    this.setState((prevState) => ({
      forms: [...prevState.forms, newForm],
      isSubmited: true,
    }));

    event.currentTarget.reset();

    setTimeout(() => {
      this.setState({
        isSubmited: false,
      });
    }, 3500);
  }

  render() {
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

              <label htmlFor="phone">Phone</label>
              <input
                id="phone"
                ref={this.phoneInput}
                name="phone"
                type="text"
                placeholder="+***..."
                required
              />
              <br />
              <label>
                Date of birthday
                <input type="date" ref={this.dateInput} defaultValue="1990-01-01" />
              </label>
              <br />
              <label htmlFor="payment">Choose a payment method:</label>
              <select ref={this.selectInput} name="payment">
                <option value="cash">Cash</option>
                <option value="online">Online</option>
                <option value="crypto">Crypto</option>
              </select>
              <br />
              <label>
                Delivery:
                <input type="checkbox" ref={this.checkboxInput} />
              </label>

              <div className="switch_field">
                <span>Gender:</span>
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
                  <input type="file" name="file" ref={this.fileInput} id="upload_file" />
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
              <p>{el.name}</p>
              <p>{el.phone}</p>
              <p>{el.date}</p>
              <p>{el.select}</p>
              <p>{el.checkbox ? 'need delivery' : 'without delivery'}</p>
              <p>{el.gender}</p>
              <p>{el.file}</p>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default Form;

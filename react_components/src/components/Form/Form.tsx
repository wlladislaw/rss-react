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
  file: string;
}

class Form extends Component<object, FormState> {
  private nameInput: RefObject<HTMLInputElement>;
  private phoneInput: RefObject<HTMLInputElement>;
  private dateInput: RefObject<HTMLInputElement>;
  private selectInput: RefObject<HTMLSelectElement>;
  private checkboxInput: RefObject<HTMLInputElement>;
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
    // this.dateInput = React.createRef<HTMLInputElement>();
    this.fileInput = React.createRef<HTMLInputElement>();

    this.state = {
      forms: [],
      isSubmited: false,
    };
  }

  handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    const newForm: Forms = {
      name: this.nameInput.current!.value,
      phone: this.phoneInput.current!.value,
      date: this.dateInput.current!.value,
      select: this.selectInput.current!.value,
      checkbox: this.checkboxInput.current!.checked,
      // this.dateInput = React.createRef<HTMLInputElement>();
      file: this.fileInput.current!.value,
    };

    this.setState((prevState) => ({
      forms: [...prevState.forms, newForm],
      isSubmited: true,
    }));

    // this.nameInput.current!.value = '';
    // this.phoneInput.current!.value = '';
    // this.dateInput.current!.value = '';
    // this.selectInput.current!.value = '';
    // this.phoneInput = React.createRef<HTMLInputElement>();
    // this.dateInput = React.createRef<HTMLInputElement>();
    // this.nameInput = React.createRef<HTMLInputElement>();

    event.currentTarget.reset();

    setTimeout(() => {
      this.setState({
        isSubmited: false,
      });
    }, 3500);
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.forms !== this.state.forms) {
  //     alert('Thanks for order!');
  //   }
  // }

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
                <input type="date" ref={this.dateInput} defaultValue="1960-01-01" />
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
                <input type="radio" name="switch-one" value="male" checked />
                <label htmlFor="radio-one">Male</label>
                <input type="radio" name="switch-one" value="female" />
                <label htmlFor="radio-two">Female</label>
              </div>
              <div id="file_upload-container">
                <label>
                  <input type="file" name="file" ref={this.fileInput} id="upload_file" />
                  <span>Upload file</span>
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
              <p>{el.checkbox ? 'need delevery' : 'without delivery'}</p>
              <p>{el.file}</p>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default Form;

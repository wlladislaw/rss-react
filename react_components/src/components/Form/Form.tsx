import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Forms } from '../../types';
import FormsList from '../FormsList/FormsList';
import './Form.scss';

const Form = () => {
  const { register, handleSubmit, reset } = useForm<Forms>();
  const [forms, setForms] = useState<Forms[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isValidPhone, setIsValidPhone] = useState(true);
  const [isValidName, setIsValidName] = useState(true);

  function onSubmit(data: Forms) {
    const validate = (name: string, phone: string) => {
      let isValidName;
      const minNameLength = 2;
      const maxNameLength = 42;
      isValidName = name.length >= minNameLength && name.length <= maxNameLength;
      const onlyLettersRegex = /^\s*[a-z-а-яё]+(?:\s+[a-z-а-яё]+){1,2}\s*$/i;
      if (name.charAt(0) !== name.charAt(0).toUpperCase() || !onlyLettersRegex.test(name)) {
        isValidName = false;
        setIsValidName(false);
      }
      const phoneRegex =
        /(\+)[- _]*\(?[- _]*(\d{3}[- _]*\)?([- _]*\d){7}|\d\d[- _]*\d\d[- _]*\)?([- _]*\d){6})/g;
      const isValidPhone = phoneRegex.test(phone);
      setIsValidPhone(isValidPhone);

      return isValidName && isValidPhone;
    };

    const { name, phone, date, select, checkbox } = data;
    if (!validate(name, phone)) {
      return null;
    }

    const selectedRadio = data.gender === 'male' ? 'male' : 'female';
    const newForm: Forms = {
      name,
      phone,
      date,
      select,
      checkbox,
      gender: selectedRadio,
      file: data.file[0] ? URL.createObjectURL(data.file[0] as unknown as File) : '',
    };
    setForms((prevState) => [...prevState, newForm]);
    setIsSubmitted(true);
    setIsValidPhone(true);
    setIsValidName(true);

    reset();

    setTimeout(() => {
      setIsSubmitted(false);
    }, 3700);
  }

  return (
    <>
      {isSubmitted && (
        <div className="confirmation_message">
          <h2>Data has been saved! Thanks for order!</h2>
        </div>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form_container">
          <div className="form_info">
            <h3>Information</h3>
            <label>
              Your name
              <input
                id="name"
                {...register('name', { required: true })}
                name="name"
                type="text"
                placeholder="Name and Last name"
                required
              />
            </label>
            <p style={{ color: 'red', margin: 0 }}>{!isValidName ? 'Invalid value' : null}</p>

            <label htmlFor="phone">Phone</label>
            <input
              id="phone"
              {...register('phone', { required: true })}
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
                {...register('date', { required: true })}
                defaultValue="1990-01-01"
                max={new Date().toISOString().split('T')[0]}
                min="1900-01-01"
              />
            </label>
            <br />
            <label htmlFor="payment">Choose a payment method </label>
            <select {...register('select', { required: true })} name="payment">
              <option value="cash">Cash</option>
              <option value="online">Online</option>
              <option value="crypto">Crypto</option>
            </select>
            <br />
            <label>
              Delivery
              <input type="checkbox" {...(register('checkbox'), { required: true })} />
            </label>

            <div className="switch_field">
              <span>Gender</span>
              <input
                type="radio"
                {...(register('gender'), { required: true })}
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
                <input type="file" {...register('file')} id="upload_file" accept="image/*" />
                <span>Upload avatar</span>
              </label>
            </div>

            <button className="form_btn">Save</button>
          </div>
        </div>
      </form>
      <div className="info_cards">
        <FormsList forms={forms} />
      </div>
    </>
  );
};

export default Form;

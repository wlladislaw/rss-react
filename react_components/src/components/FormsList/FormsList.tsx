import { useAppSelector } from '../../hooks/redux';
import './FormsList.scss';

export default function FormsList() {
  const { forms } = useAppSelector((state) => state.submittedFormsReducer);

  return (
    <div className="formsList_container">
      <h3> SAVED FORMS : </h3>
      {forms.map((el, index) => (
        <div className="info_card-item" key={index}>
          <p>Name: {el.name}</p>
          <p>Phone: {el.phone}</p>
          <p>Birthday: {el.date}</p>
          <p>Payment method: {el.select}</p>
          <p>Delivery: {el.checkbox ? 'need delivery' : 'without delivery'}</p>
          <p>Gender: {el.gender}</p>
          <img className="formImg" src={el.file} alt={el.name} />
        </div>
      ))}
    </div>
  );
}

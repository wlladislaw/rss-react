import { Forms } from '../../types';
import './FormsList.scss';
interface FormsListProps {
  forms: Forms[];
}

export default function FormsList(props: FormsListProps) {
  const { forms } = props;

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
          <p>Ava: {el.file}</p>
        </div>
      ))}
    </div>
  );
}

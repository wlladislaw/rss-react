import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../redux/slice';

export default function MainPage() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <h2>About Us !</h2>

      <div>
        <button aria-label="Increment value" onClick={() => dispatch(increment())}>
          Increment
        </button>
        <span>{count}</span>
        <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </div>
    </>
  );
}

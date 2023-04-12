import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../redux/slice';
import { photosSlice } from '../../redux/reducers/DataPhotosSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

export default function MainPage() {
  // const count = useSelector((state) => state.counter.value);
  // const dispatch = useDispatch();
  const { count } = useAppSelector((state) => state.photosReducer);
  const { increment } = photosSlice.actions;
  const dispatch = useAppDispatch();

  return (
    <>
      <h2>About Us !</h2>

      <div>
        <button aria-label="Increment value" onClick={() => dispatch(increment(2))}>
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

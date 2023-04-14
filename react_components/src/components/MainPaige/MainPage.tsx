import SearchBar from '../SearchBar/SearchBar';
import { Photo } from '../../types';
import CardsList from '../CardsList/CardsList';
import { photosAPI } from '../../services/PhotosService';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { searchInputSlice } from '../../redux/reducers/searchInputSlice';
export default function MainPage() {
  // const [input, setInput] = useState<string>('people');
  const { inputValue } = useAppSelector((state) => state.searchInputReducer);
  const { data: photos, error, isLoading } = photosAPI.useFetchAllPhotosQuery(inputValue);

  const dispatch = useAppDispatch();
  const { changeInput } = searchInputSlice.actions;
  //const [cards, setCards] = useState<CardPic[]>([]);
  const cards = photos?.photos.photo.map((el: Photo) => {
    return {
      id: el.id,
      image: `https://farm${el.farm}.staticflickr.com/${el.server}/${el.id}_${el.secret}.png`,
      title: el.title,
      owner: el.owner,
      server: el.server,
    };
  });
  //setCards(cardsData);

  return (
    <div className="App">
      <SearchBar />
      {isLoading && <div>Loading...</div>}
      {error && <h2> Failed fetching!</h2>}
      {cards && <CardsList cards={cards} />}
    </div>
  );
}

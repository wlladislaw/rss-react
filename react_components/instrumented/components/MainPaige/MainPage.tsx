import SearchBar from '../SearchBar/SearchBar';
import { Photo } from '../../types';
import CardsList from '../CardsList/CardsList';
import { photosAPI } from '../../services/PhotosService';
import { useAppSelector } from '../../hooks/redux';

export default function MainPage() {
  const { inputValue } = useAppSelector((state) => state.searchInputReducer);
  const { data: photos, error, isLoading } = photosAPI.useFetchAllPhotosQuery(inputValue);

  const cards = photos?.photos.photo.map((el: Photo) => {
    return {
      id: el.id,
      image: `https://farm${el.farm}.staticflickr.com/${el.server}/${el.id}_${el.secret}.png`,
      title: el.title,
      owner: el.owner,
      server: el.server,
    };
  });

  return (
    <div className="App">
      <SearchBar />
      {isLoading && <h2>Loading...</h2>}
      {error && <h2> Failed fetching!</h2>}
      {cards && <CardsList cards={cards} />}
    </div>
  );
}

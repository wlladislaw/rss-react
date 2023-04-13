import { useEffect, useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import { CardPic, Photo, DataApi } from '../../types';
import CardsList from '../CardsList/CardsList';
import { useDispatch, useSelector } from 'react-redux';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchPhotos } from '../../redux/reducers/ActionCreators';
import { photosAPI } from '../../services/PhotosService';
export default function MainPage() {
  const [input, setInput] = useState<string>('people');
  const { data: photos, error, isLoading } = photosAPI.useFetchAllPhotosQuery(input);
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
  const handleSearch = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      //dispatch({type: 'CHANGE_INPUT_VALUE`, payload: e.target.value})
      setInput(event.currentTarget.value);
    }
  };

  return (
    <div className="App">
      <SearchBar handleSearch={handleSearch} />
      {isLoading && <div>Loading...</div>}
      {error && <h2> Failed fetching!</h2>}
      {cards && <CardsList cards={cards} />}
    </div>
  );
}

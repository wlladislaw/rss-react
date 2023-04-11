import { useEffect, useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import { CardPic, Photo, DataApi } from '../../types';
import CardsList from '../CardsList/CardsList';
import { useDispatch, useSelector } from 'react-redux';
export default function MainPage() {
  const dispatch = useDispatch();
  const inputValue = useSelector((state) => state.searchInput.value);

  const [cards, setCards] = useState<CardPic[]>([]);
  const [input, setInput] = useState<string>('people');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      //dispatch({type: 'CHANGE_INPUT_VALUE`, payload: e.target.value})
      setInput(event.currentTarget.value);
    }
  };

  useEffect(() => {
    const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=f8e8c8e39de193f01618299b61e622ea&text=${input}&format=json&nojsoncallback=1`;

    setIsLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data: DataApi) => {
        const cards = data?.photos.photo.map((el: Photo) => {
          return {
            id: el.id,
            image: `https://farm${el.farm}.staticflickr.com/${el.server}/${el.id}_${el.secret}.png`,
            title: el.title,
            owner: el.owner,
            server: el.server,
          };
        });
        setCards(cards);
        setIsLoading(false);
      })
      .catch(() => {
        setError('Error fetching images');
        setIsLoading(false);
      });
  }, [input]);

  return (
    <div className="App">
      <SearchBar handleSearch={handleSearch} />
      {error && <h3>{error}</h3>}
      {isLoading ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <iframe
            src="https://giphy.com/embed/l3nWhI38IWDofyDrW"
            width="480"
            height="480"
            className="giphy-embed"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <CardsList cards={cards} />
      )}
    </div>
  );
}

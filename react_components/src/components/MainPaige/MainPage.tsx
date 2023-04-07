import { useEffect, useState } from 'react';
import Cards from '../CardsList/CardsList';
import SearchBar from '../SearchBar/SearchBar';
import { CardPic, Photo, DataApi } from '../../types';

// import preloader from '../../assets/preloader.gif';

export default function MainPage() {
  const [cards, setCards] = useState<CardPic[]>([]);
  const [input, setInput] = useState<string>('people');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSearch = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      setInput(event.currentTarget.value);
    }
  };

  useEffect(() => {
    const API_KEY = 'f8e8c8e39de193f01618299b61e622ea';
    const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&text=${input}&format=json&nojsoncallback=1`;

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
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  }, [input]);

  return (
    <div className="App">
      <SearchBar handleSearch={handleSearch} />
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
        <Cards cards={cards} />
      )}
    </div>
  );
}

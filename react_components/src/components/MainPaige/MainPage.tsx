import { useEffect, useState } from 'react';
import Cards from '../CardsList/CardsList';
import SearchBar from '../SearchBar/SearchBar';

export default function MainPage() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState<string>('people');

  const handleSearch = (event) => {
    console.log('event: ', event);
    console.log('event: ', event.target.value);
    if (event.key === 'Enter') {
      event.preventDefault();
      setInput(event.target.value);
    }
  };
  useEffect(() => {
    const API_KEY = 'f8e8c8e39de193f01618299b61e622ea';
    const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&text=${input}&format=json&nojsoncallback=1`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const dataPhotos = data?.photos.photo.map((pic) => {
          return `https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.png`;
        });
        setData(dataPhotos);
      })
      .catch((err) => console.error(err));
  }, [input]);

  return (
    <div className="App">
      <SearchBar handleSearch={handleSearch} />
      <Cards data={data} />
    </div>
  );
}

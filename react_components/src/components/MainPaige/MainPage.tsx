import { useState } from 'react';
import Cards from '../CardsList/CardsList';
import SearchBar from '../SearchBar/SearchBar';

export default function MainPage() {
  const [data, setData] = useState([]);
  const handleSearch = (inputText) => {
    fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=5c20f8174ddcadb825b4a8019dc4b9de&format=rest&auth_token=72157720878232475-c32fcd1e6966fc6d&api_sig=bc1d35257dc02c38351ed81afe616191`
    )
      .then((response) => response.json())
      .then((data) => setData(data.results))
      .catch((err) => console.error(err));
  };
  return (
    <div className="App">
      <SearchBar handleSearch={handleSearch} />
      <Cards data={data} />
    </div>
  );
}

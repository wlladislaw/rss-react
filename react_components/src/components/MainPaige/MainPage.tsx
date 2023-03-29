import Cards from '../CardsList/CardsList';
import SearchBar from '../SearchBar/SearchBar';

export default function MainPage() {
  return (
    <div className="App">
      <SearchBar prop={''} />
      <Cards />
    </div>
  );
}

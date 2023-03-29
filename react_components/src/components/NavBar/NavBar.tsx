import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className="navbar">
      <div className="navbar_main">
        <Link to="/">
          <h1>Main</h1>
        </Link>
      </div>
      <div className="navbar_forms">
        <Link to="/forms">
          <h2>Forms</h2>
        </Link>
      </div>
      <div className="navbar_aboutUs">
        <Link to="/about_us">
          <h2>About Us</h2>
        </Link>
      </div>
    </div>
  );
}

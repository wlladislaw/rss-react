import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className="navbar">
      <div className="navbar_main">
        <NavLink to="/">
          <h1>Main</h1>
        </NavLink>
      </div>
      <div className="navbar_forms">
        <NavLink to="/forms">
          <h2>Forms</h2>
        </NavLink>
      </div>
      <div className="navbar_aboutUs">
        <NavLink to="/about_us">
          <h2>About Us</h2>
        </NavLink>
      </div>
    </div>
  );
}

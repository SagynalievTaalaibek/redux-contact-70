import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container d-flex">
        <NavLink className="navbar-brand" to="/">
          Contacts
        </NavLink>
        <Link to={'/new-contact'} className="btn btn-info">New Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
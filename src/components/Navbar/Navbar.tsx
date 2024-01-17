import { Link, NavLink } from 'react-router-dom';
import { useAppDispatch } from '../../app/hooks';
import { cleanContactForm } from '../../store/contact/contactSlice';

const Navbar = () => {
  const dispatch = useAppDispatch();
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container d-flex">
        <NavLink className="navbar-brand" to="/">
          Contacts
        </NavLink>
        <Link to={'/new-contact'} className="btn btn-info" onClick={() => dispatch(cleanContactForm())}>New Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
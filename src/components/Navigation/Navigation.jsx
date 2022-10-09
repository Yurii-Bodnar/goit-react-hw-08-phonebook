import { NavLink} from 'react-router-dom';

const Navigation = () => {

  return (
    <div>
      <header>
        <nav>
        <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/register">
            Register
          </NavLink>
          <NavLink to="/login" >
            Log in
          </NavLink>
          <NavLink to="/contacts" >
            Contacts
          </NavLink>
        </nav>
      </header>
    </div>
  );
};

export default Navigation;

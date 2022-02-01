import { NavLink } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = (props) => {
  return (
    <ul className='nav-links'>
      <li>
        <NavLink to='/' exact>
          All Property
        </NavLink>
      </li>
      <li>
        <NavLink to='/u1/places'>My places</NavLink>
      </li>
      <li>
        <NavLink to='/places/new'>Add new places</NavLink>
      </li>
      <li>
        <NavLink to='/register'>Register</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;

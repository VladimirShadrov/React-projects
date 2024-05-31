import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='navbar'>
      <div className="links-wrapper">
        <NavLink to={'/'} className='nav-link'>Главная</NavLink>
        <NavLink to={'/about'} className='nav-link'>О компании</NavLink>
        <NavLink to={'/posts'} className='nav-link'>Посты</NavLink>
      </div>
    </div>

  );
};

export default NavBar;
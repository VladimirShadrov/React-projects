import { NavLink } from 'react-router-dom';
import MyButton from '../button/button';
import { useContext } from 'react';
import { AuthContext } from '../../context/context';

const NavBar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  return (
    <div className='navbar'>
      {
        isAuth
          ? <MyButton onClick={() => setIsAuth(false)}>Выйти</MyButton>
          : ''
      }
      <div className="links-wrapper">
        <NavLink to={'/'} className='nav-link'>Главная</NavLink>
        <NavLink to={'/about'} className='nav-link'>О компании</NavLink>
        <NavLink to={'/posts'} className='nav-link'>Посты</NavLink>
      </div>
    </div>

  );
};

export default NavBar;
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import { StrictMode } from 'react';
import About from './pages/about';
import Posts from './pages/posts';
import Home from './pages/home';
import NotFound from './pages/notFound';

export default function App() {
  return (
    <StrictMode>
      <div className='navbar'>
        <div className="links-wrapper">
          <Link to={'/'} className='nav-link'>Главная</Link>
          <Link to={'/about'} className='nav-link'>О компании</Link>
          <Link to={'/posts'} className='nav-link'>Посты</Link>
        </div>
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/posts' element={<Posts />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </StrictMode >

  );
};
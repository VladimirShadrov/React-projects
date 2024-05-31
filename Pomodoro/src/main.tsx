import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './styles/index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './pages/about';
import Posts from './pages/posts';
import Home from './pages/home';
import NotFound from './pages/notFound';
import PostIdPage from './pages/postIdPage.tsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/posts',
        element: <Posts />
      },
      {
        path: '/posts/:id',
        element: <PostIdPage />
      },
      {
        path: '*',
        element: <NotFound />
      },

    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

import Home from '../pages/home';
import NotFound from '../pages/notFound';
import App from '../App.tsx';
import About from '../pages/about.tsx';
import Posts from '../pages/posts.tsx';
import PostIdPage from '../pages/postIdPage.tsx';


export const routes = [
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
];
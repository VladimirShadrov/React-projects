import Home from '../pages/home';
import NotFound from '../pages/notFound';
import App from '../App.tsx';
import About from '../pages/about.tsx';
import Posts from '../pages/posts.tsx';
import PostIdPage from '../pages/postIdPage.tsx';
import AuthPage from '../pages/authPage.tsx';
import RequireRoutes from './requireRoutes.tsx';

export const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <RequireRoutes><Home /></RequireRoutes>
      },
      {
        path: '/about',
        element: <RequireRoutes><About /></RequireRoutes>
      },
      {
        path: '/posts',
        element: <RequireRoutes><Posts /></RequireRoutes>
      },
      {
        path: '/posts/:id',
        element: <RequireRoutes><PostIdPage /></RequireRoutes>
      },
      {
        path: '*',
        element: <NotFound />
      },
      {
        path: '/auth',
        element: <AuthPage />
      }
    ]
  },
];

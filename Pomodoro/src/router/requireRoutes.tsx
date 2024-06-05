import { ReactNode, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/context';

const RequireRoutes = ({ children }: { children: ReactNode; }) => {
  const { isAuth } = useContext(AuthContext);

  if (!isAuth) {
    return <Navigate to={'/auth'} />;
  }

  return children;
};

export default RequireRoutes;
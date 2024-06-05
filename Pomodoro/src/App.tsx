
import { Outlet } from 'react-router-dom';
import NavBar from './UI/navbar/navbar';
import { AuthContext } from './context/context';
import { useState } from 'react';

const App = () => {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <>
      <AuthContext.Provider value={{ isAuth, setIsAuth }}>
        <NavBar />
        <Outlet />
      </AuthContext.Provider>
    </>
  );
};

export default App;
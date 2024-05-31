
import { Outlet } from 'react-router-dom';
import NavBar from './UI/navbar/navbar';

const App = () => {


  return (
    <>
      <NavBar />
      <Outlet />
    </>

  );
};

export default App;
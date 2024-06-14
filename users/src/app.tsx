import SearchStatus from './components/searchStatus';
import Users from './components/users';
import api from './api';
import { useState } from 'react';

const App = () => {
  const [users, setUsers] = useState(api.users.fetchAll());

  const handleDelete = (id: string) => {
    setUsers(users.filter(user => user._id !== id));
  };



  return (
    <>
      <SearchStatus value={users.length} />
      <Users users={users} handleDelete={handleDelete} />
    </>
  )
    ;
};

export default App;
import SearchStatus from './components/searchStatus';
import Users from './components/users';
import api from './api';
import { useState } from 'react';

const App = () => {
  const [users, setUsers] = useState(api.users.fetchAll());
  const usersDefault = [...users];

  const handleDelete = (id: string) => {
    setUsers(usersDefault.filter(user => user._id !== id));
  };

  const handleBookMark = (id: string) => {
    const index = usersDefault.findIndex(user => user._id === id);
    usersDefault[index].bookmark = !usersDefault[index].bookmark;
    setUsers(usersDefault);
  };



  return (
    <>
      <SearchStatus value={users.length} />
      <Users users={users} handleDelete={handleDelete} onBookMark={handleBookMark} />
    </>
  )
    ;
};

export default App;
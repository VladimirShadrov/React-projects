import Users, { UserType } from './components/users';
import api from './api';
import { useEffect, useState } from 'react';

const App = () => {
  const [users, setUsers] = useState<UserType[]>();


  useEffect(() => {
    api.users.fetchAll().then((data) => {
      setUsers(data);
    });
  }, []);

  const handleDelete = (id: string) => {
    if (users) {
      setUsers(users.filter(user => user._id !== id));
    }
  };

  const handleBookMark = (id: string) => {
    setUsers(users?.filter(user => {
      if (user._id === id) {
        user.bookmark = !user.bookmark;
        return user;
      }
      return user;
    }));
  };



  return (
    <>
      {users && <Users users={users} handleDelete={handleDelete} onBookMark={handleBookMark} />}
    </>
  )
    ;
};

export default App;
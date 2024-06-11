import { useState } from 'react';
import api from '../api';

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());

  console.log('API: ', users);

  const handleDelete = (id: string) => {
    setUsers(users.filter(user => user._id !== id));
  };

  const getPhrase = () => {
    let phrase = '';

    switch (users.length) {
      case 4:
      case 3:
      case 2:
        phrase = `${users.length} человека тусанут с тобой сегодня`;
        break;
      case 0:
        phrase = `С тобой сегодня никто не тусанет`;
        break;
      default:
        phrase = `${users.length} человек тусанет с тобой сегодня`;

    }

    return phrase;
  };

  return (
    <>
      <h2 >
        <span className={users.length ? 'badge text-bg-primary' : 'badge text-bg-danger'}>{getPhrase()}</span>
      </h2>
      <table className="table" style={{ display: users.length ? 'table' : 'none' }}>
        <thead>
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качества</th>
            <th scope="col">Профессия</th>
            <th scope="col">Встретился, раз</th>
            <th scope="col">Оценка</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody className='table-group-divider'>
          {
            users.map(user =>
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{
                  user.qualities.map(quality => <span key={quality._id} className={`badge text-bg-${quality.color} m-1`}>{quality.name}</span>)
                }
                </td>
                <td>{user.profession.name}</td>
                <td>{user.completedMeetings}</td>
                <td>{user.rate} /5</td>
                <td>
                  <button className='btn btn-danger' onClick={() => handleDelete(user._id)}>Удалить</button>
                </td>
              </tr>
            )
          }
        </tbody>
      </table>
    </>
  );
};

export default Users;
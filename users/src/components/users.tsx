import User from './user';

export type UserType = {
  bookmark: boolean;
  completedMeetings: number;
  name: string;
  profession: { _id: string; name: string; };
  qualities: { _id: string; name: string; color: string; }[];
  rate: number;
  _id: string;
};

type UsersProps = {
  handleDelete: (id: string) => void;
  users: UserType[];
};


const Users = ({ users, handleDelete }: UsersProps) => {


  return (
    <>
      <table className="table" style={{ display: users.length ? 'table' : 'none' }}>
        <thead>
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качества</th>
            <th scope="col">Профессия</th>
            <th scope="col">Встретился, раз</th>
            <th scope="col">Оценка</th>
            <th scope="col">Избранное</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody className='table-group-divider'>
          {
            users.map(user => <User user={user} handleDelete={handleDelete} key={user._id} />)
          }
        </tbody>
      </table>
    </>
  );
};

export default Users;
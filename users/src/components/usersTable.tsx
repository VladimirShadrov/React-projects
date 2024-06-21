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


type UsersTableTypes = {
  users: UserType[];
  handleDelete: (id: string) => void;
  onBookMark: (id: string) => void;
};

const UsersTable = ({ users, ...rest }: UsersTableTypes) => {
  return (
    <table className="table">
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
          users.map(user => <User user={user} {...rest} key={user._id} />)
        }
      </tbody>
    </table>
  );
};

export default UsersTable;
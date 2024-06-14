import { UserType } from './users';


type UserProps = {
  handleDelete: (id: string) => void;
  user: UserType;
};


const User = ({ user, handleDelete }: UserProps) => {
  return (
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

  );
};

export default User;
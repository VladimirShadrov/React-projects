import Bookmark from './bookmark';
import Qualitie from './qualitie';
import { UserType } from './users';


type UserProps = {
  handleDelete: (id: string) => void;
  onBookMark: (id: string) => void;
  user: UserType;
};


const User = ({ user, handleDelete, onBookMark }: UserProps) => {
  return (
    <tr key={user._id}>
      <td>{user.name}</td>
      <td>{
        user.qualities.map(quality => <Qualitie _id={quality._id} name={quality.name} color={quality.color} key={quality._id} />)
      }
      </td>
      <td>{user.profession.name}</td>
      <td>{user.completedMeetings}</td>
      <td>{user.rate} /5</td>
      <td ><Bookmark id={user._id} onBookMark={onBookMark} /></td>
      <td>
        <button className='btn btn-danger' onClick={() => handleDelete(user._id)}>Удалить</button>
      </td>
    </tr>

  );
};

export default User;
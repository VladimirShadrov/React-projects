import { useState } from 'react';
import Pagination from './pagination';
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
  onBookMark: (id: string) => void;
  users: UserType[];
};


const Users = ({ users, handleDelete, onBookMark }: UsersProps) => {
  const count = users.length;
  const pageSize = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (pageIndex: number) => {
    console.log('Page: ', pageIndex);
    setCurrentPage(pageIndex);

  };



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
            users.map(user => <User user={user} handleDelete={handleDelete} onBookMark={onBookMark} key={user._id} />)
          }
        </tbody>
      </table>
      <Pagination itemsCount={count} pageSize={pageSize} onPageChange={handlePageChange} currentPage={currentPage} />
    </>
  );
};

export default Users;
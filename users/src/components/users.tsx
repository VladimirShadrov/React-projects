import { useEffect, useState } from 'react';
import Pagination from './pagination';
import User from './user';
import GroupList from './groupList';
import api from '../api';

export type UserType = {
  bookmark: boolean;
  completedMeetings: number;
  name: string;
  profession: { _id: string; name: string; };
  qualities: { _id: string; name: string; color: string; }[];
  rate: number;
  _id: string;
};

export type ProfessionType = {
  _id: string; name: string;
};

export type ProfessionsType = {
  [key: string]: { _id: string; name: string; };
};

type UsersProps = {
  handleDelete: (id: string) => void;
  onBookMark: (id: string) => void;
  users: UserType[];
};


const Users = ({ users, handleDelete, onBookMark }: UsersProps) => {
  const count = users.length;
  const pageSize = 4;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [professions, setProfessions] = useState<ProfessionsType | null>(null);
  const [selectedProf, setSelectedProf] = useState<ProfessionType | null>(null);

  useEffect(() => {
    api.professions.fetchAll().then((data) => setProfessions(data));
  }, []);

  const handlePageChange = (pageIndex: number) => {
    setCurrentPage(pageIndex);
  };

  const paginate = (users: UserType[], pageSize: number, pageNumber: number) => {
    const startIndex = (pageNumber - 1) * pageSize;
    return [...users].splice(startIndex, pageSize);
  };

  const handleProfessionSelect = (profession: ProfessionType) => {
    console.log('Profession: ', profession.name);
    setSelectedProf(profession);


  };

  const cropUsersArray = paginate(users, pageSize, currentPage);

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        {
          professions
          && <GroupList professions={professions} onItemSelect={handleProfessionSelect} selectedProfession={selectedProf} />
        }

        <table className="table" style={{ display: users.length ? 'table' : 'none', flexGrow: 1 }}>
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
              cropUsersArray.map(user => <User user={user} handleDelete={handleDelete} onBookMark={onBookMark} key={user._id} />)
            }
          </tbody>
        </table>
      </div>
      <Pagination itemsCount={count} pageSize={pageSize} onPageChange={handlePageChange} currentPage={currentPage} />
    </>
  );
};

export default Users;
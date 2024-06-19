import { ProfessionType } from './users';
import { ProfessionsType } from './users';

type GroupListProps = {
  professions: ProfessionsType;
  onItemSelect: (profession: ProfessionType) => void;
};

const GroupList = ({ professions, onItemSelect }: GroupListProps) => {

  return (
    <ul className="list-group" style={{ width: '20%' }}>
      {
        Object.keys(professions).map((profession) =>
          <li
            key={professions[profession]._id}
            className="list-group-item"
            onClick={() => onItemSelect(professions[profession])}
          >
            {professions[profession].name}
          </li>
        )
      }
    </ul >
  );
};

export default GroupList;
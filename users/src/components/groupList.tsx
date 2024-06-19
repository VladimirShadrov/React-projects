import { ProfessionType } from './users';
import { ProfessionsType } from './users';

type GroupListProps = {
  professions: ProfessionsType;
  selectedProfession: ProfessionType;
  onItemSelect: (profession: ProfessionType) => void;
};

const GroupList = ({ professions, selectedProfession, onItemSelect }: GroupListProps) => {

  return (
    <ul className="list-group" style={{ width: '20%' }}>
      {
        Object.keys(professions).map((profession) =>
          <li
            key={professions[profession]._id}
            className={"list-group-item" + (selectedProfession && selectedProfession._id === professions[profession]._id ? " active" : "")}
            onClick={() => onItemSelect(professions[profession])}
            role='button'
          >
            {professions[profession].name}
          </li>
        )
      }
    </ul >
  );
};

export default GroupList;
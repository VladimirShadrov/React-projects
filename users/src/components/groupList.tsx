import { ProfessionType } from './users';
import { ProfessionsType } from './users';

type GroupListProps = {
  professions: ProfessionsType;
  selectedProfession: ProfessionType | null;
  onItemSelect: (profession: ProfessionType) => void;
};

const GroupList = ({ professions, selectedProfession, onItemSelect }: GroupListProps) => {

  return (
    <ul className="list-group">
      {
        Object.keys(professions).map((profession) =>
          <li
            key={professions[profession]._id}
            className={"list-group-item" + (selectedProfession === professions[profession] ? " active" : "")}
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
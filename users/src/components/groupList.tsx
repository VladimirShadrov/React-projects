import { ProfessionType } from './users';
import { ProfessionsObjectType } from './users';

type GroupListProps = {
  professions: ProfessionsObjectType | ProfessionType[];
  selectedProfession: ProfessionType | null;
  onItemSelect: (profession: ProfessionType) => void;
};

const GroupList = ({ professions, selectedProfession, onItemSelect }: GroupListProps) => {

  return (
    <ul className="list-group">
      {
        Array.isArray(professions)
          ? professions.map((profession) => <li
            key={profession._id}
            className={"list-group-item" + (selectedProfession === profession ? " active" : "")}
            onClick={() => onItemSelect(profession)}
            role='button'
          >
            {profession.name}
          </li>)
          : Object.keys(professions).map((profession) =>
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
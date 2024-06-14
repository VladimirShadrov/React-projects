type QualitieType = {
  _id: string;
  name: string;
  color: string;
};

const Qualitie = ({ _id, name, color }: QualitieType) => {
  return <span key={_id} className={`badge text-bg-${color} m-1`}>{name}</span>;

};

export default Qualitie;


type CounterType = {
  id: number;
  value: number;
  name: string;
  onDelete: () => void;
  onIncrement: (id: number) => void;
  onDecrement: (id: number) => void;
};

const Counter = (props: CounterType) => {
  const value = props.value;

  const handleIncrement = () => {
    props.onIncrement(props.id);
  };

  const handleDecrement = () => {
    props.onDecrement(props.id);
  };

  const updateValue = () => {
    return value <= 0 ? 'Empty' : value;
  };

  const getBadgeClasses = () => {
    let classes = 'badge m-2 ';
    value <= 0 ? classes += 'text-bg-warning' : classes += 'text-bg-primary';
    return classes;
  };

  return (
    <div>
      <span>{props.name}</span>
      <span className={getBadgeClasses()}>{updateValue()}</span>
      <button
        onPointerDown={handleIncrement}
        type="button"
        className='btn btn-primary btn-sm m-2'
      >+</button>
      <button
        onPointerDown={handleDecrement}
        type="button"
        className='btn btn-primary btn-sm m-2'
      >-</button>
      <button className="btn btn-danger" onClick={props.onDelete}>Удалить</button>
    </div>

  );
};

export default Counter;
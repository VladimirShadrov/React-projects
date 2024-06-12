import { useState } from 'react';

type CounterType = {
  id?: number;
  value: number;
};

const Counter = ({ value }: CounterType) => {
  const [count, setCount] = useState<number>(value);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count === 0) {
      return;
    }
    setCount(count - 1);
  };

  const updateCount = () => {
    return count <= 0 ? 'Empty' : count;
  };

  const getBadgeClasses = () => {
    let classes = 'badge m-2 ';
    count <= 0 ? classes += 'text-bg-warning' : classes += 'text-bg-primary';
    return classes;
  };

  return (
    <>
      <span className={getBadgeClasses()}>{updateCount()}</span>
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
    </>

  );
};

export default Counter;
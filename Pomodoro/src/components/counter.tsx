import React, { useState } from 'react';

type CounterType = {
  value: number;
  name: string;
};

const Counter = (props: CounterType) => {
  const [value, setValue] = useState<number>(props.value);

  const handleIncrement = () => {
    setValue(value + 1);
  };

  const handleDecrement = () => {
    if (value === 0) {
      return;
    }
    setValue(value - 1);
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
    </div>

  );
};

export default Counter;
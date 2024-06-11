import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState<number>(0);
  const [tags, setTags] = useState<string[]>(['tag1', 'tag2', 'tag3']);

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

  const handleTagChange = (id: string) => {
    setTags(tags.filter(tag => tag !== id));
  };

  const renderTags = () => {
    return tags.length > 0
      ? tags.map(tag => <li key={tag} className='btn btn-primary btn-sm m-2' onClick={() => handleTagChange(tag)}>{tag}</li>)
      : 'No tags';
  };

  if (tags.length) {
    return <ul>{renderTags()}</ul>;
  }

  return (
    <>
      <span className={getBadgeClasses()}>{updateCount()}</span>
      <button onPointerDown={handleIncrement} type="button" className='btn btn-primary btn-sm m-2'>+</button>
      <button onPointerDown={handleDecrement} type="button" className='btn btn-primary btn-sm m-2'>-</button>
    </>

  );
};

export default Counter;
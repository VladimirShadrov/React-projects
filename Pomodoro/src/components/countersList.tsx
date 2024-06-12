import { useState } from 'react';
import Counter from './counter';


const CountersList = () => {
  const [counters, setCounters] = useState([
    { id: 1, value1: 0, name: 'Ненужная вещь' },
    { id: 2, value1: 7, name: 'Ложка' },
    { id: 3, value1: 3, name: 'Вилка' },
    { id: 4, value1: 2, name: 'Тарелка' },
    { id: 5, value1: 1, name: 'Набор минималиста' },
  ]);

  const handleDelete = (id: number) => {
    setCounters(counters.filter(count => count.id !== id));
  };

  return (
    <>
      {
        counters.map(counter => (
          <Counter {...counter} key={counter.id} onDelete={() => handleDelete(counter.id)} />
        ))
      }
    </>
  );

};

export default CountersList;
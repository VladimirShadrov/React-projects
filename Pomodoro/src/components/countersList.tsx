import { useState } from 'react';
import Counter from './counter';


const CountersList = () => {
  const [counters, setCounters] = useState([
    { id: 1, value: 0, name: 'Ненужная вещь' },
    { id: 2, value: 7, name: 'Ложка' },
    { id: 3, value: 3, name: 'Вилка' },
    { id: 4, value: 2, name: 'Тарелка' },
    { id: 5, value: 1, name: 'Набор минималиста' },
  ]);

  const handleDelete = (id: number) => {
    setCounters(counters.filter(count => count.id !== id));
  };

  return (
    <>
      {
        counters.map(counter => (
          <Counter value={counter.value} name={counter.name} key={counter.id} onDelete={() => handleDelete(counter.id)} />
        ))
      }
    </>
  );

};

export default CountersList;
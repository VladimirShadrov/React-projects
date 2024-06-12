import { useState } from 'react';
import Counter from './counter';


const CountersList = () => {
  const initialState = [
    { id: 1, value: 0, name: 'Ненужная вещь' },
    { id: 2, value: 7, name: 'Ложка' },
    { id: 3, value: 3, name: 'Вилка' },
    { id: 4, value: 2, name: 'Тарелка' },
    { id: 5, value: 1, name: 'Набор минималиста' },
  ];
  const [counters, setCounters] = useState(initialState);

  const handleDelete = (id: number) => {
    setCounters(counters.filter(count => count.id !== id));
  };

  const handleReset = () => {
    setCounters(initialState);
  };

  const handleIncrement = (id: number) => {
    const counterId = counters.findIndex(count => count.id === id);
    if (counterId === -1) {
      return;
    }

    const newCountersArr = [...counters];
    newCountersArr[counterId].value += 1;
    setCounters(newCountersArr);
  };

  const handleDecrement = (id: number) => {
    const counterId = counters.findIndex(count => count.id === id);

    if (counterId === -1) {
      return;
    }

    const newCountersArr = [...counters];

    if (newCountersArr[counterId].value === 0) {
      return;
    }

    newCountersArr[counterId].value -= 1;
    setCounters(newCountersArr);
  };

  return (
    <>
      {
        counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={() => handleDelete(counter.id)}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
            {...counter}
          />
        ))
      }
      <button className="btn btn-primary m-2" onClick={handleReset}>Сброс</button>
    </>
  );

};

export default CountersList;
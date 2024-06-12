import Counter from './counter';

const CountersList = () => {
  const counters = [
    { id: 1, value: 0, name: 'Ненужная вещь' },
    { id: 2, value: 7, name: 'Ложка' },
    { id: 3, value: 3, name: 'Вилка' },
    { id: 4, value: 2, name: 'Тарелка' },
    { id: 5, value: 1, name: 'Набор минималиста' },
  ];

  return (
    <>
      {
        counters.map(counter => (
          <Counter value={counter.value} name={counter.name} key={counter.id} />
        ))
      }
    </>
  );

};

export default CountersList;
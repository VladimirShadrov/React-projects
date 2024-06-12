import Counter from './counter';

const CountersList = () => {
  const counters = [{ id: 1, value: 0 }, { id: 2, value: 7 }, { id: 3, value: 3 }];

  return (
    <>
      <h1>Counters List</h1>
      {
        counters.map(counter => (
          <div key={counter.id} >
            <Counter value={counter.value} />
          </div>

        ))
      }
    </>
  );

};

export default CountersList;
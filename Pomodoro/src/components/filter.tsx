import MySelect from '../UI/select/select';
import MyInput from '../UI/input/inputText';

type Filter = {
  sortType: 'title' | 'body';
  query: string;
};

type FilterProps = {
  filter: Filter;
  setFilter: (newFilter: Filter) => void;
};

export default function MyFilter({ filter, setFilter }: FilterProps) {
  return (
    < div >
      <MySelect
        value={filter.sortType}
        callback={(sortType) => setFilter({ ...filter, sortType })}
        options={[
          { title: 'По названию', value: 'title' },
          { title: 'По описанию', value: 'body' },
        ]}
        defaultValue='Сортировать по:'
      />
      <br />
      <br />
      <MyInput
        value={filter.query}
        placeholder={'Поиск...'}
        onChange={(event) => setFilter({ ...filter, query: event.target.value })}
      />
    </div >

  );
}
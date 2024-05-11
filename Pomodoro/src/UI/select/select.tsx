type OptionData = {
  title: string;
  value: string;
};

type SelectProps = {
  options: OptionData[];
  defaultValue: string;
  value: string;
  callback: (sortType: 'title' | 'body') => void;
};

export default function MySelect({ options, defaultValue, value, callback }: SelectProps) {
  return (
    <select
      value={value}
      onChange={(event) => callback(event.target.value as 'title' | 'body')}
    >
      <option disabled >{defaultValue}</option>
      {
        options.map((option) => <option value={option.value} key={option.value}>{option.title}</option>)
      }
    </select>

  );
}
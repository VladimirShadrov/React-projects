type SearchStatusProps = {
  value: number;
};

const SearchStatus = ({ value }: SearchStatusProps) => {
  const getPhrase = () => {
    let phrase = '';

    switch (value) {
      case 4:
      case 3:
      case 2:
        phrase = `${value} человека тусанут с тобой сегодня`;
        break;
      case 0:
        phrase = `С тобой сегодня никто не тусанет`;
        break;
      default:
        phrase = `${value} человек тусанет с тобой сегодня`;

    }

    return phrase;
  };

  return (
    <h2 >
      <span className={value > 0 ? 'badge text-bg-primary' : 'badge text-bg-danger'}>{getPhrase()}</span>
    </h2>

  );


};

export default SearchStatus;
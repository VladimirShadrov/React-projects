import { useState } from 'react';

type BookMarkType = {
  id: string;
  onBookMark: (id: string) => void;
};

const Bookmark = ({ id, onBookMark }: BookMarkType) => {
  const [selected, setSelected] = useState(false);

  const handleBookMark = () => {
    onBookMark(id);
    setSelected(!selected);
  };
  return (
    <button className="btn active" onClick={handleBookMark}>
      {
        selected
          ? <i className="bi bi-bookmark-heart-fill"></i>
          : <i className="bi bi-bookmark"></i>
      }

    </button>
  );
};

export default Bookmark;
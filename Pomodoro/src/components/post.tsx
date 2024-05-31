import { useNavigate } from 'react-router-dom';
import '../styles/post.css';
import MyButton from '../UI/button/button';

type PostProps = {
  postData: {
    id: number;
    title: string;
    body: string;
  };
  number: number;
  remove: (id: number) => void;
};

export default function MyPost({ postData, remove }: PostProps): JSX.Element {
  const { title, body, id } = postData;
  const navigate = useNavigate();


  return (
    <div className="post">
      <div className="content">
        <h2 className="title">
          {id}. {title}
        </h2>
        <p className="description">{body}</p>
      </div>
      <div className="actions">
        <MyButton onClick={() => navigate(`/posts/${id}`)}>Открыть</MyButton>
        <MyButton onClick={() => remove(id)}>Удалить пост</MyButton>
      </div>
    </div>
  );
}

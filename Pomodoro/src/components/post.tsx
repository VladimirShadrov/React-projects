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

export default function MyPost({ number, postData, remove }: PostProps): JSX.Element {
  const { title, body, id } = postData;

  return (
    <div className="post">
      <div className="content">
        <h2 className="title">
          {number}. {title}
        </h2>
        <p className="description">{body}</p>
      </div>
      <div className="actions">
        <MyButton onClick={() => remove(id)}>Удалить пост</MyButton>
      </div>
    </div>
  );
}

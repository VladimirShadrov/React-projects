import '../styles/post.css';

type PostConfig = {
  post: {
    id: number;
    title: string;
    body: string;
  };
  number: number;
};

export default function MyPost({ props }: { props: PostConfig }) {
  const { title, body } = props.post;

  return (
    <div className="post">
      <div className="content">
        <h2 className="title">
          {props.number}. {title}
        </h2>
        <p className="description">{body}</p>
      </div>
      <div className="actions">
        <button className="delete-btn">Удалить пост</button>
      </div>
    </div>
  );
}

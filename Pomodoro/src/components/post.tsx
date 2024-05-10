import '../styles/post.css';

type PostConfig = {
  postData: {
    id: number;
    title: string;
    body: string;
  };
  number: number;
};

export default function MyPost({ number, postData }: PostConfig) {
  const { title, body } = postData;

  return (
    <div className="post">
      <div className="content">
        <h2 className="title">
          {number}. {title}
        </h2>
        <p className="description">{body}</p>
      </div>
      <div className="actions">
        <button className="delete-btn">Удалить пост</button>
      </div>
    </div>
  );
}

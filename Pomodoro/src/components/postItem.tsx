import '../styles/postItem.css';

type PostPorps = {
  post: {
    id: number;
    title: string;
    body: string;
  };
};

const PostItem = (props: PostPorps) => {
  return (
    <div className="post">
      <div className="post__body">
        <h3 className="post__title">
          {props.post.id}. {props.post.title}
        </h3>
        <p>{props.post.body}</p>
      </div>
      <div className="post__actions">
        <button className="delete-btn">Удалить</button>
      </div>
    </div>
  );
};

export default PostItem;

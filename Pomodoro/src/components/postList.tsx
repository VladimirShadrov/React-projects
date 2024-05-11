import MyPost from './post';
import '../styles/postList.css';

type PostConfig = {
  id: number;
  title: string;
  body: string;
};

type PostListProps = {
  title: string;
  posts: PostConfig[];
  remove: (id: number) => void;
};

export default function PostList({ title, posts, remove }: PostListProps): JSX.Element {
  return (
    <div className="post-list">
      <h1 className="post-list__title">{title}</h1>
      {posts.map((post, index) => (
        <MyPost remove={remove} number={index + 1} postData={post} key={post.id} />
      ))}
    </div>
  );
}

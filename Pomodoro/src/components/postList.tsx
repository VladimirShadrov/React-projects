import MyPost from './post';
import '../styles/postList.css';

type PostConfig = {
  id: number;
  title: string;
  body: string;
};

type PostListConfig = {
  title: string;
  posts: PostConfig[];
};

export default function PostList({ title, posts }: PostListConfig) {
  return (
    <div className="post-list">
      <h1 className="post-list__title">{title}</h1>
      {posts.map((post, index) => (
        <MyPost number={index + 1} postData={post} key={post.id} />
      ))}
    </div>
  );
}

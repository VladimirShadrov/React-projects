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

export default function PostList({ postListData }: { postListData: PostListConfig }) {
  const { title, posts } = postListData;

  return (
    <div className="post-list">
      <h1 className="post-list__title">{title}</h1>
      {posts.map((post, index) => (
        <MyPost props={{ number: index + 1, post }} key={post.id} />
      ))}
    </div>
  );
}

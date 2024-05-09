import React from 'react';
import PostItem from './postItem';

type PostData = {
  id: number;
  title: string;
  body: string;
};

type PostListProps = {
  title: string;
  posts: PostData[];
};

export default function PostList({ postsData }: { postsData: PostListProps }) {
  return (
    <>
      <h1 className="post-list__title" style={{ textAlign: 'center', marginBottom: '12px' }}>
        {postsData.title}
      </h1>
      {postsData.posts.map((post) => (
        <PostItem post={post} key={post.id} />
      ))}
    </>
  );
}

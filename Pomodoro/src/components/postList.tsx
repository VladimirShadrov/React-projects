import React from 'react';
import MyButton from './UI/button/button';
import PostItem from './postItem';
import MyInput from './UI/input/input';

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
  function createPost(event: React.MouseEvent) {
    event.preventDefault();
    console.log('Button click');
  }

  return (
    <>
      <form>
        <MyInput props={{ placeholder: 'Название поста' }} />
        <MyInput props={{ placeholder: 'Тело поста' }} />
        <MyButton
          options={{
            title: 'Создать пост',
            disabled: false,
            action: createPost,
          }}
        />
      </form>
      <h1 className="post-list__title" style={{ textAlign: 'center', marginBottom: '12px' }}>
        {postsData.title}
      </h1>
      {postsData.posts.map((post) => (
        <PostItem post={post} key={post.id} />
      ))}
    </>
  );
}

import { useState } from 'react';
import PostList from './components/postList';
import MyForm from './components/form';

type PostType = {
  id: number;
  title: string;
  body: string;
};

export default function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Что такое React?', body: 'React - это JS библиотека' },
    { id: 2, title: 'Что такое JS?', body: 'JS - это язык программирования' },
    { id: 3, title: 'Что такое Python?', body: 'Python - это тоже язык программирования' },
  ]);

  function addNewPost(post: PostType) {
    setPosts([...posts, post]);
  }

  function removePost(id: number) {
    setPosts(posts.filter((post) => post.id !== id));
  }

  return (
    <div className="app">
      <MyForm create={addNewPost} />
      {posts.length
        ? <PostList remove={removePost} title={'Заголовок списка постов'} posts={posts} />
        : <h2 className="empty-post-list" style={{ textAlign: 'center', fontSize: '26px', marginTop: '12px' }}>Посты не найдены</h2>
      }
    </div >
  );
}

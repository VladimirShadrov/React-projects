import { useState } from 'react';
import PostList from './components/postList';
import MyInput from './UI/input/inputText';
import MyButton from './UI/button/button';

export default function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Что такое React?', body: 'React - это JS библиотека' },
    { id: 2, title: 'Что такое JS?', body: 'JS - это язык программирования' },
    { id: 3, title: 'Что такое Python?', body: 'Python - это тоже язык программирования' },
  ]);

  const [post, setPost] = useState({ title: '', body: '' });

  function addNewPost(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    const { title, body } = post;
    setPosts([...posts, { id: Date.now(), title, body }]);
    setPost({ title: '', body: '' });
  }

  return (
    <div className="app">
      <form>
        <MyInput placeholder="Название поста" value={post.title} onChange={(event) => setPost({ title: event.target.value, body: post.body })} />
        <MyInput placeholder="Описание поста" value={post.body} onChange={(event) => setPost({ title: post.title, body: event.target.value })} />
        <MyButton onClick={addNewPost}>Добавить пост</MyButton>
      </form>
      <PostList title={'Заголовок списка постов'} posts={posts} />
    </div>
  );
}

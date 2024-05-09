//import Counter from './components/counter';
import { useState } from 'react';
import PostList from './components/postList';
import MyButton from './components/UI/button/button';
import MyInput from './components/UI/input/input';

export default function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Что такое React?', body: 'React - это JS библиотека' },
    { id: 2, title: 'Что такое JS?', body: 'JS - это язык программирования' },
    { id: 3, title: 'Что такое Python?', body: 'Python - это тоже язык программирования' },
  ]);
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');

  function createPost(event: React.MouseEvent) {
    event.preventDefault();
    const newPost = {
      id: Date.now(),
      title: postTitle,
      body: postBody,
    };
    setPosts([...posts, newPost]);
    setPostTitle('');
    setPostBody('');
  }

  return (
    <div className="app">
      <form>
        <MyInput value={postTitle} onChange={(event) => setPostTitle(event.target.value)} placeholder={'Название поста'} />
        <MyInput value={postBody} onChange={(event) => setPostBody(event.target.value)} placeholder={'Тело поста'} />
        <MyButton onClick={createPost} disabled={false}>
          Создать пост
        </MyButton>
      </form>

      <PostList postsData={{ title: 'Список постов', posts }} />
    </div>
  );
}

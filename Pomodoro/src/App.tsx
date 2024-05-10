import { useState } from 'react';
import PostList from './components/postList';

export default function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Что такое React?', body: 'React - это JS библиотека' },
    { id: 2, title: 'Что такое JS?', body: 'JS - это язык программирования' },
    { id: 3, title: 'Что такое Python?', body: 'Python - это тоже язык программирования' },
  ]);

  return (
    <div className="app">
      <PostList postListData={{ title: 'Заголовок списка постов', posts }} />
    </div>
  );
}

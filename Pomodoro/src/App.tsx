// import { useState } from 'react';
import './styles/post.css';

export default function App() {
  // const [posts, setPosts] = useState([
  //   { id: 1, title: 'Что такое React?', body: 'React - это JS библиотека' },
  //   { id: 2, title: 'Что такое JS?', body: 'JS - это язык программирования' },
  //   { id: 3, title: 'Что такое Python?', body: 'Python - это тоже язык программирования' },
  // ]);

  return (
    <div className="app">
      <div className="post">
        <div className="content">
          <h2 className="title">1. Заголовок поста</h2>
          <p className="description">Описание поста</p>
        </div>
        <div className="actions">
          <button className="delete-btn">Удалить пост</button>
        </div>
      </div>
    </div>
  );
}

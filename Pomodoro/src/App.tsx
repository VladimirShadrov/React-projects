import { useMemo, useState } from 'react';
import PostList from './components/postList';
import MyForm from './components/form';
import MyFilter from './components/filter';

type PostType = {
  id: number;
  title: string;
  body: string;
};

type Filter = {
  sortType: 'title' | 'body';
  query: string;
};

export default function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Что такое React?', body: 'React - это JS библиотека' },
    { id: 2, title: 'Что такое JS?', body: 'JS - это язык программирования' },
    { id: 3, title: 'Что такое Python?', body: 'Python - это тоже язык программирования' },
  ]);

  const [filter, setFilter] = useState<Filter>({ sortType: 'title', query: '' });

  const sortedPosts = useMemo(() => {
    if (filter.sortType) {
      return [...posts].sort((a, b) => a[filter.sortType].localeCompare(b[filter.sortType]));
    }
    return posts;
  }, [posts, filter.sortType]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post[filter.sortType].toLowerCase().includes(filter.query.toLowerCase().trim()));
  }, [sortedPosts, filter.sortType, filter.query]);


  function addNewPost(post: PostType) {
    setPosts([...posts, post]);
  }

  function removePost(id: number) {
    setPosts(posts.filter((post) => post.id !== id));
  }

  return (
    <div className="app">
      <MyForm create={addNewPost} />
      <hr style={{ margin: '12px 0' }} />
      <MyFilter filter={filter} setFilter={setFilter} />
      <PostList remove={removePost} title={'Заголовок списка постов'} posts={sortedAndSearchedPosts} />
    </div >
  );
}

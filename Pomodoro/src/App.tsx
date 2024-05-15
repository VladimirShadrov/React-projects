import { useMemo, useState } from 'react';
import PostList from './components/postList';
import MyForm from './components/form';
import MySelect from './UI/select/select';
import MyInput from './UI/input/inputText';

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
  const [sortType, setSortType] = useState<'title' | 'body'>('title');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const sortedPosts = useMemo(() => {
    if (sortType) {
      return [...posts].sort((a, b) => a[sortType].localeCompare(b[sortType]));
    }
    return posts;
  }, [posts, sortType]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post[sortType].toLowerCase().includes(searchQuery.toLowerCase().trim()));
  }, [sortedPosts, sortType, searchQuery]);

  const selectOptions = [
    { title: 'По названию', value: 'title' },
    { title: 'По описанию', value: 'body' },
  ];

  function addNewPost(post: PostType) {
    setPosts([...posts, post]);
  }

  function removePost(id: number) {
    setPosts(posts.filter((post) => post.id !== id));
  }

  function sortPosts(sortType: 'title' | 'body') {
    setSortType(sortType);
  }

  return (
    <div className="app">
      <MyForm create={addNewPost} />
      <hr style={{ margin: '12px 0' }} />
      <div>
        <MySelect
          value={sortType}
          callback={sortPosts}
          options={selectOptions}
          defaultValue='Сортировать по:'
        />
        <br />
        <br />
        <MyInput
          value={searchQuery}
          placeholder={'Поиск...'}
          onChange={(event) => setSearchQuery(event.target.value)}
        />
      </div>
      {sortedAndSearchedPosts.length
        ? <PostList remove={removePost} title={'Заголовок списка постов'} posts={sortedAndSearchedPosts} />
        : <h2 className="empty-post-list" style={{ textAlign: 'center', fontSize: '26px', marginTop: '12px' }}>Посты не найдены</h2>
      }
    </div >
  );
}

import { useEffect, useState } from 'react';
import PostList from './components/postList';
import MyForm from './components/form';
import MyFilter from './components/filter';
import MyModal from './UI/modal/modal';
import MyButton from './UI/button/button';
import { usePost } from './hooks/usePost';
import PostSevice from './API/postService';
import { MyLoader } from './UI/loader/loader';

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
  const [posts, setPosts] = useState([] as PostType[]);

  const [filter, setFilter] = useState<Filter>({ sortType: 'title', query: '' });
  const [modalVisibility, setModalVisibility] = useState<boolean>(false);
  const sortedAndSearchedPosts = usePost(posts, filter.sortType, filter.query);
  const [isPostLoading, setPostLoading] = useState(false);

  async function fetchPosts() {
    setPostLoading(true);
    const posts = await PostSevice.getAll();
    setTimeout(() => {
      setPosts(posts);
      setPostLoading(false);
    }, 1000);
  }

  useEffect(() => {
    fetchPosts();

  }, []);

  function addNewPost(post: PostType) {
    setPosts([...posts, post]);
    setModalVisibility(false);
  }

  function removePost(id: number) {
    setPosts(posts.filter((post) => post.id !== id));
  }

  return (
    <div className="app">
      <MyButton onClick={() => setModalVisibility(true)}>Добавить пост</MyButton>
      <MyModal visible={modalVisibility} setVisible={setModalVisibility}>
        <MyForm create={addNewPost} />
      </MyModal>
      <hr style={{ margin: '12px 0' }} />
      <MyFilter filter={filter} setFilter={setFilter} />
      {
        isPostLoading
          ? <MyLoader />
          : <PostList remove={removePost} title={'Заголовок списка постов'} posts={sortedAndSearchedPosts} />
      }

    </div >
  );
}

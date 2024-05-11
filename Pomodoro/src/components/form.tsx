import MyInput from '../UI/input/inputText';
import MyButton from '../UI/button/button';
import { useState } from 'react';

type PostType = {
  id: number;
  title: string;
  body: string;
};

type FormProps = {
  create: (post: PostType) => void;
};

export default function MyForm({ create }: FormProps) {
  const [post, setPost] = useState({ title: '', body: '' });

  function addNewPost(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };

    create(newPost);
    setPost({ title: '', body: '' });
  }

  return (
    <form>
      <MyInput placeholder="Название поста" value={post.title} onChange={(event) => setPost({ ...post, title: event.target.value })} />
      <MyInput placeholder="Описание поста" value={post.body} onChange={(event) => setPost({ ...post, body: event.target.value })} />
      <MyButton onClick={addNewPost}>Добавить пост</MyButton>
    </form>
  );
}

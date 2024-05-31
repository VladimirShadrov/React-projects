import { useParams } from 'react-router-dom';

const PostIdPage = () => {
  const params = useParams();


  return (
    <h1>Вы перешли на страницу поста с номером: {params.id} </h1>
  );
};

export default PostIdPage;
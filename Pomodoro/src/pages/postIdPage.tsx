import { useParams } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import PostSevice from '../API/postService';
import { useEffect, useState } from 'react';
import { MyLoader } from '../UI/loader/loader';


const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState<{ id: number | null, title: string; }>({ id: null, title: '' });
  const [comments, setComments] = useState<{ email: string, body: string, id: number; }[]>([]);
  const [fetchPostById, isPostLoading, postError] = useFetching(async (id) => {
    const response = await PostSevice.getById(id);
    setPost(response.data);
  });
  const [fetchCommentsByPostId, isCommentsLoading, commentsError] = useFetching(async (id) => {
    const response = await PostSevice.getCommentsByPostId(id);
    setComments(response.data);
  });

  useEffect(() => {
    fetchPostById(params.id);
    fetchCommentsByPostId(params.id);
  }, []);



  return (
    <div style={{ maxWidth: 1000, margin: '0 auto', padding: 18 }}>
      <h1>Вы перешли на страницу поста с номером: {params.id} </h1>
      {
        isPostLoading
          ? <MyLoader />
          : <div style={{ marginBottom: 22 }}><b>Заголовок поста {post.id}:</b> {post.title}</div >
      }
      {
        isCommentsLoading
          ? <MyLoader />
          : comments.map((comment) =>
            <div key={comment.id} style={{ marginBottom: 12 }}>
              <h3>{comment.email}</h3>
              <div>{comment.body}</div>
            </div>
          )
      }
    </div>
  );
};

export default PostIdPage;
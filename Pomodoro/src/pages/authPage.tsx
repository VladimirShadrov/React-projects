import { FormEvent, useContext } from 'react';
import MyButton from '../UI/button/button';
import MyInput from '../UI/input/inputText';
import { AuthContext } from '../context/context';
import { useNavigate } from 'react-router-dom';

const AuthPage = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  function login(event: FormEvent) {
    event.preventDefault();
    setIsAuth(true);
    navigate('/');

  }

  return (
    <div style={{ maxWidth: 1000, margin: '0 auto', padding: 12 }}>
      <form onSubmit={login}>
        <h1 style={{ textAlign: 'center', marginBottom: 16 }}>Страница авторизации</h1>
        <MyInput placeholder='Логин' />
        <MyInput placeholder='Пароль' />
        <MyButton >Войти</MyButton>
      </form>
    </div>
  );
};

export default AuthPage;
import { SetStateAction, createContext } from 'react';

const context: { isAuth?: boolean, setIsAuth?: SetStateAction<boolean>; } = {};
export const AuthContext = createContext(context);
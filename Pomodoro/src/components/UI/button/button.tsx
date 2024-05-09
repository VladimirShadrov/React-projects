import { ReactNode } from 'react';
import classes from '../button/button.module.css';

type ButtonProps = {
  disabled: boolean;
  children: ReactNode;
  onClick: (event: React.MouseEvent) => void;
};

export default function MyButton({ children, ...props }: ButtonProps) {
  return (
    <button {...props} className={classes.myButton}>
      {children}
    </button>
  );
}

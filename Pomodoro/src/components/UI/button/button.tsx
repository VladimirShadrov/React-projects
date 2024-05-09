import React from 'react';
import classes from '../button/button.module.css';

type ButtonProps = {
  title: string;
  disabled: boolean;
  action: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function MyButton({ options }: { options: ButtonProps }) {
  const { title, disabled, action } = options;

  return (
    <button disabled={disabled} onClick={(event) => action(event)} className={classes.myButton}>
      {title}
    </button>
  );
}

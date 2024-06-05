import classes from './button.module.css';

type ButtonProps = {
  children: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export default function MyButton({ children, ...props }: ButtonProps): JSX.Element {
  return (
    <button {...props} className={classes.myCustomButton}>
      {children}
    </button>
  );
}

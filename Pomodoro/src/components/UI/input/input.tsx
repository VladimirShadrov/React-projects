import classes from '../input/input.module.css';

type InputProps = {
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function MyInput({ ...props }: InputProps) {
  return <input {...props} className={classes.myInput} />;
}

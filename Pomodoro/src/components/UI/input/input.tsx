import classes from '../input/input.module.css';

type InputProps = {
  placeholder: string;
};

export default function MyInput({ props }: { props: InputProps }) {
  return <input {...props} className={classes.myInput} />;
}

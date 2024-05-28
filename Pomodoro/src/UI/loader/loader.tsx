import classes from './loader.module.css';

export const MyLoader = () => {
  return (
    <div className={classes.overlay}>
      <div className={classes.loader}></div>
    </div>
  );
};
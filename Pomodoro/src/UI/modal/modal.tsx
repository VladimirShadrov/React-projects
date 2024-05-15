import classes from './modal.module.css';

type ModalProps = {
  children: React.ReactNode;
  visible: boolean;
  setVisible: (isVisible: boolean) => void;
};

export default function MyModal({ children, visible, setVisible }: ModalProps) {

  const rootClassName = [classes.modal];
  if (visible) {
    rootClassName.push(classes.active);
  }

  return (
    <div className={rootClassName.join(' ')} onPointerDown={() => setVisible(false)} >
      <div className={classes['modal__content']} onPointerDown={(event) => event.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}
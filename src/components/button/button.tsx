import styles from './button.module.scss';;

interface IButtonProps {
  text: string;
}

function Button({text} : IButtonProps) {
  return (
    <button className={styles.container}>{text}</button>
  )
}

export {Button};

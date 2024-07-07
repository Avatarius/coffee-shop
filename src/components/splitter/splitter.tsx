import styles from './splitter.module.scss';

interface ISplitterProps {
  text: string;
}

function Splitter({text}: ISplitterProps) {
  return (
    <h2 className={styles.title}>{text}</h2>
  )
}

export {Splitter};

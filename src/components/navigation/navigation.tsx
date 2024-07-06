import styles from './navigation.module.scss';

function Navigation() {
  return (
    <nav className={styles.container}>
      <ul className={styles.list}>
        <li className={styles.item}>Home</li>
        <li className={styles.item}>Menu</li>
        <li className={styles.item}>Blog</li>
        <li className={styles.item}>Contact</li>
      </ul>
    </nav>
  );
}

export { Navigation };

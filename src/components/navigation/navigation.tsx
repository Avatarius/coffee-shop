import clsx from "clsx";
import styles from './navigation.module.scss';

function Navigation() {
  return (
    <nav>
      <ul className={styles.list}>
        <li className={clsx([styles.item, styles.item_active])}>Главная</li>
        <li className={clsx([styles.item])}>Меню</li>
        <li className={clsx([styles.item])}>Отзывы</li>
        <li className={clsx([styles.item])}>Контакты</li>
      </ul>
    </nav>
  );
}

export { Navigation };

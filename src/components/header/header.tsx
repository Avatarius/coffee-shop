import styles from './header.module.scss';
import clsx from 'clsx';

function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.list}>
          <li className={clsx([styles.item, styles.item_active])}>Главная</li>
          <li className={clsx([styles.item])}>Меню</li>
          <li className={clsx([styles.item])}>Отзывы</li>
          <li className={clsx([styles.item])}>Контакты</li>
        </ul>
      </nav>
    </header>
  )
}

export {Header};

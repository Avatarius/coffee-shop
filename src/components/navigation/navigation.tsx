import clsx from "clsx";
import styles from "./navigation.module.scss";
import { INavigation } from "../../utils/types";

function Navigation(props: INavigation) {
  const { scrollToHero, scrollToMenu, scrollToReviews, scrollToFooter } = props;
  return (
    <nav className={styles.navigation}>
      <ul className={styles.list}>
        <li
          className={clsx([styles.item, styles.item_active])}
          onClick={scrollToHero}
        >
          Главная
        </li>
        <li className={clsx([styles.item])} onClick={scrollToMenu}>
          Меню
        </li>
        <li className={clsx([styles.item])} onClick={scrollToReviews}>
          Отзывы
        </li>
        <li className={clsx([styles.item])} onClick={scrollToFooter}>
          Контакты
        </li>
      </ul>
    </nav>
  );
}

export { Navigation };

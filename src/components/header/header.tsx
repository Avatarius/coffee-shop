import styles from "./header.module.scss";
import { Navigation } from "../navigation/navigation";
import { useDispatch, useSelector } from "../../services/store";
import { openModal } from "../../services/slices/modal";
import { IconType, ModalType } from "../../utils/types";
import { selectProductListLength } from "../../services/slices/basket";
import { Icon } from "../icon/icon";

function Header() {
  const dispatch = useDispatch();
  const basketLength = useSelector(selectProductListLength);
  return (
    <header className={styles.header}>
      <Navigation />
      <Icon
        type={IconType.Basket}
        onClick={() => dispatch(openModal(ModalType.Basket))}
        additionalClasses={styles.basket}
      >
        <div className={styles.count__container}>
          <span className={styles.count__span}>{basketLength}</span>
        </div>
      </Icon>
    </header>
  );
}

export { Header };

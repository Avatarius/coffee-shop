import styles from "./header.module.scss";
import { Navigation } from "../navigation/navigation";
import { useDispatch, useSelector } from "../../services/store";
import { openModal } from "../../services/slices/modal";
import { IconType, ModalType } from "../../utils/types";
import { selectProductListLength } from "../../services/slices/basket";
import { Button } from "../button/button";
import { Svg } from "../svg/svg";

function Header() {
  const dispatch = useDispatch();
  const basketLength = useSelector(selectProductListLength);
  return (
    <header className={styles.header}>
      <Navigation />
      <Button
        content={
          <>
            <Svg type={IconType.Basket} />
            <div className={styles.count__container}>
              <span className={styles.count__span}>{basketLength}</span>
            </div>
          </>
        }
        additionalClasses={styles.basket}
        transparent
        onClick={() => dispatch(openModal(ModalType.Basket))}
      />
    </header>
  );
}

export { Header };

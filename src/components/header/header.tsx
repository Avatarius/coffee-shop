import styles from "./header.module.scss";
import { Navigation } from "../navigation/navigation";
import { useDispatch } from "../../services/store";
import { openModal } from "../../services/slices/modal";
import { ModalType } from "../../utils/types";

function Header() {
  const dispatch = useDispatch();
  return (
    <header className={styles.header}>
      <Navigation />
      <button
        className={styles.basket}
        onClick={() => dispatch(openModal(ModalType.Basket))}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          width={32}
          className={styles.basket__svg}
        >
          <path
            fill="currentColor"
            d="M60.53 18.71A2 2 0 0 0 59 18H48.85A15 15 0 0 0 34 5h-4a15 15 0 0 0-14.85 13H5a2 2 0 0 0-1.53.71A2 2 0 0 0 3 20.35l5.33 30.3A6.51 6.51 0 0 0 14.77 56h34.46a6.51 6.51 0 0 0 6.41-5.36L61 20.35a2 2 0 0 0-.47-1.64ZM30 9h4a11 11 0 0 1 10.81 9H19.19A11 11 0 0 1 30 9Zm21.71 40.94A2.52 2.52 0 0 1 49.23 52H14.77a2.5 2.5 0 0 1-2.47-2L7.38 22h49.24Z"
          />
        </svg>
      </button>
    </header>
  );
}

export { Header };

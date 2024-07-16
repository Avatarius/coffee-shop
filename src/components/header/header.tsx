import styles from "./header.module.scss";
import clsx from "clsx";
import { Navigation } from "../navigation/navigation";

function Header() {
  return (
    <header className={styles.header}>
      <Navigation />
    </header>
  );
}

export { Header };

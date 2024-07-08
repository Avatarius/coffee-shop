

import styles from "./list.module.scss";
import { ReactNode } from "react";

interface IListProps {
  cards: ReactNode;
}

function List({cards} : IListProps) {
  return (
    <>
      <section className={styles.container}>
        <ul className={styles.list}>
          {cards}
        </ul>
      </section>
    </>
  );
}

export { List };

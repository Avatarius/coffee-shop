import styles from "./cardProduct.module.scss";
import coffee from "../../images/coffee.jpg";
import { SyntheticEvent } from "react";
import { Image } from "../image/image";

interface ICardProductProps {
  title: string;
  cost: number;
  image: string;
  onClick: () => void;
}

function CardProduct({ title, cost, image, onClick }: ICardProductProps) {
  return (
    <article className={styles.container} onClick={onClick}>
      <Image
        src={image}
        alt={title}
        fallbackSrc={coffee}
        className={styles.img}
      />
      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.cost}>{cost} р</p>
      </div>
    </article>
  );
}

export { CardProduct };

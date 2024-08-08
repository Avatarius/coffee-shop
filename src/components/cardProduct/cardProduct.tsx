import styles from "./cardProduct.module.scss";
import coffee from "../../images/coffee.jpg";

interface ICardProductProps {
  title: string;
  cost: number;
  volume: number;
  onClick: () => void;
}

function CardProduct({ title, cost, volume, onClick }: ICardProductProps) {
  return (
    <article className={styles.container} onClick={onClick}>
      <img src={coffee} alt="Кофе" className={styles.img} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.cost}>{cost} р</p>
      <p className={styles.volume}>{volume} мл</p>
      <button className={styles.button}>+</button>
    </article>
  );
}

export { CardProduct };

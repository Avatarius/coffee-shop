import { CardProduct } from "../cardProduct/cardProduct";
import { products } from "../../data/products";
import styles from "./menu.module.scss";
import { Splitter } from "../splitter/splitter";

function Menu() {
  return (
    <>
      <Splitter text="Меню"/>
      <section className={styles.container}>
        <ul className={styles.list}>
          {products.map((product) => (
            <CardProduct
              title={product.name}
              cost={product.price}
              volume={product.volume}
            />
          ))}
        </ul>
      </section>
    </>
  );
}

export { Menu };

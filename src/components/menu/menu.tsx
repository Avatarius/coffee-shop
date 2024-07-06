import { CardProduct } from "../cardProduct/cardProduct";
import { products } from "../../data/products";
import styles from './menu.module.scss';

function Menu() {
  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {products.map(product => <CardProduct title={product.name} cost={product.price} volume={product.volume}/>)}
      </ul>
    </section>
  )
}

export {Menu};

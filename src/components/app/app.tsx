import { Hero } from "../hero/hero";
import { List } from "../list/list";
import { Splitter } from "../splitter/splitter";
import { products, popular } from "../../data/products";
import { CardProduct } from "../cardProduct/cardProduct";

function App() {
  const cardsMenu = products.map(product => <CardProduct title={product.name} cost={product.price} volume={product.volume}/>);
  const cardsPopular = popular.map(product => <CardProduct title={product.name} cost={product.price} volume={product.volume}/>);
  return (
    <>
      <Hero />
      <main>
        <Splitter text="Популярное"/>
        <List cards={cardsPopular}/>
        <Splitter text='Меню'/>
        <List cards={cardsMenu}/>
      </main>
    </>
  );
}

export { App };

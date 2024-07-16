import { Hero } from "../hero/hero";
import { List } from "../list/list";
import { Splitter } from "../splitter/splitter";
import { products, popular } from "../../data/products";
import { CardProduct } from "../cardProduct/cardProduct";
import { Carousel } from "../carousel/carousel";
import { reviews } from "../../data/reviews";
import { CardReview } from "../cardReview/cardReview";
import { Footer } from "../footer/footer";

function App() {
  const cardsMenu = products.map(product => <CardProduct title={product.name} cost={product.price} volume={product.volume}/>);
  const cardsPopular = popular.map(product => <CardProduct title={product.name} cost={product.price} volume={product.volume}/>);
  const cardsReviews = reviews.map(review => <CardReview name={review.name} text={review.text}/>)
  return (
    <>
      <Hero />
      <main>
        <Splitter text="Популярное"/>
        <List cards={cardsPopular}/>
        <Splitter text='Меню'/>
        <List cards={cardsMenu}/>
        <Splitter text='Отзывы'/>
        <Carousel cards={cardsReviews}/>
      </main>
      <Footer/>
    </>
  );
}

export { App };

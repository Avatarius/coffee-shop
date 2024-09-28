import { Hero } from "../hero/hero";
import { List } from "../list/list";
import { Splitter } from "../splitter/splitter";
import { CardProduct } from "../cardProduct/cardProduct";
import { Carousel } from "../carousel/carousel";
import { CardReview } from "../cardReview/cardReview";
import { Footer } from "../footer/footer";
import { useDispatch } from "../../services/store";
import { fetchProducts } from "../../services/thunk/products";
import { RefObject, useEffect, useRef } from "react";
import { useSelector } from "../../services/store";
import {
  selectCurrentProduct,
  selectPopular,
  selectProducts,
  setCurrentProduct,
} from "../../services/slices/products";
import {
  selectCurrentReview,
  selectReviews,
  setCurrentReview,
} from "../../services/slices/reviews";
import { fetchReviews } from "../../services/thunk/reviews";
import { Modal } from "../modal/modal";
import { IProduct, IReview, ModalType } from "../../utils/types";
import { ModalProduct } from "../modalProduct/modalProduct";
import { ModalReview } from "../modalReview/modalReview";
import { openModal, selectModalType } from "../../services/slices/modal";
import { ModalBasket } from "../modalBasket/modalBasket";
import { products } from "../../data/products";
import { ModalAddress } from "../modalAddress/modalAddress";
import { ModalSuccess } from "../modalSuccess/modalSuccess";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchReviews());
  }, []);

  const modalType = useSelector(selectModalType);

  const currentReview = useSelector(selectCurrentReview);

  function handleClickProductCard(product: IProduct) {
    dispatch(setCurrentProduct(product));
    dispatch(openModal(ModalType.Product));
  }

  function handleClickReviewCard(review: IReview) {
    dispatch(setCurrentReview(review));
    dispatch(openModal(ModalType.Review));
  }

  const cardsMenu = useSelector(selectProducts).map((product) => (
    <CardProduct
      title={product.name}
      cost={product.price}
      image={product.image}
      onClick={() => handleClickProductCard(product)}
      key={product.id}
    />
  ));
  const cardsPopular = useSelector(selectPopular).map((product) => (
    <CardProduct
      title={product.name}
      cost={product.price}
      image={product.image}
      onClick={() => handleClickProductCard(product)}
      key={product.id}
    />
  ));
  const cardsReviews = useSelector(selectReviews).map((review) => (
    <CardReview
      name={review.name}
      text={review.text}
      image={review.image}
      onClick={() => handleClickReviewCard(review)}
      key={review.id}
    />
  ));

  function renderModal() {
    switch (modalType) {
      case ModalType.Product:
        return <ModalProduct />;
      case ModalType.Review:
        return <ModalReview />;
      case ModalType.Basket:
        return <ModalBasket />;
      case ModalType.Address:
        return <ModalAddress />;
      case ModalType.Success:
        return <ModalSuccess />;
      default:
        return <Modal />;
    }
  }

  function scrollTo(ref: RefObject<HTMLElement>) {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }

  const heroRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLHeadingElement>(null);
  const reviewsRef = useRef<HTMLHeadingElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      {renderModal()}
      <Hero
        scrollToHero={() => scrollTo(heroRef)}
        scrollToMenu={() => scrollTo(menuRef)}
        scrollToReviews={() => scrollTo(reviewsRef)}
        scrollToFooter={() => scrollTo(footerRef)}
        ref={heroRef}
      />
      <main>
        <Splitter text="Популярное" ref={menuRef} />
        <List cards={cardsPopular} />
        <Splitter text="Меню" />
        <List cards={cardsMenu} />
        <Splitter text="Отзывы" ref={reviewsRef} />
        <Carousel cards={cardsReviews} cardWidth={340} gap={20} />
      </main>
      <Footer
        scrollToHero={() => scrollTo(heroRef)}
        scrollToMenu={() => scrollTo(menuRef)}
        scrollToReviews={() => scrollTo(reviewsRef)}
        scrollToFooter={() => scrollTo(footerRef)}
        ref={footerRef}
      />
    </>
  );
}

export { App };

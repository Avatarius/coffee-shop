import { Hero } from "../hero/hero";
import { List } from "../list/list";
import { Splitter } from "../splitter/splitter";
import { CardProduct } from "../cardProduct/cardProduct";
import { Carousel } from "../carousel/carousel";
import { CardReview } from "../cardReview/cardReview";
import { Footer } from "../footer/footer";
import { useDispatch } from "../../services/store";
import { fetchProducts } from "../../services/thunk/products";
import { useEffect } from "react";
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

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchReviews());
  }, []);

  const modalType = useSelector(selectModalType);

  const currentProduct = useSelector(selectCurrentProduct);
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
      cost={product.cost}
      volume={product.volume}
      onClick={() => handleClickProductCard(product)}
    />
  ));
  const cardsPopular = useSelector(selectPopular).map((product) => (
    <CardProduct
      title={product.name}
      cost={product.cost}
      volume={product.volume}
      onClick={() => handleClickProductCard(product)}
    />
  ));
  const cardsReviews = useSelector(selectReviews).map((review) => (
    <CardReview
      name={review.name}
      text={review.text}
      onClick={() => handleClickReviewCard(review)}
    />
  ));

  function renderModal() {
    switch (modalType) {
      case ModalType.Product:
        return (
          <ModalProduct
            name={currentProduct?.name ?? ""}
            cost={currentProduct?.cost ?? 0}
            volume={currentProduct?.volume ?? 0}
            description={currentProduct?.description ?? ""}
          />
        );
      case ModalType.Review:
        return (
          <ModalReview
            name={currentReview?.name ?? ""}
            text={currentReview?.text ?? ""}
          />
        );
      case ModalType.Basket:
        return <ModalBasket/>;
      default:
        return <Modal />;
    }
  }

  return (
    <>
      {renderModal()}
      <Hero />
      <main>
        <Splitter text="Популярное" />
        <List cards={cardsPopular} />
        <Splitter text="Меню" />
        <List cards={cardsMenu} />
        <Splitter text="Отзывы" />
        <Carousel cards={cardsReviews} />
      </main>
      <Footer />
    </>
  );
}

export { App };

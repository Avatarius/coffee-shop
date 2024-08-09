import { Hero } from "../hero/hero";
import { List } from "../list/list";
import { Splitter } from "../splitter/splitter";
import { CardProduct } from "../cardProduct/cardProduct";
import { Carousel } from "../carousel/carousel";
import { CardReview } from "../cardReview/cardReview";
import { Footer } from "../footer/footer";
import { useDispatch } from "../../services/store";
import { fetchProducts } from "../../services/thunk/products";
import { useEffect, useState } from "react";
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
import { IModalData, IProduct, IReview, ModalType } from "../../utils/types";
import { ModalProduct } from "../modalProduct/modalProduct";
import { ModalReview } from "../modalReview/modalReview";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchReviews());
  }, []);

  const [modalData, setModalData] = useState<IModalData>({
    isVisible: false,
    type: ModalType.None,
  });

  const currentProduct = useSelector(selectCurrentProduct);
  const currentReview = useSelector(selectCurrentReview);

  function handleClickProductCard(product: IProduct) {
    setModalData({ isVisible: true, type: ModalType.Product });
    dispatch(setCurrentProduct(product));
  }

  function handleClickReviewCard(review: IReview) {
    setModalData({ isVisible: true, type: ModalType.Review });
    dispatch(setCurrentReview(review));
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
    switch (modalData.type) {
      case ModalType.Product:
        return (
          <ModalProduct
            modalData={modalData}
            setModalData={setModalData}
            name={currentProduct?.name ?? ""}
            cost={currentProduct?.cost ?? 0}
            volume={currentProduct?.volume ?? 0}
            description={currentProduct?.description ?? ""}
          />
        );
      case ModalType.Review:
        return (
          <ModalReview
            modalData={modalData}
            setModalData={setModalData}
            name={currentReview?.name ?? ""}
            text={currentReview?.text ?? ""}
          />
        );
      default:
        return (
          <Modal modalData={modalData} setModalData={setModalData}>
            <div>empty</div>
          </Modal>
        );
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

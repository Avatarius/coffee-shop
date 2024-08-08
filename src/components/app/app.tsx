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
import { selectPopular, selectProducts } from "../../services/slices/products";
import { selectReviews } from "../../services/slices/reviews";
import { fetchReviews } from "../../services/thunk/reviews";
import { Modal } from "../modal/modal";
import { IModalData, IProduct, ModalType } from "../../utils/types";
import { ModalProduct } from "../ModalProduct/modalProduct";

function App() {
  const [modalData, setModalData] = useState<IModalData>({
    isVisible: false,
    type: ModalType.None,
  });
  const [currentProduct, setCurrentProduct] = useState<IProduct>({
    name: "",
    cost: 0,
    volume: 0,
    description: "",
  });

  function setProductModalData(product: IProduct) {
    setModalData({ isVisible: true, type: ModalType.Product });
    setCurrentProduct({
      name: product.name,
      cost: product.cost,
      volume: product.volume,
      description: product.description,
    });
  }

  const cardsMenu = useSelector(selectProducts).map((product) => (
    <CardProduct
      title={product.name}
      cost={product.cost}
      volume={product.volume}
      onClick={() => setProductModalData(product)}
    />
  ));
  const cardsPopular = useSelector(selectPopular).map((product) => (
    <CardProduct
      title={product.name}
      cost={product.cost}
      volume={product.volume}
      onClick={() => setProductModalData(product)}
    />
  ));
  const cardsReviews = useSelector(selectReviews).map((review) => (
    <CardReview name={review.name} text={review.text} />
  ));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchReviews());
  }, []);

  function renderModal() {
    switch (modalData.type) {
      case ModalType.Product:
        return (
          <ModalProduct
            modalData={modalData}
            setModalData={setModalData}
            name={currentProduct.name}
            cost={currentProduct.cost}
            volume={currentProduct.volume}
            description={currentProduct.description}
          />
        );
      case ModalType.Review:
        return (
          <Modal modalData={modalData} setModalData={setModalData}>
            <div>review</div>
          </Modal>
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
      {/* <Modal modalData={modalData} setModalData={setModalData} content={<div>test</div>}/> */}
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

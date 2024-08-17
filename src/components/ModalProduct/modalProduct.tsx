import { Modal } from "../modal/modal";
import coffee from "../../images/coffee.jpg";
import styles from "./modalProduct.module.scss";
import { IProduct } from "../../utils/types";
import { useSelector, useDispatch } from "../../services/store";
import { addToBasket, removeFromBasket, selectProductList } from "../../services/slices/basket";

function ModalProduct(props: IProduct) {
  const { id, name, cost, volume, description } = props;

  const dispatch = useDispatch();
  const basket = useSelector(selectProductList);
  const isAlreadyInBasket =
    basket.findLastIndex((item) => item.id === id) !== -1;

  function handleAddButtonClick() {
    const product: IProduct = {
      id,
      name,
      cost,
      volume,
      description,
    };
    if (!isAlreadyInBasket) {
      dispatch(addToBasket(product));
    } else {
      dispatch(removeFromBasket(id));
    }
  }

  return (
    <Modal>
      <div className={styles.container}>
        <img src={coffee} alt="Изображение товара" className={styles.img} />
        <h3 className={styles.title}>{name}</h3>
        <p className={styles.volume}>{volume} мл</p>
        <p className={styles.description}>{description}</p>
        <div className={styles.bottom}>
          <p className={styles.cost}>{cost} р</p>
          <button
            className={styles.button}
            onClick={() => handleAddButtonClick()}
          >
            {isAlreadyInBasket ? "✓" : "+"}
          </button>
        </div>
      </div>
    </Modal>
  );
}

export { ModalProduct };

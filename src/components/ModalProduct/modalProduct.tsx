import { Modal } from "../modal/modal";
import coffee from "../../images/coffee.jpg";
import styles from "./modalProduct.module.scss";
import { IProduct } from "../../utils/types";
import { useSelector, useDispatch } from "../../services/store";
import {
  addToBasket,
  removeFromBasket,
  selectProductList,
} from "../../services/slices/basket";
import { VolumeRadioGroup } from "../volumeRadioGroup/volumeRadioGroup";
import { selectCurrentProduct } from "../../services/slices/products";

function ModalProduct() {
  const currentProduct = useSelector(selectCurrentProduct);

  if (!currentProduct) {
    return null;
  }

  const {name, totalPrice, description } = currentProduct;

  const dispatch = useDispatch();
  const basket = useSelector(selectProductList);
  const isAlreadyInBasket =
    basket.findLastIndex((item) => item.id === currentProduct?.id) !== -1;

  function handleAddButtonClick() {
    if (!currentProduct) return;
    if (!isAlreadyInBasket) {
      dispatch(addToBasket(currentProduct));
    } else {
      dispatch(removeFromBasket(currentProduct.id));
    }
  }

  return (
    <Modal>
      <div className={styles.container}>
        <img src={coffee} alt="Изображение товара" className={styles.img} />
        <h3 className={styles.title}>{name}</h3>
        <VolumeRadioGroup range={currentProduct.volumeRange}/>
        <p className={styles.description}>{description}</p>
        <div className={styles.bottom}>
          <p className={styles.cost}>{totalPrice} р</p>
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

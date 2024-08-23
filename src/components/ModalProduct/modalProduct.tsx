import { Modal } from "../modal/modal";
import coffee from "../../images/coffee.jpg";
import styles from "./modalProduct.module.scss";
import { IProduct } from "../../utils/types";
import { useSelector, useDispatch } from "../../services/store";
import {
  addToBasket,
  removeFromBasket,
  selectProductList,
  setTotalSum,
} from "../../services/slices/basket";
import { VolumeRadioGroup } from "../volumeRadioGroup/volumeRadioGroup";
import { selectCurrentProduct } from "../../services/slices/products";
import { isAlreadyInBasket } from "../../utils/utils";

function ModalProduct() {
  const currentProduct = useSelector(selectCurrentProduct);
  if (!currentProduct) {
    return null;
  }
  const {id, name, totalPrice, description, volumeRange } = currentProduct;

  const dispatch = useDispatch();
  const basket = useSelector(selectProductList);


  function handleAddButtonClick() {
    if (!currentProduct) return;
    if (!isAlreadyInBasket(basket, id)) {
      dispatch(addToBasket(currentProduct));
    } else {
      dispatch(removeFromBasket(id));
    }
    dispatch(setTotalSum());
  }

  return (
    <Modal>
      <div className={styles.container}>
        <img src={coffee} alt="Изображение товара" className={styles.img} />
        <h3 className={styles.title}>{name}</h3>
        <VolumeRadioGroup id={id} range={volumeRange}/>
        <p className={styles.description}>{description}</p>
        <div className={styles.bottom}>
          <p className={styles.cost}>{totalPrice} р</p>
          <button
            className={styles.button}
            onClick={() => handleAddButtonClick()}
          >
            {isAlreadyInBasket(basket, id) ? "✓" : "+"}
          </button>
        </div>
      </div>
    </Modal>
  );
}

export { ModalProduct };

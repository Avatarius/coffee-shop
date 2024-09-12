import { Modal } from "../modal/modal";
import coffee from "../../images/coffee.jpg";
import styles from "./modalProduct.module.scss";
import { useSelector, useDispatch } from "../../services/store";
import {
  addToBasket,
  removeFromBasket,
  selectProductList,
  setBasketItemVolume,
  setTotalPrice,
  setTotalSum,
} from "../../services/slices/basket";
import { VolumeRadioGroup } from "../volumeRadioGroup/volumeRadioGroup";
import {
  selectCurrentProduct,
  setCurrentProductVolume,
} from "../../services/slices/products";
import { isAlreadyInBasket } from "../../utils/utils";
import { IProduct } from "../../utils/types";
import { Image } from "../image/image";

function ModalProduct() {
  const currentProduct = useSelector(selectCurrentProduct);
  const basket = useSelector(selectProductList);
  if (!currentProduct) {
    return null;
  }
  const product = (
    isAlreadyInBasket(basket, currentProduct.id)
      ? basket.find((item) => item.id === currentProduct.id)
      : currentProduct
  ) as IProduct;
  const { id, name, totalPrice, description, volume, volumeRange, image } =
    product;

  const dispatch = useDispatch();

  function handleAddButtonClick() {
    if (!product) return;
    if (!isAlreadyInBasket(basket, id)) {
      dispatch(addToBasket(product));
    } else {
      dispatch(removeFromBasket(id));
    }
    dispatch(setTotalSum());
  }

  function handleVolumeButtonClick(volume: number) {
    dispatch(setCurrentProductVolume(volume));
    if (isAlreadyInBasket(basket, id)) {
      dispatch(setBasketItemVolume({ id, volume }));
    }
    dispatch(setTotalPrice(id));
    dispatch(setTotalSum());
  }

  return (
    <Modal padding={0}>
      <div className={styles.container}>
        <Image
          src={image}
          alt={name}
          fallbackSrc={coffee}
          className={styles.img}
        />
        <div className={styles.info}>
          <h3 className={styles.title}>{name}</h3>
          <VolumeRadioGroup
            volume={volume}
            range={volumeRange}
            onClick={(volume) => handleVolumeButtonClick(volume)}
          />
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
      </div>
    </Modal>
  );
}

export { ModalProduct };

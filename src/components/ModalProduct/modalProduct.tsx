import { Modal } from "../modal/modal";
import coffee from "../../images/coffee.jpg";
import styles from "./modalProduct.module.scss";
import { IProduct } from "../../utils/types";
import { useDispatch } from "react-redux";
import { addToBasket } from "../../services/slices/basket";


type IModalProductProps = Omit<IProduct, 'id'>;


function ModalProduct(props: IProduct) {
  const { id, name, cost, volume, description } = props;

  const dispatch = useDispatch();

  function handleAddButtonClick() {
    const product = {
      id,
      name,
      cost,
      volume,
      description
    };
    dispatch(addToBasket(product));
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
          <button className={styles.button} onClick={() => handleAddButtonClick()}>+</button>
        </div>
      </div>
    </Modal>
  );
}

export { ModalProduct };

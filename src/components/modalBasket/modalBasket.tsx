import { Modal } from "../modal/modal";
import styles from "./modalBasket.module.scss";
import coffee from "../../images/coffee.jpg";
import { Counter } from "../counter/counter";
import { useDispatch, useSelector } from "../../services/store";
import { removeFromBasket, selectProductList, selectTotalSum, setBasketItemCount, setTotalPrice, setTotalSum } from "../../services/slices/basket";

function ModalBasket() {

  const basket = useSelector(selectProductList);

  const a = [
    {
      id: '1',
      name: "Мокачино",
      cost: 120,
      volume: 200,
      description:
        "imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel risus commodo viverra",
    },
    {
      id: '2',
      name: "Мокачино",
      cost: 120,
      volume: 200,
      description:
        "imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel risus commodo viverra",
    },
    {
      id: '3',
      name: "Мокачино",
      cost: 120,
      volume: 200,
      description:
        "imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel risus commodo viverra",
    },
    {
      id: '4',
      name: "Мокачино",
      cost: 120,
      volume: 200,
      description:
        "imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel risus commodo viverra",
    },
    {
      id: '5',
      name: "Мокачино",
      cost: 120,
      volume: 200,
      description:
        "imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel risus commodo viverra",
    },
    {
      id: '6',
      name: "Мокачино",
      cost: 120,
      volume: 200,
      description:
        "imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel risus commodo viverra",
    },
    {
      id: '7',
      name: "Мокачино",
      cost: 120,
      volume: 200,
      description:
        "imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel risus commodo viverra",
    },
    {
      id: '8',
      name: "Мокачино",
      cost: 120,
      volume: 200,
      description:
        "imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel risus commodo viverra",
    },
    {
      id: '9',
      name: "Мокачино",
      cost: 120,
      volume: 200,
      description:
        "imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel risus commodo viverra",
    },
    {
      id: '10',
      name: "Мокачино",
      cost: 120,
      volume: 200,
      description:
        "imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel risus commodo viverra",
    },
    {
      id: '11',
      name: "Мокачино",
      cost: 120,
      volume: 200,
      description:
        "imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel risus commodo viverra",
    },
    {
      id: '12',
      name: "Мокачино",
      cost: 120,
      volume: 200,
      description:
        "imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel risus commodo viverra",
    },
  ]

  const dispatch = useDispatch();

  function handleChangeItemCount(id: string, count: number) {
    dispatch(setBasketItemCount({id: id, count: count}));
    dispatch(setTotalPrice(id));
    dispatch(setTotalSum());
  }

  function handleRemoveItem(id: string) {
    dispatch(removeFromBasket(id));
    dispatch(setTotalSum());
  }

  return (
    <Modal>
      <div className={styles.container}>
        <ul className={styles.list}>
          {basket.map((item) => (
            <li className={styles.item} key={item.id}>
              <div className={styles.product}>
                <img
                  src={coffee}
                  alt="Изображение кофе"
                  className={styles.img}
                />
                <div>
                  <h3 className={styles.title}>{item.name}</h3>
                  <p>{item.volume}</p>
                </div>
                <Counter onClick={(count: number) => handleChangeItemCount(item.id, count)}/>
                <p className={styles.cost}>{item.totalPrice} р</p>
              </div>
              <button className={styles.remove} onClick={() => handleRemoveItem(item.id)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 0 19 19" width={35}>
                  <path
                    fill="#fff"
                    fillRule="evenodd"
                    d="M4.917 14.889c0 .468.687 1.111 1.146 1.111h6.875c.458 0 1.145-.643 1.145-1.111V6H4.917v8.889ZM15 3.465h-2.444L11.333 2H7.667L6.444 3.465H4V4.93h11V3.465Z"
                  />
                </svg>
              </button>
            </li>
          ))}
        </ul>
        <p className={styles.totalPrice}>Общая стоимость: {useSelector(selectTotalSum)}р</p>
        <button className={styles.button}>Далее</button>
      </div>
    </Modal>
  );
}

export { ModalBasket };

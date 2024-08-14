import { Modal } from "../modal/modal";
import styles from "./modalBasket.module.scss";
import coffee from "../../images/coffee.jpg";
import { Counter } from "../counter/counter";

function ModalBasket() {
  const mockBasket = [
    {
      name: "Мокачино",
      price: 120,
      volume: 200,
      description:
        "imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel risus commodo viverra",
    },
    {
      name: "Латте",
      price: 99,
      volume: 200,
      description:
        "imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel risus commodo viverra",
    },
    {
      name: "Раф",
      price: 249,
      volume: 300,
      description:
        "imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel risus commodo viverra",
    },
  ];
  return (
    <Modal>
      <div className={styles.container}>
        <ul className={styles.list}>
          {mockBasket.map((item) => (
            <li className={styles.item}>
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
                <Counter/>
                <p className={styles.cost}>{item.price} р</p>
              </div>
              <button className={styles.remove}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 0 19 19" width={35}>
                  <path
                    fill="#fff"
                    fill-rule="evenodd"
                    d="M4.917 14.889c0 .468.687 1.111 1.146 1.111h6.875c.458 0 1.145-.643 1.145-1.111V6H4.917v8.889ZM15 3.465h-2.444L11.333 2H7.667L6.444 3.465H4V4.93h11V3.465Z"
                  />
                </svg>
              </button>
            </li>
          ))}
        </ul>
        <button className={styles.button}>Далее</button>
      </div>
    </Modal>
  );
}

export { ModalBasket };

import styles from './basketItem.module.scss';
import coffee from '../../images/coffee.jpg';
import { Counter } from '../counter/counter';
import { IBasketItem, IconType } from '../../utils/types';
import { useDispatch } from '../../services/store';
import { removeFromBasket, setBasketItemCount, setTotalPrice, setTotalSum } from '../../services/slices/basket';
import { Button } from '../button/button';
import { Svg } from '../svg/svg';

interface IBasketItemProps {
  item: IBasketItem;
}

function BasketItem({item}: IBasketItemProps) {

  const dispatch = useDispatch();

  function handleChangeItemCount(id: string, count: number) {
    dispatch(setBasketItemCount({ id: id, count: count }));
    dispatch(setTotalPrice(id));
    dispatch(setTotalSum());
  }

  function handleRemoveItem(id: string) {
    dispatch(removeFromBasket(id));
    dispatch(setTotalSum());
  }

  return (
    <li className={styles.item} key={item.id}>
      <div className={styles.product}>
        <img src={coffee} alt="Изображение кофе" className={styles.img} />
        <div>
          <h3 className={styles.title}>{item.name}</h3>
          <p>{item.volume}</p>
        </div>
        <Counter
          count={item.count}
          onClick={(count: number) => handleChangeItemCount(item.id, count)}
        />
        <p className={styles.cost}>{item.totalPrice} р</p>
      </div>
      <Button content={<Svg type={IconType.Remove}/>} onClick={() => handleRemoveItem(item.id)} transparent/>
    </li>
  );
}

export {BasketItem};


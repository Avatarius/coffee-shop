import { IBasketItem } from "./types";

function calculateTotalPrice(
  price: number,
  minVolume: number,
  currentVolume: number
) {
  return Math.round((price / minVolume) * currentVolume);
}

function isAlreadyInBasket(basket: IBasketItem[], id: string) {
  return basket.findLastIndex((item) => item.id === id) !== -1;
}

export { calculateTotalPrice, isAlreadyInBasket };

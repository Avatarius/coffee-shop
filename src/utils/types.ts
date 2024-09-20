interface IProduct {
  id: string;
  name: string;
  price: number;
  totalPrice: number;
  volume: number;
  description: string;
  isPopular?: boolean;
  volumeRange: number[];
  image: string;
}

interface IBasketItem extends IProduct {
  count: number;
}

interface IReview {
  id: string;
  name: string,
  text: string;
  image: string;
}

interface IModalData {
  isVisible: boolean;
  type: ModalType;
}

interface IOrder {
  productList: IBasketItem[];
  totalSum: number;
  name: string;
  tel: string;
  address: string;
}

interface IAddressForm {
  name: string;
  tel: string;
  address: string;
}

enum ModalType {
  None = 0,
  Product,
  Review,
  Basket,
  Address,
  Success
}

enum IconType {
  Back,
  Remove,
  Basket,
  Close,
  LeftArrow,
  RightArrow,
  Plus,
  Tick,
  Success
}

export {ModalType, IconType};

export type { IProduct, IBasketItem, IReview, IModalData, IOrder,  IAddressForm};

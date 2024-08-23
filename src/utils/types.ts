interface IProduct {
  id: string;
  name: string;
  price: number;
  totalPrice: number;
  volume: number;
  description: string;
  isPopular?: boolean;
  volumeRange: number[];
}

interface IBasketItem extends IProduct {
  count: number;
}

interface IReview {
  id: string;
  name: string,
  text: string;
}

interface IModalData {
  isVisible: boolean;
  type: ModalType;
}

enum ModalType {
  None = 0,
  Product,
  Review,
  Basket
}

export {ModalType};

export type { IProduct, IBasketItem, IReview, IModalData };

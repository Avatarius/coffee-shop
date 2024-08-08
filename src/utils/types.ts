interface IProduct {
  name: string;
  cost: number;
  volume: number;
  description: string;
  isPopular?: boolean;
}

interface IReview {
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
  Review
}

export {ModalType};

export type { IProduct, IReview, IModalData };

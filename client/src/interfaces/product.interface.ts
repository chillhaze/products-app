export interface IProduct {
  _id: string;
  sku: string;
  name: string;
  price: number;
  description: string;
  type: 'DVD' | 'FURNITURE' | 'BOOK';
  options: {
    size?: number;
    weight?: number;
    height?: number;
    width?: number;
    length?: number;
  };
  createdAt?: string;
  updatedAt?: string;
  __v: number;
}

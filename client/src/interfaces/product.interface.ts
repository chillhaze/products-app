import { TProductTypes } from '../types/product.type';

export interface IProduct {
  _id: string;
  sku: string;
  name: string;
  price: number;
  description: string;
  type: TProductTypes;
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

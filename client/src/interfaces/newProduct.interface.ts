export interface INewProduct {
  sku: string;
  name: string;
  price: string;
  type: 'DVD' | 'BOOK' | 'FURNITURE' | string;
  size?: string;
  weight?: string;
  length?: string;
  height?: string;
  width?: string;
}

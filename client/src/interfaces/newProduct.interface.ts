export interface INewProduct {
  sku: string | undefined;
  name: string | undefined;
  price: string | undefined;
  type: 'DVD' | 'BOOK' | 'FURNITURE' | string | undefined;
  options: {
    size?: number;
    weight?: number;
    height?: number;
    width?: number;
    length?: number;
  };
}

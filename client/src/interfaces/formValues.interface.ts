export interface IFormValues {
  sku: string;
  name: string;
  price: string;
  type: 'DVD' | 'BOOK' | 'FURNITURE' | string;
  size: string;
  weight: string;
  height: string;
  width: string;
  length: string;
}

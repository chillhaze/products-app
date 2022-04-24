import { Document } from "mongoose";

export interface IProduct extends Document {
  sku: string;
  name: string;
  price: number;
  type: "DVD" | "FURNITURE" | "BOOK";
  options: {
    size?: number;
    height?: number;
    width?: number;
    length?: number;
    weight?: number;
  };

  id?: string | undefined;
}

import { Document } from "mongoose";

export interface IProduct extends Document {
  sku: string;
  name: string;
  price: number;
  description: string;
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

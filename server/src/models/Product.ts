import { Model, model, Schema } from "mongoose";
import { IProduct } from "../interfaces/Product.interface";
import { productTypes } from "../consts/productTypes";
const types = Object.values(productTypes);

const productSchema: Schema = new Schema(
  {
    sku: {
      type: String,
      required: [true, "SKU is required"],
    },
    name: {
      type: String,
      required: [true, "Name is required"],
      minLength: 2,
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
    },
    type: {
      type: String,
      enum: [...types],
      required: [true, "Type is required"],
    },
    options: {
      size: { type: Number, required: false },
      height: { type: Number, required: false },
      width: { type: Number, required: false },
      length: { type: Number, required: false },
      weight: { type: Number, required: false },
    },
  },
  { timestamps: true },
);

const Product: Model<IProduct> = model("Product", productSchema);

export default Product;

import { Model, model, Schema } from "mongoose";
import { IProduct } from "../interfaces/Product.interface";
import { productTypes } from "../consts/productTypes";
const types = Object.values(productTypes);

const productSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      minLength: 4,
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    type: {
      type: String,
      enum: [...types],
      required: [true, "Type is required"],
    },
    size: { type: Number, required: false },
    height: { type: Number, required: false },
    width: { type: Number, required: false },
    length: { type: Number, required: false },
    weight: { type: Number, required: false },
  },
  { timestamps: true },
);

const Product: Model<IProduct> = model("Product", productSchema);

export default Product;

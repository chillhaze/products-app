import Product from "../models/Product";
import { IProduct } from "../interfaces/Product.interface";

export default class ProductsService {
  async findAll() {
    return await Product.find();
  }

  async addNewProduct(body: IProduct) {
    return await Product.create({ ...body });
  }

  async deleteProduct(id: string) {
    return await Product.findByIdAndRemove({
      _id: id,
    });
  }
}

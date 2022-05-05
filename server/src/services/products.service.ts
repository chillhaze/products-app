import Product from "../models/Product";
import { IProduct } from "../interfaces/Product.interface";

export default class ProductsService {
  async findAll() {
    return await Product.find().sort({ createdAt: -1 });
  }

  async addNewProduct(body: IProduct) {
    return await Product.create({ ...body });
  }

  async deleteProduct(ids: string[]) {
    return await Product.deleteMany({
      _id: { $in: ids },
    });
  }
}

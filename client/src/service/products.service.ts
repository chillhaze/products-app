import { IProduct } from '../interfaces/product.interface';
import HttpService from './http.service';

class ProductsService extends HttpService {
  productsUrl: string;
  constructor() {
    super();
    this.productsUrl = 'products';
  }

  async getProducts() {
    const { data } = await this.get({
      url: `${this.productsUrl}`,
      id: undefined,
    });

    return data.data;
  }

  async addProduct(newProduct: IProduct) {
    const { data } = await this.post({
      url: this.productsUrl,
      data: newProduct,
    });

    console.log('addProduct', data);

    return data.data;
  }

  async deleteTodo(id: string) {
    const { data } = await this.delete({
      url: this.productsUrl,
      id,
    });

    return data.data;
  }
}

export default ProductsService;

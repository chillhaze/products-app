import { Response, Request } from "express";
import ProductsService from "../services/products.service";

export class ProductsController {
  constructor(private productsService: ProductsService) {}

  async getAllProducts(_: Request, res: Response) {
    const products = await this.productsService.findAll();

    res.status(200).json({
      status: "success",
      code: 200,
      message: `Found ${products.length} products`,
      data: products,
    });
  }

  async addNewProduct(req: Request, res: Response) {
    const body = req.body;
    const { name, type } = req.body;
    const createdProduct = await this.productsService.addNewProduct({
      ...body,
    });

    res.status(201).json({
      status: "success",
      code: 201,
      message: `Product [name:'${name}', type:'${type}'] created`,
      data: createdProduct,
    });
  }

  async deleteProduct(req: Request, res: Response) {
    const { id } = req.params;
    const deletedProduct = await this.productsService.deleteProduct([id]);

    res.status(200).json({
      status: "success",
      code: 200,
      message: `Product [id:'${id}'] deleted`,
      data: deletedProduct,
    });
  }

  async massDeleteProducts(req: Request, res: Response) {
    const { ids } = req.body;
    const result = await this.productsService.deleteProduct(ids);

    res.status(200).json({
      status: "success",
      code: 200,
      message: `Products deleted: ${result.deletedCount}`,
    });
  }
}

const productsController = new ProductsController(new ProductsService());
export default productsController;

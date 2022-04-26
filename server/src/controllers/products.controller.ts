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
    const deletedProduct = await this.productsService.deleteProduct(id);

    res.status(200).json({
      status: "success",
      code: 200,
      message: `Product [id:'${id}'] deleted`,
      data: deletedProduct,
    });
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000/");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "PUT, POST, GET, DELETE, PATCH, OPTIONS",
    );
  }
}

const productsController = new ProductsController(new ProductsService());
export default productsController;

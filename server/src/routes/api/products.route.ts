import { Router } from "express";
import productsController from "../../controllers/products.controller";
import { validation } from "../../middlewares/validation";
import { joiProductSchema } from "../../schemas/joiProductSchema";
import { checkExistingProduct } from "../../middlewares/checkExistingProduct";
import { checkProductParams } from "../../middlewares/checkProductParams";
import { checkProductById } from "../../middlewares/checkProductById";

const validateMiddleware = validation(joiProductSchema);
const productsRouter: Router = Router();

productsRouter.get(
  "",
  productsController.getAllProducts.bind(productsController),
);

productsRouter.post(
  "",
  validateMiddleware,
  checkProductParams,
  checkExistingProduct,
  productsController.addNewProduct.bind(productsController),
);

productsRouter.delete(
  "/:id",
  checkProductById,
  productsController.deleteProduct.bind(productsController),
);

export default productsRouter;

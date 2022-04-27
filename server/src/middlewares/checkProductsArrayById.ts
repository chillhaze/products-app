import { Response, Request, NextFunction } from "express";
import Product from "../models/Product";

export const checkProductsArrayById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { ids } = req.body;
    ids.forEach(async (id: string) => {
      const product = await Product.findById({
        _id: id,
      });

      if (!product) {
        res.status(409).send(`Product [id:'${id}'] not found`);
      } else {
        next();
      }
    });
  } catch (error) {
    next(error);
  }
};

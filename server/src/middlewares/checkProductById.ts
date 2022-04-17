import { Response, Request, NextFunction } from "express";
import Product from "../models/Product";

export const checkProductById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const product = await Product.findById({
      _id: id,
    });

    if (!product) {
      return res.status(409).send(`Product [id:'${id}'] not found`);
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
};

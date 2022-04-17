import { Response, Request, NextFunction } from "express";
import Product from "../models/Product";

export const checkExistingProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { name, type } = req.body;
  const existingProduct = await Product.findOne({
    name,
    type,
  });

  if (existingProduct) {
    return res
      .status(409)
      .send(`Product [name:'${name}', type:'${type}'] already exists`);
  } else {
    next();
  }
};

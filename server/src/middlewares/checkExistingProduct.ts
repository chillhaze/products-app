import { Response, Request, NextFunction } from "express";
import Product from "../models/Product";

export const checkExistingProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { sku, name, type } = req.body;
  const existingProduct = await Product.findOne({
    name,
    type,
  });

  const existingBySku = await Product.findOne({
    sku,
  });

  if (existingProduct) {
    return res
      .status(409)
      .send(`Product [name:'${name}', type:'${type}'] already exists`);
  } else if (existingBySku) {
    return res.status(409).send(`Product [sku:'${sku}'] already exists`);
  } else {
    next();
  }
};

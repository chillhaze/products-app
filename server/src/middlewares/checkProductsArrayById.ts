import { Response, Request, NextFunction } from "express";
import Product from "../models/Product";

export const checkProductsArrayById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { ids } = req.body;
  if (!ids) {
    res.status(409).send(`Error! id is required`);
  }

  try {
    const products = await Product.find({
      _id: { $in: ids },
    });
    if (products.length === 0) {
      res.status(409).send(`Products not found`);
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
};

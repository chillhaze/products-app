import { Response, Request, NextFunction } from "express";
import { productTypes } from "../consts/productTypes";

export const checkProductParams = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { type } = req.body;
  const { dvd, furniture, book } = productTypes;

  const checkTypes = Object.entries(productTypes).find(
    (item) => item[1] === type,
  );

  if (!checkTypes)
    return res.status(409).send(`Product [type:'${type}'] is not allowed`);

  let checkTypeParams = false;
  if (type === dvd && req.body.size) checkTypeParams = true;
  if (
    type === furniture &&
    req.body.height &&
    req.body.width &&
    req.body.length
  )
    checkTypeParams = true;
  if (type === book && req.body.weight) checkTypeParams = true;

  if (!checkTypeParams) {
    return res.status(409).send(`Product [type:'${type}'] missing params`);
  } else {
    next();
  }
};

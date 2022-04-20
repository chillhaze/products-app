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
  if (type === dvd && req.body.options.size) checkTypeParams = true;
  if (
    type === furniture &&
    req.body.options.height &&
    req.body.options.width &&
    req.body.options.length
  )
    checkTypeParams = true;
  if (type === book && req.body.options.weight) checkTypeParams = true;

  if (!checkTypeParams) {
    return res
      .status(409)
      .send(`Product [type:'${type}'] missing required params`);
  } else {
    next();
  }
};

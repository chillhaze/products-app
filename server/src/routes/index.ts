import { Application } from "express";
import productsRouter from "./api/products.route";

class AppRouter {
  constructor(private app: Application) {}
  init() {
    this.app.get("/", (_req, res) => {
      res.send("API Running");
    });
    this.app.use("/api/products", productsRouter);
  }
}

export default AppRouter;

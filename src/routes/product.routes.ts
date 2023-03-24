import express from "express";
import { createProductController } from "../modules/Product/useCases/CreateProductUseCase";
import { deleteproductusecaseControler } from "../modules/Product/useCases/DeleteProductUseCaseUseCase";
import { readproductusecaseControler } from "../modules/Product/useCases/ReadProductUseCaseUseCase";
import { updateproductusecaseControler } from "../modules/Product/useCases/UpdateProductUseCaseUseCase";

const productRouter = express.Router()

productRouter.post("/create", (req, res) => {
    createProductController.handle(req, res);
})

productRouter.get("", (req, res) => {
    readproductusecaseControler.handle(req, res);
})

productRouter.put("/:id", (req, res) => {
    updateproductusecaseControler.handle(req, res);
})

productRouter.delete("/:id", (req, res) => {
    deleteproductusecaseControler.handle(req, res);
})

export { productRouter };

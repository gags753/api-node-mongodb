import { UpdateProductUseCaseController } from "./UpdateProductUseCaseController";
import { UpdateProductUseCaseUseCase } from "./UpdateProductUseCaseUseCase";
import { ProductRepository } from "../../../../repositories/ProductsRepository";

const productRepository = new ProductRepository()
const updateproductusecaseUseCase = new UpdateProductUseCaseUseCase(productRepository);
const updateproductusecaseControler = new UpdateProductUseCaseController(updateproductusecaseUseCase);

export { updateproductusecaseUseCase, updateproductusecaseControler };
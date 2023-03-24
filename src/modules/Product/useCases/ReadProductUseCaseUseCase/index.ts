import { ReadProductUseCaseController } from "./ReadProductUseCaseController";
import { ReadProductUseCaseUseCase } from "./ReadProductUseCaseUseCase";
import { ProductRepository } from "../../../../repositories/ProductsRepository";

const productRepository = new ProductRepository()
const readproductusecaseUseCase = new ReadProductUseCaseUseCase(productRepository);
const readproductusecaseControler = new ReadProductUseCaseController(readproductusecaseUseCase);

export { readproductusecaseUseCase, readproductusecaseControler };
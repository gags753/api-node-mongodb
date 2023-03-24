import { DeleteProductUseCaseController } from "./DeleteProductUseCaseController";
import { DeleteProductUseCaseUseCase } from "./DeleteProductUseCaseUseCase";
import { ProductRepository } from "../../../../repositories/ProductsRepository";

const productRepository = new ProductRepository();
const deleteproductusecaseUseCase = new DeleteProductUseCaseUseCase(productRepository);
const deleteproductusecaseControler = new DeleteProductUseCaseController(deleteproductusecaseUseCase);

export { deleteproductusecaseUseCase, deleteproductusecaseControler };
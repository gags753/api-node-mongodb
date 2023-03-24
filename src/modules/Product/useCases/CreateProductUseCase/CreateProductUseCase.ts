import { IProductRepository } from "../../../../repositories/IProductRepository";
import { ICreateProductDTO } from "./ICreateProductDTO";

export class CreateProductUseCase {

    constructor(private IProductRepository: IProductRepository) { }

    async execute(data: ICreateProductDTO) {
        return await this.IProductRepository.createProduct(data);
    }
}
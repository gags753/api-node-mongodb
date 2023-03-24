import { IUpdateProductUseCaseDTO } from "./IUpdateProductUseCaseDTO";
import { IProductRepository } from "../../../../repositories/IProductRepository";

export class UpdateProductUseCaseUseCase {

	constructor(private IProductRepository: IProductRepository) {}

	async execute(data: IUpdateProductUseCaseDTO) {
		return await this.IProductRepository.updateProduct(data)
	}
}
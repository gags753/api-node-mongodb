import { IProductRepository } from "../../../../repositories/IProductRepository";

export class DeleteProductUseCaseUseCase {

	constructor(private IProductRepository: IProductRepository) { }

	async execute(id: string) { 
		return await this.IProductRepository.deleteProduct(id);
	}
}
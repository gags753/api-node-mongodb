import { IProductRepository } from "../../../../repositories/IProductRepository";

export class ReadProductUseCaseUseCase {

	constructor(private IProductRepository: IProductRepository) {}

	async execute() {
		return await this.IProductRepository.readProducts();
	}
}
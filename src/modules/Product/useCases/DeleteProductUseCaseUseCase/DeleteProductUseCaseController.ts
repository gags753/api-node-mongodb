import { Request, Response } from "express";
import { DeleteProductUseCaseUseCase } from "./DeleteProductUseCaseUseCase";


export class DeleteProductUseCaseController {

	constructor(private deleteproductusecaseUseCase: DeleteProductUseCaseUseCase) {}

	async handle(request: Request, response: Response) {

		try {
			const {id} = request.params
			return response.json(await this.deleteproductusecaseUseCase.execute(id))
		} catch (error) {
			return response.status(500).json(error.message);
		}
	}
}
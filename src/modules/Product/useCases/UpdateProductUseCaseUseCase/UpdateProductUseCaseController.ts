import { Request, Response } from "express";
import { UpdateProductUseCaseUseCase } from "./UpdateProductUseCaseUseCase";

export class UpdateProductUseCaseController {

	constructor(private updateproductusecaseUseCase: UpdateProductUseCaseUseCase) { }

	async handle(request: Request, response: Response) {

		try {
			const { name, value, amount } = request.body
			const { id } = request.params
			return response.json(await this.updateproductusecaseUseCase.execute({
				name,
				value,
				amount,
				id
			}))
		} catch (error) {
			return response.status(500).json(error.message)
		}
	}
}
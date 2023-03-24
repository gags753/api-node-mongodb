import { ReadProductUseCaseUseCase } from "./ReadProductUseCaseUseCase";
import { Request, Response } from "express";

export class ReadProductUseCaseController {

	constructor(private readproductusecaseUseCase: ReadProductUseCaseUseCase) {}

	async handle(request: Request, response: Response) {

		try {
			const products = await this.readproductusecaseUseCase.execute();
			return response.json(products);
		} catch (error) {
			return response.status(500).json(error.message);
		}
	}
}
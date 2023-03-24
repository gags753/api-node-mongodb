import { Request, Response } from "express";
import { CreateProductUseCase } from "./CreateProductUseCase";

export class CreateProductController {
    constructor(private createProductUseCase: CreateProductUseCase) { }

    async handle(req: Request, res: Response) {
        try {
            const { name, value, amount } = req.body
            await this.createProductUseCase.execute({
                name, value, amount
            });
            return res.json("Produto cadastrado");
        } catch (e) {
            return res.status(500).json(e.message);
        }
    }
}
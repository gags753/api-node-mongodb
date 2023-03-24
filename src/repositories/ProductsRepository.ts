import { ProductModel } from "../models/Product/product.model";
import { ICreateProductDTO } from "../modules/Product/useCases/CreateProductUseCase/ICreateProductDTO";
import { IUpdateProductUseCaseDTO } from "../modules/Product/useCases/UpdateProductUseCaseUseCase/IUpdateProductUseCaseDTO";

export class ProductRepository {
    async createProduct(data: ICreateProductDTO) {
        return ProductModel.create(data)
    }

    async readProducts() {
        return await ProductModel.find()
    }

    async updateProduct(data: IUpdateProductUseCaseDTO) {
        return await ProductModel.findByIdAndUpdate(
            { _id: data.id },
            {
                $set: {
                    name: data.name,
                    amount: data.amount,
                    value: data.value
                }
            },
            { new: true }
        )
    }

    async deleteProduct(id: string) {
        return await ProductModel.deleteOne(
            { _id: id }
        )
    }
}
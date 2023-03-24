import { DeleteResult } from "mongodb";
import { IProductDocument } from "../models/Product/product.model";
import { ICreateProductDTO } from "../modules/Product/useCases/CreateProductUseCase/ICreateProductDTO";
import { IUpdateProductUseCaseDTO } from "../modules/Product/useCases/UpdateProductUseCaseUseCase/IUpdateProductUseCaseDTO";

export interface IProductRepository {
    createProduct(data: ICreateProductDTO): Promise<IProductDocument>;
    readProducts(): Promise<IProductDocument[] | []>;
    updateProduct(data: IUpdateProductUseCaseDTO): Promise<IProductDocument | null>
    deleteProduct(id: string): Promise<DeleteResult>
}
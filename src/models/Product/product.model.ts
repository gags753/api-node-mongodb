import { Document, model, Schema, Model } from 'mongoose';

interface IProduct extends Document {
    name: string,
    value: Number,
    amount: Number
}

const ProductSchema: Schema = new Schema<IProduct>({
    name: { type: String, default: '' },
    value: { type: Number, default: 0 },
    amount: { type: Number, default: 0 }
});

export const ProductModel: Model<IProduct> = model<IProductDocument>("product", ProductSchema);

export interface IProductDocument extends IProduct, Document { }

import {Schema} from 'mongoose';
import * as mongoose from "mongoose";

export interface IProduct {
    id: number
    image: string
    name: string
    category: string
    qty: number | 1
    price: number
    discount: number
    total: number
}

const productSchema = new Schema<IProduct>({
    id: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: false
    },
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    qty: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    discount: {
        type: Number,
        required: true
    },
    total: {
        type: Number,
        required: true
    },

}, {timestamps: true})

const Product = mongoose.model<IProduct>('product', productSchema);

export default Product;
import {Collection, ObjectId} from "mongodb";

export interface Product {
    _id: ObjectId;
    image: string;
    name: string;
    category: string;
    qty: number;
    price: number;
    discount: number;
    total: number;

}

export interface Database {
    products: Collection<Product>;
}
export interface productInput{
    image: string;
    name: string;
    category: string;
    qty: number;
    price: number;
    discount: number;
    total: number;
}
export interface productArgs{
    input: productInput;
}
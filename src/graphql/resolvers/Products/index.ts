import {IResolvers} from "@graphql-tools/utils";
import {Database, Product, productArgs} from "../../../lib/Types";
import {ObjectId} from "mongodb";

export const resolvers: IResolvers = {
    Query: {
        products: async (
            root: undefined,
            _args: Record<string, unknown>,
            {db}: { db: Database }
        ): Promise<Product[]> => await db.products.find({}).toArray()
    },
    Mutation: {
        deleteProduct: async (
            _root: undefined,
            {id}: { id: string },
            {db}: { db: Database }
        ): Promise<Product> => {
            const deleteRes = await db.products.findOneAndDelete({
                _id: new ObjectId(id)
            });
            if (!deleteRes.value) {
                throw new Error("failed to delete product");
            }
            return deleteRes.value;
        },

        addProduct: async (
            _root: undefined,
            {input}: productArgs,
            {db , req}: { db: Database , req:Request},
        ): Promise<any> => {
            const insertRes = await db.products.insertOne({
                _id: new ObjectId(),
                ...input
            })
            const insertedProduct =insertRes.insertedId
            if (!insertRes) {
                throw new Error("failed to insert product");
            }
            return insertRes;
        }
    },
    Product: {
        id: (product: Product): string => product._id.toString()
    }
};
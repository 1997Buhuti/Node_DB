const prodcutsArray = require('../productsArray').productsArray();
import products from "../models/products";
import {IProduct} from "../models/products";
const resolvers = {
    Query: {
        products: () => prodcutsArray,
        getAllProducts: async () => {
            return products.find();
        }
    },
    Mutation: {
        createProduct: async (parent, args, context, info) => {
            const {id, image,name, category, qty, price, discount, total} = args.product
            const prod = new products({id, image, name, category, qty, price, discount, total})
            await prod.save()
            return prod
        }
    }
};

module.exports = {resolvers};

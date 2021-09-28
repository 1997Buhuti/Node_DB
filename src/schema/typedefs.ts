import {gql} from "apollo-server-express"
import {IProduct} from "../models/products";
const typeDefs = gql`
    type Product{
        id:Int!
        image:String
        name:String!
        category:String!
        qty:Int!
        price:Float!
        discount:Float!
        total:Float!
    }
    
    #queries
    type Query{
        products:[Product]
        getAllProducts:[Product]
    }
    
    #Mutations
    input productInput {
        id:Int
        image:String
        name:String
        category:String
        qty:Int
        price:Float
        discount:Float
        total:Float
    }
    type Mutation{
        createProduct(product:productInput):Product
    }
`;

module.exports = {typeDefs}
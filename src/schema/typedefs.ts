import {gql} from "apollo-server-express"

const typeDefs= gql`
    type Product{
        id:Int!
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
    
    #mutations
    input productInput{
        id:Int
        name:String
        category:String
        qty:Int
        price:Float
        discount:Float
        total:Float
    }
    type Mutation{
        createProduct(product:productInput)
`;

module.exports={typeDefs}
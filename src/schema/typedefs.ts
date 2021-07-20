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
        getProducts:Product
    }
    
    #mutations
`;

module.exports={typeDefs}
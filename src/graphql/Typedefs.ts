import {gql} from "apollo-server-express";

export const typeDefs = gql`
  type Product {
        id:ID!
        image:String
        name:String!
        category:String!
        qty:Int!
        price:Float!
        discount:Float!
        total:Float!
  }
  
  type rtnType {
    insertedId:ID!
    value:Boolean
  }
  
    input productInput{
        image:String
        name:String!
        category:String!
        qty:Int!
        price:Float!
        discount:Float!
        total:Float!    
  }
  

  type Query {
    products: [Product!]!
  }
  
  type Mutation {
    deleteProduct(id: ID!): Product!
    addProduct(input:productInput!):rtnType!
  }
`;

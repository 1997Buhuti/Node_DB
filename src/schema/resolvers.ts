const prodcutsArray= require('../productsArray').productsArray();
import products from "../models/products";
 const resolvers={
    Query:{
        products:()=>prodcutsArray,
        getAllProducts:async ()=>{
            return products.find();
        }
    },
    
};

module.exports={resolvers};

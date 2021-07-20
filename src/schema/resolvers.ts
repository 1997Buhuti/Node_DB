const prodcutsArray= require('../productsArray').productsArray();
import products from "../models/products";
 const resolvers={
    Query:{
        products:()=>prodcutsArray,
        getAllProducts:async ()=>{
            return products.find();
        }
    },
    Mutation:{
        createProduct:async (parent,args,context,info)=>{
            const{id,name,category,qty,price,total}=args
            const prod= new products({id,name,category,qty,price,total})
            await prod.save()
            return prod
        }
    }
};

module.exports={resolvers};

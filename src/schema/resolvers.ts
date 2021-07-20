const prodcutsArray= require('../productsArray').productsArray();

 const resolvers={
    Query:{
        products:()=>prodcutsArray,
    }
};

module.exports={resolvers};

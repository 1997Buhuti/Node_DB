const { prodcutsArray } = require('../productsArray');

 const resolvers={
    Query:{
        getProducts(){
            return prodcutsArray
        },
    },
};

module.exports={resolvers};

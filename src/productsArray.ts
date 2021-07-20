type products={
    id: number
    name: string
    category: string
    qty: number | 1
    price: number
    discount: number
    total: number
}
const productsArray:products[]=[
    {
        id:1200,
        name:"Carrot",
        category:"Vegetables",
        qty: 2000,
        price:130,
        discount:20,
        total:0
    },

    {
        id:1220,
        name:"Cabbage",
        category:"Vegetables",
        qty: 1200,
        price:110,
        discount:10,
        total:0
    }
];

module.exports={productsArray}
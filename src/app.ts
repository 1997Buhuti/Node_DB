import express from 'express';
import config from 'config';
import mongoose from "mongoose";
import Product from  "./models/products";
const {typeDefs} = require("./schema/typedefs")
const {resolvers} = require("./schema/resolvers")
import morgan from'morgan';
const { ApolloServer} = require('apollo-server-express');
//import ApolloServer from "apollo-server-express"
const { prodcutsArray } = require('./productsArray');

const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
const dbUri='mongodb+srv://Manakal:Buhuti2021@cluster0.x1eyy.mongodb.net/Products_DB?retryWrites=true&w=majority'

//Appllo Server

async function startServer() {
    const server= new ApolloServer({typeDefs,resolvers});
    await server.start();
    server.applyMiddleware({ app });
}
startServer();

app.listen({port:3001},()=>{
    console.log('server running on port 3001');
});


//mongoose connect function
mongoose.connect(dbUri,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then((result)=>{
        app.listen(3000)
        //log.info("database connected");
        console.log("database connected");
    })
    .catch((error)=>{
        console.log("models error",error);
    });

// middleware & static files
app.use(express.static('public'));
app.use(morgan('dev'));
app.use((req, res, next) => {
    res.locals.path = req.path;
    next();
});

//routes
app.get('/',(req,res)=>{
    Product.find().then((result)=>{
        res.send(result);
    }).catch((error)=>{
        console.log(error);
    });
})
app.get('/get-products',(req,res)=>{
    Product.find().then((result)=>{
        //prodcutsArray.push(result);
        res.send(result);
        console.log(prodcutsArray)
    }).catch((error)=>{
        console.log(error);
    });
})


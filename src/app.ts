import express from 'express';
import config from 'config';
import log from "./logger";
import mongoose from "mongoose";
import Product from  "./models/products"
import morgan from'morgan';

const port=config.get("port") as number;
const host=config.get("host") as string;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));
/*
app.listen(port,host,()=>{
    log.info(`Server listening  at https://${host}:${port}`)
});*/
const dbUri='mongodb+srv://Manakal:Buhuti2021@cluster0.x1eyy.mongodb.net/Products_DB?retryWrites=true&w=majority'

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
        //console.log("models error",error);
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
        res.send(result);
    }).catch((error)=>{
        console.log(error);
    });
})


const express=require('express');
import config from 'config';
import log from "./logger";
import connect from "./db/connect";
import mongoose from "mongoose"

const port=config.get("port") as number;
const host=config.get("host") as string;

const app=express();
const dbUri='mongodb+srv://Manakal:Buhuti2021@cluster0.x1eyy.mongodb.net/Products_DB?retryWrites=true&w=majority'

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.listen(port,host,()=>{
    log.info(`Server listening  at https://${host}:${port}`)
});
mongoose.connect(dbUri,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(()=>{
        log.info("database connected");
    })
    .catch((error)=>{
        log.error("db error",error);
        process.exit(1)
    });


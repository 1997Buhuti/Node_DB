import express from 'express';
import config from "config";
import log from "../logger";
import * as mongoose from "mongoose";

function connect(){
    const dbUri='mongodb+srv://Manakal:Buhuti2021@cluster0.x1eyy.mongodb.net/Products_DB?retryWrites=true&w=majority'

    return mongoose
        .connect(dbUri,{
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
}
export default connect;
import http from 'http'
import exress from 'express'
import bodyParser from "body-parser";
import logging from "./config/logging";
import config from "./config/config";

const NAMESPACE='server';
const router=exress();

/** Logging the request **/

router.use((req,res,next)=>{
    logging.info(NAMESPACE,`METHOD - [${req.method}], URL - [${req.url}], IP-[${req.socket.remoteAddress}]`);

    res.on(`finish`,()=>{
        logging.info(NAMESPACE,`METHOD - [${req.method}], URL - [${req.url}], IP-[${req.socket.remoteAddress}]`);

    })
});

/**parse the request*/
router.use(bodyParser.urlencoded({extended:false}));
router.use(bodyParser.json());

/** Rules of our API */

router.use((req,res,next)=>{

    res.header(`Access-Control-Allow-Header`,`*`);
    res.header(`Access-Control-Allow-Origin`,`Origin, x-Requested-with,Content-Type,Accept,Authorization`);

    if(req.method=='OPTIONS'){
        res.header('Access-Control-Allow-Method','Get Patch delete Post put');
        return res.status(200).json({});
    }

})

/** Routes */


/** Error Hnadling */
router.use((req,res,next)=>{
    const error = new Error('not found');

    return res.status(404).json({
        message:error.message
    });
});

/** Create the server */

const httpServer= http.createServer(router);
httpServer.listen(config.server.port,()=>logging.info(NAMESPACE,`server is running 
on ${config.server.hostname}:${config.server.port}`));

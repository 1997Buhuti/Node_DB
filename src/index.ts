require("dotenv").config();
import express, {Application} from 'express';
import {ApolloServer} from "apollo-server-express";
import {resolvers,typeDefs} from "./graphql";
import {connectDB} from "./Database";

const mount = async (app: Application) => {
    const db = await connectDB();
    const server = new ApolloServer({
        resolvers,
        typeDefs,
        context: () => ({db})
    });
    await server.start();
    server.applyMiddleware({app, path: "/api"});
    app.listen(process.env.PORT);
    console.log(`[app]:http//localhost:${process.env.PORT}`);

    const products = await db.products.find({}).toArray();
    console.log(products);
}
mount(express()).then(r => console.log("Successfully created connection") );
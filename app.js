import Fastify from "fastify";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

//import routes
import userRouter from "./routers/user.routes.js";
import OrgRouter from "./routers/org.routes.js";
const fastify = Fastify({ logger: true });



//make routes
fastify.register(userRouter, { prefix: "/ICSspaces/api/usersAPI" });
fastify.register(OrgRouter, { prefix: "/ICSspaces/api/usersAPI" });
mongoose.connect("mongodb://localhost:27017/",{
    useNewUrlParser: true, // to support old versions of mongodb
    useUnifiedTopology:true,
}).then(() => console.log("Connected to the database", mongoose.connection.db.databaseName))
.catch((e) => console.log("Error connecting to the database", e));



fastify.listen(3000)
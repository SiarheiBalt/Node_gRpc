import express, {Express, NextFunction, Request, Response} from "express";
// import { expressConnectMiddleware } from "@bufbuild/connect-express";
import bodyParser from "body-parser";

import routes from "./connect";
import client from "./client";
import createMany from "./src/create";
import addInstrument from "./src/addInst";
import addUser from "./src/addUser";
import {update, findMany, findAndUpdate} from "./src/update"

async function main() {
    
const app: Express = express();
app.use(bodyParser.json());
const PORT = 8090;

// app.use(expressConnectMiddleware({routes}))

app.get("/", async (req, res) => {
    res.send("OK");
});

app.get("/update", async (req, res) => {
    const message = await update();
    res.send(message)
})


app.get("/findAndUpdate", async (req, res) => {
    const message = await findAndUpdate();
    res.send(message)
})

app.get("/findMany", async (req, res) => {
    const message = await findMany();
    res.send(message)
})

app.get("/create", async (req, res) => {
    const message = await createMany();
    res.send(message)
})

app.get("/addinst", async (req, res) => {
    const message = await addInstrument();
    res.send(message)
})




// app.get("/grpc",  async (req, res) => {
//     await client().then((grpcResult) => {

//         // some code

//         res.send(grpcResult);
//     })
// })

app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`));

}

void main()


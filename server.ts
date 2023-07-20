import express, {Express, NextFunction, Request, Response} from "express";
import { expressConnectMiddleware } from "@bufbuild/connect-express";
import bodyParser from "body-parser";

import routes from "./connect";
import client from "./client"


async function main() {
    
const app: Express = express();
app.use(bodyParser.json());
const PORT = 8090;

app.use(expressConnectMiddleware({routes}))

app.get("/", async (req, res) => {
    res.send("OK");
});

app.get("/grpc",  async (req, res) => {

    await client().then((grpcResult) => {

        // some code

        res.send(grpcResult);
    })
})

app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`));

}

void main()


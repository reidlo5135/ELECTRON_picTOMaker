import express from "express";
import dotenv from "dotenv";
import loaders from "./loaders";
import {sequelize} from "./model";

dotenv.config();

async function startServer() {
    const app: express.Application = express();
    await loaders({ expressApp: app });
    const port = process.env.PORT || 5000;
    app.listen(port, async () => {
        console.log(`Express app.ts -> Connected to http://localhost:${port}`);
        await sequelize.authenticate()
            .then(async () => {
                console.log(`Database connected on ${port}`);
            })
            .catch((e:Error) => {
                console.error(e);
            });
    });
}

export = startServer();
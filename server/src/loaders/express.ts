import express from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";
import cors from "cors";
import bodyParser from "body-parser";
import UserRouter from "../api/user/local/UserRouter";
import SocialUserRouter from "../api/user/social/SocialUserRouter";
import {swaggerOptions} from "./swagger";

const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const specs = swaggerJsdoc(swaggerOptions);

export default async ({ app }: { app: express.Application }) => {
    app.use(logger("dev"));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(cors({ origin: "http://localhost:3000/" }));
    app.use(
        "/api-docs",
        swaggerUi.serve,
        swaggerUi.setup(specs, {explorer: true})
    );
    app.use("/v1/api/user/", UserRouter);
    app.use("/v1/api/social/", SocialUserRouter);

    return app;
};
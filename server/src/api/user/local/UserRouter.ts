import express from "express";
const router = express.Router();
const controller = require("../local/UserController");

router.post('/login', controller.login);

export = router;
import express from "express";
import * as controller from "../local/UserController";
const router = express.Router();

router.post('/login', controller.login);

export = router;
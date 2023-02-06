import express from "express";
import * as controller from "../social/SocialUserController";
const router = express.Router();

router.post('/login', controller.socialLogin);

export = router;
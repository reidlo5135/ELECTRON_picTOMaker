import { Request, Response } from "express";
const service = require('../../../service/user/local/UserService');

const login = async(req: Request, res: Response) => {
    console.log('UserController login');
    const params = {
        email : req.body.email,
        password : req.body.password
    };
    console.log('email : ', params.email);
}

export = {
    login
}
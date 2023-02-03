import { Request, Response } from "express";
import * as service from "../../../service/user/local/UserService";

export function login(req: Request, res: Response) {
    const params = {
        email : req.body.email,
        password : req.body.password
    };
    console.log('UserController login email : ', JSON.stringify(params));
    service.generateToken(params)
        .then(
            (resolve:any) => {
                console.log("UserController login resolved : ", JSON.stringify(resolve));
            },
            (reject:any) => {
                console.log("UserController login rejected : ", JSON.stringify(reject));
            }
        )
}
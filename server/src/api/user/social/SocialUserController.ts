import { Request, Response } from "express";
import * as service from "../../../service/user/social/SocialUserService";

export function socialLogin(req: Request, res: Response) {
    const params = {
        email : req.body.email,
        password : req.body.password
    };
    console.log('SocialUserController login email : ', JSON.stringify(params));
    service.generateToken(params)
        .then(
            (resolve:any) => {
                console.log("SocialUserController login resolved : ", JSON.stringify(resolve));
            },
            (reject:any) => {
                console.log("SocialUserController login rejected : ", JSON.stringify(reject));
            }
        )
}
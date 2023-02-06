import {SocialUser} from "../../../model/user/social/SocialUser";
import {DatabaseError} from "sequelize";

export async function generateToken(params:any): Promise<any> {
    console.log("SocialUserService generateToken params : ", JSON.stringify(params));
    return new Promise<any>((resolve, reject) => {
        SocialUser.findOne({
            where: {
                email: params.email,
            }
        }).then((result) => {
            console.log("SocialUserService generateToken user find : ", result);
            resolve(result);
        }).catch((e:DatabaseError) => {
            console.error(`SocialUserService generateToken error : ${e}`);
            reject(e);
        })
    });
}
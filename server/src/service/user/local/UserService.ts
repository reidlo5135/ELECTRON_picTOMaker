import {User} from "../../../model/user/local/User";
import {DatabaseError} from "sequelize";


export async function generateToken(params:any): Promise<any> {
    console.log("UserService generateToken params : ", JSON.stringify(params));
    return new Promise<any>((resolve, reject) => {
        User.findOne({
            where: {
                email: params.email,
            }
        }).then((result) => {
            console.log("UserService generateToken user find : ", result);
            resolve(result);
        }).catch((e:DatabaseError) => {
            console.error(`UserService generateToken error : ${e}`);
            reject(e);
        })
    });
}
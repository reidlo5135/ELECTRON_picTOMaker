import {User} from "../model/user/local/User";

export async function createTableUser() {
    await User.sync({force:true})
        .then(() => {
            console.log('✅Success Create User TABLE');
        })
        .catch((e:Error) => {
            console.error('❗Error in Create User Table : ', e);
        });
}

createTableUser();
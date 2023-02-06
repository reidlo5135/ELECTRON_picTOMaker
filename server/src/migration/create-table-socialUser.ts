import {SocialUser} from "../model/user/social/SocialUser";

export async function createTableSocialUser() {
    await SocialUser.sync({force:true})
        .then(() => {
            console.log('✅Success Create SocialUser TABLE');
        })
        .catch((e:Error) => {
            console.error('❗Error in Create SocialUser Table : ', e);
        });
}
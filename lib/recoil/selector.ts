import { selector } from "recoil";
import { profile } from "./atom";

const userProfile = selector({
    key: 'userProfile',
    get: ({get})=>{
        const {user}: any = get(profile)
        return user;
    }
})


export{
    userProfile
}
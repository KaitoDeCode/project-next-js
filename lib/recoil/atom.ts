import { atom } from "recoil";

const theme = atom({
    key: "theme",
    default: "light"
})

const profile = atom({
    key: "profile",
    default : {
        user: Object,
        token : Object,
    }
})

export {
    theme,
    profile
}
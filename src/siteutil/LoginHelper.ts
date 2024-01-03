import { UserInfoType } from "../context/type";

export const loginHelper = {
    getUserInfo: () => {
        return localStorage.getItem("gtx-calling-user-info") || null;
    },
    removeUserInfo: () => {
        localStorage.removeItem("gtx-calling-user-info");
    },
    setUserInfo: (userInfo: UserInfoType) => {
        localStorage.setItem("gtx-calling-user-info", JSON.stringify(userInfo));
    }
};

import { createContext, useContext, ReactNode, useState, useEffect, FC } from "react";
import { UserInfoType } from "./type";
import { useNavigate } from "react-router";
import { loginHelper } from "../siteutil/LoginHelper";

interface AuthContextType {
    user: UserInfoType | null;
    setUserInfo: (user: UserInfoType) => void;
    logout: () => void;
    userInfoLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<UserInfoType | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const navigate = useNavigate();

    useEffect(() => {
        const userInfo = loginHelper.getUserInfo();
        if (userInfo) {
            setUser(JSON.parse(userInfo));
        }
        setLoading(false);
    }, []);

    const setUserInfo = (userInfo: UserInfoType) => {
        setUser(userInfo);
        loginHelper.setUserInfo(userInfo);
    };

    const logout = () => {
        setUser(null);
        loginHelper.removeUserInfo();
        navigate("/");
    };

    const contextValue: AuthContextType = {
        user,
        logout,
        setUserInfo,
        userInfoLoading: loading
    };

    return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }

    return context;
};

import { useForm } from "react-hook-form";
import { loginInitialValue, loginValidationSchema } from "./util";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginType } from "./type";
import { handleGoogleLogin, loginUser } from "../../database/DatabaseHelper";
import { useState } from "react";
import { useAuth } from "../../context/AuthorizationContext";
import { useNavigate } from "react-router";
import { route } from "../../route/route";

export const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const { setUserInfo } = useAuth();
    const {
        setValue,
        handleSubmit,
        formState: { errors }
    } = useForm({
        defaultValues: loginInitialValue,
        resolver: yupResolver(loginValidationSchema)
    });
    const navigate = useNavigate();

    const onLoginClick = (value: LoginType) => {
        setLoading(true);
        loginUser(value)
            .then((res) => {
                setUserInfo(res);

                navigate("/dashboard");
            })
            .finally(() => setLoading(false));
    };

    const loginByGoogle = () => {
        setLoading(true);
        handleGoogleLogin()
            .then((res) => {
                setUserInfo(res);
                navigate(route.dashboard);
            })
            .finally(() => setLoading(false));
    };

    return {
        setValue,
        errors,
        handleSubmit,
        onLoginClick,
        loading,
        setLoading,
        loginByGoogle,
        navigate
    };
};

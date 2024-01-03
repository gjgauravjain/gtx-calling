import { useForm } from "react-hook-form";
import { registerInitialValue, registerValidationSchema } from "./util";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterType } from "./type";
import { createNewUser } from "../../database/DatabaseHelper";
import { useState } from "react";
import { useNavigate } from "react-router";
import { route } from "../../route/route";

export const useRegister = () => {
    const [loading, setLoading] = useState(false);
    const {
        setValue,
        handleSubmit,
        formState: { errors }
    } = useForm({
        defaultValues: registerInitialValue,
        resolver: yupResolver(registerValidationSchema)
    });

    const navigate = useNavigate();
    const onRegisterClick = (value: RegisterType) => {
        console.log("value", value);
        setLoading(true);
        createNewUser(value)
            .then(() => {
                navigate(route.login);
            })
            .catch(() => {})
            .finally(() => {
                setLoading(false);
            });
    };
    return {
        setValue,
        errors,
        handleSubmit,
        onRegisterClick,
        loading,
        navigate
    };
};

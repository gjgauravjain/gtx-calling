import { object, ref, string } from "yup";

export const registerInitialValue = {
    email: "",
    password: "",
    confirmPassword: ""
};

export const registerValidationSchema = object({
    email: string().email("Please enter valid email").required("Please enter email"),
    password: string().min(6, "Password length must be 6").required("Please enter password"),
    confirmPassword: string()
        .oneOf([ref("password")], "Passwords must match")
        .required("Please enter confirm password")
});

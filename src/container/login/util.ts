import { object, string } from "yup";

export const loginInitialValue = {
    email: "",
    password: ""
};

export const loginValidationSchema = object({
    email: string().email("Please enter valid email").required("Please enter email"),
    password: string().required("Please enter password")
});

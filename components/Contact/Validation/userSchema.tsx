import * as Yup from "yup";

const userSchema = Yup.object({
    name: Yup.string().required("Name is required").min(3, "Name must be at least 3 characters").max(20, "Name must be less than 20 characters"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    phone: Yup.number().required("Phone number is required"),
    message: Yup.string().required("Message is required").min(10, "Message must be at least 10 characters").max(500, "Message must be less than 500 characters"),
}).required();

export type UserSchemaType = Yup.InferType<typeof userSchema>;

export default userSchema;
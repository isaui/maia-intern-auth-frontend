import axios from "axios"
import { BK_BASE_URL } from "./constant"

type RegisterPayload = {
    password: String,
    passwordConfirmation: String,
    email: string,
    name: string
}

export const handleRegisterAPI = async (payload: RegisterPayload) => {
    const endpoint = BK_BASE_URL+"/auth/register"
    const response = await axios.post(endpoint, payload);
    const data = response.data;
    console.log(data);
}
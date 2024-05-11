import axios from "axios"
import { BK_BASE_URL } from "./constant"

type RegisterPayload = {
    password: String,
    passwordConfirmation: String,
    email: string,
    name: string
}

type LoginPayload = {
    identifier: String,
    password: String
}

export type UserDTO = {
    userId: number,
    name: string,
    email: string,
    token: string
}

export const handleRegisterAPI = async (payload: RegisterPayload) => {
    const endpoint = BK_BASE_URL+"/auth/register"
    await axios.post(endpoint, payload);
}

export const handleLoginAPI = async(payload: LoginPayload) : Promise<string | undefined> => {
    const endpoint = BK_BASE_URL+"/auth/login"
    try {
        const response = await axios.post(endpoint, payload)
        const data = response.data.data;
        return data.token
    } catch (error) {
        console.log(error);
        return undefined
    }
}

export const handleVerifyRegisterAPI = async (registrationToken: string): Promise<UserDTO | undefined> => {
    const endpoint = BK_BASE_URL+"/auth/register/activate/"+registrationToken;
    try {
        let response = await axios.get(endpoint);
        let data = response.data.data;
        return {
            userId: data.userInformation.userId,
            name: data.userInformation.name,
            email: data.userInformation.email,
            token: data.token
        }
    } catch (error) {
        console.error(error);
        return undefined;
    }
}


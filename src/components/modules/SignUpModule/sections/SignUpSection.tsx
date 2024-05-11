"use client"
import TextField from "@/components/elements/TextField";
import { ChangeEvent, useState } from "react";
import PasswordValidator from "../module-elements/PasswordValidator";
import { handleRegisterAPI } from "@/api/endpoint";
import { useRouter } from "next/navigation";

const SignUpSection = () => {
    const [isEmailAlreadyInUse, setIsEmailAlreadyInUse] = useState<boolean>(false)
    const [isValidEmail, setIsValidEmail] = useState<boolean>(true)
    const [afterSubmit, setAfterSubmit] = useState<boolean>(false)
    const [name, setName] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const route = useRouter();

    const isPasswordValid = () : boolean => {
        const isLengthValid = password.length >= 8;
        const hasUppercase = /[A-Z]/.test(password);
        const hasLowercase = /[a-z]/.test(password);
        const hasNumber = /\d/.test(password);
        const hasSymbol = /[^A-Za-z0-9]/.test(password);
        return isLengthValid && hasUppercase && hasLowercase && hasNumber && hasSymbol
    }

    const checkIsEmailValid = (): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValid = emailRegex.test(email);
        if(!isValid){
            setIsValidEmail(false);
        }
        return emailRegex.test(email);
      };
      

    const handleRegister = async ()=>{
        setAfterSubmit(true)
        if(!isPasswordValid() || !checkIsEmailValid()){
            return;
        }
        await handleRegisterAPI({
            password: password,
            passwordConfirmation: password,
            email: email,
            name: name
        })
        
        route.push("/signup/email")


    }

    const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>)=> {
        setEmail(e.target.value)
        setIsValidEmail(true)
        setIsEmailAlreadyInUse(false)
    }

    const handleChangePassword = (e: ChangeEvent<HTMLInputElement>)=>{
        setPassword(e.target.value);
        setAfterSubmit(false)
    }

    return <div>
        <h1 className="text-[#2F2F2F] font-bold text-2xl">Sign Up to Maia</h1>
        <div className="mt-8 mb-4">
            <TextField label={"Your Name"} type="text" onChange={e => setName(e.target.value)} placeholder="Your Name" value={name}/>
            <TextField label={"Email Address"} type="text" onChange={handleChangeEmail} placeholder="Email" value={email}>
            {(isEmailAlreadyInUse || !isValidEmail) && <div className="rounded-md w-full text-sm border-[#FBDFDF] border-2 bg-[#FFF5F5]
                 text-[#79889D] mt-6 p-4">
                    <p>{!isValidEmail? "Email is invalid": "Oops! It seems this email is already in use. Please try another email address or sign in with your existing account"}</p>
                </div>}
            </TextField>
            <TextField label={"Create Password"} type="password" onChange={handleChangePassword} placeholder="Password" value={password}>
            {afterSubmit && <PasswordValidator password={password}/>}
            </TextField>
        </div>
        <button onClick={handleRegister} className="w-full mt-4 bg-[#0F172A] py-2 px-4 rounded-lg">Sign Up</button>
        <p className="text-[#2F2F2F] text-center mt-8">By creating an account 
        you agree with our <a className="underline">Terms of Service</a> and <a className="underline">Privacy Policy</a></p>
        <p className="text-[#2F2F2F] text-center mt-4">Already have an 
        account? <a href="/login" className="underline">Sign In</a></p>
    </div>
}
export default SignUpSection;
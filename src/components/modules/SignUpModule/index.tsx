"use client"
import Navbar from "@/components/elements/Navbar"
import SignUpSection from "./sections/SignUpSection";
import { useState } from "react";
import VerifyEmailSection from "./sections/VerifyEmailSection";

const SignUpModule = () => {
    const [hasEmailBeenSent, setHasEmailBeenSent] = useState<boolean>(false)
    const [email, setEmail] = useState<string>("")
    return <div className="flex flex-col w-screen min-h-screen bg-[#F1F5F9]">
        <Navbar/>
        <div className="px-4 mt-20">
            {hasEmailBeenSent? <VerifyEmailSection email={email}/> : <SignUpSection callbackEmailSent={(emailTarget: string)=>{
                setHasEmailBeenSent(true)
                setEmail(emailTarget)
                }}/>}
        </div>
    </div>
}

export default SignUpModule;
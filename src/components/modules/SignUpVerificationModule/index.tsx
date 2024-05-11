"use client"
import { UserDTO, handleVerifyRegisterAPI } from "@/api/endpoint";
import Navbar from "@/components/elements/Navbar";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


type SignUpVerificationModuleProps = {
    id: string;
};


const SignUpVerificationModule: React.FC<SignUpVerificationModuleProps> = ({ id }) => {
    const router = useRouter();
    const [countdown, setCountdown] = useState(5);
    const [user, setUser] = useState<UserDTO | undefined>(undefined)
    const [loading, setLoading] = useState<boolean>(true)
    const handleVerify = async ()=> {
        setUser(await handleVerifyRegisterAPI(id))
        setLoading(false)
        
    }
    useEffect(()=>{
        handleVerify()
    },[])
    
    useEffect(()=>{
        if (user) {
            const intervalId = setInterval(() => {
                setCountdown(countdown-1);
            }, 1000);
            setTimeout(() => {
                clearInterval(intervalId);
                router.push("/dashboard")
            }, 5000);
        }
    },[user])

    return (
        <div className="flex flex-col w-screen min-h-screen bg-[#F1F5F9]">
            <Navbar/>
            <div className="px-4 mt-20 ">
                {
                    loading? <div></div> : 
                        user === undefined ? 
                        <div className="rounded-md w-full max-w-md mx-auto md:my-auto text-sm border-[#FBDFDF] border-2 bg-[#FFF5F5]
                        text-[#79889D] mt-6 p-4">The registration verification link is no longer valid.</div>: 
                        <div className="rounded-md w-full max-w-md mx-auto md:my-auto text-sm border-green-300 border-2 bg-green-200
                        text-[#79889D] mt-6 p-4">The account under the name of xx has been successfully activated. Enjoy all the features of Maia Digital</div>
                }
                {
                    user && <div id="registration-timer-countdown"  className="rounded-md w-full  max-w-md mx-auto md:my-auto text-sm 
                    text-black mt-6 p-4">Redirecting to dashboard in {countdown} seconds..</div>
                }
            </div>
        </div>
    );
};

export default SignUpVerificationModule;


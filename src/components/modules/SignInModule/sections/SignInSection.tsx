"use client"
import TextField from "@/components/elements/TextField"
import { ChangeEvent, useEffect, useState } from "react"
import { getUserDataAPI, handleLoginAPI } from "@/api/endpoint"
import { useRouter } from "next/navigation"
import { useDispatch } from "react-redux"
import { login } from "@/redux/slice/AuthSlice"
import { TOO_MANY_REQUEST } from "@/api/constant"

const SignInSection = () => {
    const router = useRouter()
    const dispatch = useDispatch();
    const [afterSubmit, setAfterSubmit] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)
    const [password, setPassword] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [sessionExpired, setSessionExpired] = useState(false);
    const [tooManyRequest, setTooManyRequest] = useState(false)

    useEffect(() => {
        // Mendapatkan bagian hash dari URL
        const hash = window.location.hash;
        // Lakukan sesuatu dengan hash, misalnya menampilkan pesan kesalahan sesuai dengan hash
        if (hash === "#session-expired") {
          console.log('Sesi telah berakhir.');
          setSessionExpired(true)
        }
      }, []);
    
    const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>)=> {
        setEmail(e.target.value)
        setError(false)
        setAfterSubmit(false)
    }

    const handleChangePassword = (e: ChangeEvent<HTMLInputElement>)=>{
        setPassword(e.target.value);
        setError(false)
        setAfterSubmit(false)
    }

    const handleLogin = async () => {
        const token = await handleLoginAPI({identifier:email, password:password})
        if(!token){
            setAfterSubmit(true)
            setError(true)
            return
        }
        else if(token === TOO_MANY_REQUEST){
            setTooManyRequest(true)
            return
        }
        else{
            const userData = await getUserDataAPI(token);
            if(userData){
                dispatch(login({user: userData}));
            }
        }
        router.push("/dashboard")
    }
    return <div className=" max-w-md mx-auto ">
         {
            tooManyRequest && <div className="rounded-md w-full
            max-w-md mx-auto md:my-auto text-sm border-[#FBDFDF] border-2 mt-8 bg-[#FFF5F5]
                           text-[#79889D] p-4">{`Too many requests. Please try again later within 1 minute.`}</div>
        }
        {sessionExpired && <div className="rounded-md w-full
         max-w-md mx-auto md:my-auto text-sm border-[#FBDFDF] border-2 bg-[#FFF5F5]
                        text-[#79889D] p-4">{`Your session has expired. Please sign in again.`}</div>}
        <h1 className={`text-[#2F2F2F] font-bold text-2xl ${sessionExpired || tooManyRequest? "mt-4" : ""}`}>Welcome Back!</h1>
        <p className="mt-4 text-[#2F2F2F]">{`Sign in below to access your
         workspace and continue your projects. Let's pick up where you left off!`}</p>
        <div className="mt-8 mb-4">
            <TextField label={"Email Address"} type="text" onChange={handleChangeEmail} placeholder="Email" value={email}/>
            <TextField label={"Create Password"} type="password" onChange={handleChangePassword} placeholder="Password" value={password}>
                <a className="absolute top-0 right-0 underline text-sm text-[#2F2F2F]" href="#">Forgot?</a>
            </TextField>
            {afterSubmit && error && <div className="rounded-md w-full max-w-md mx-auto md:my-auto text-sm border-[#FBDFDF] border-2 bg-[#FFF5F5]
                        text-[#79889D] mt-8  p-4">{`The email and password you entered don't match. Please try again`}</div>}
        </div>
        <button onClick={handleLogin} className="w-full mt-4 bg-[#0F172A] py-2 px-4 rounded-lg">Sign In</button>
        <p className="text-[#2F2F2F] text-center mt-8">{`Don't have an 
        account? `}<a href="/signup" className="underline">Sign Up</a></p>
        
    </div>
}
export default SignInSection
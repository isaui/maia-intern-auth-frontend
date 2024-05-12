"use client"
import Navbar from "@/components/elements/Navbar"
import DashboardSection from "./sections/DashboardSection"
import { AuthStateData } from "@/redux/store/Store";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { refreshTokenAPI } from "@/api/endpoint";
import { login } from "@/redux/slice/AuthSlice";

const DashboardModule = () => {
    const user = useSelector((state: AuthStateData) => state.auth.user);
    const dispatch = useDispatch();
    const router = useRouter()

    useEffect(()=>{
        handleRefresh()
    },[user])

    const handleRefresh = async () => {
        if(!user){
            router.push("/signin")
        }
        else{
            const token = await refreshTokenAPI(user.token);
            if(token){
                const newUserData = {...user}
                newUserData.token = token;
                dispatch(login({user:newUserData}));
            }
            else{
                router.push("/signin#session-expired")
            }
        }
    }

    return <div className="flex flex-col w-screen min-h-screen bg-[#F1F5F9]">
        <Navbar/>
        <div className="px-4 mt-20">
            <DashboardSection/>
        </div>
    </div>
}

export default DashboardModule
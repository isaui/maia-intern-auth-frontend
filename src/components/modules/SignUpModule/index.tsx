import Navbar from "@/components/elements/Navbar"
import SignUpSection from "./sections/SignUpSection";

const SignUpModule = () => {
    return <div className="flex flex-col w-screen min-h-screen bg-[#F1F5F9]">
        <Navbar/>
        <div className="px-4 mt-20">
            <SignUpSection/>
        </div>
        
    </div>
}

export default SignUpModule;
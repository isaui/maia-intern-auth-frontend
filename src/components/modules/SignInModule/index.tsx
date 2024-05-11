import Navbar from "@/components/elements/Navbar";
import SignInSection from "./sections/SignInSection";

const SignInModule = () => {
    return <div className="flex flex-col w-screen min-h-screen bg-[#F1F5F9]">
        <Navbar/>
        <div className="px-4 mt-20 ">
            <SignInSection/>
        </div>
    </div>
}

export default SignInModule;
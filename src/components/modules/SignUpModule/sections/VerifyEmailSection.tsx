type VerifyEmailSectionProps = {
    email: string
}
const VerifyEmailSection: React.FC<VerifyEmailSectionProps> = ({email}) => {
    return <div className="max-w-md mx-auto md:my-auto">
        <h1 className="text-[#2F2F2F] font-bold text-2xl">Verify Your Email to Get Started</h1>
        <div className="rounded-md w-full text-sm  bg-white
                 text-[#79889D] mt-6 p-4">A confirmation link has been sent to your email address {email}. Click the link to verify your account and unlock full access. </div>
    </div>
}

export default VerifyEmailSection
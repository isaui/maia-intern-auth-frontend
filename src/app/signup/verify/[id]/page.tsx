import SignUpVerificationModule from "@/components/modules/SignUpVerificationModule";

const Page = ({ params }: { params: { id: string } }) => {
    return <div>
        <SignUpVerificationModule id={params.id}/>
    </div>
}

export default Page;
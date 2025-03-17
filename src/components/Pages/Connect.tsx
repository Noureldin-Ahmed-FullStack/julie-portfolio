import SocialsSegment from "../ui/SocialsSegment";

export default function Connect() {
   
    return (
        <div className="flex flex-col items-center justify-end w-full bg-gray-700">
            <h1 className="text-zinc-200 crimson-pro font-normal text-3xl pt-8">Let's connect!</h1>
           <div className="h-64 w-3/4 py-8 sm:h-32">
           <SocialsSegment />
           </div>
            <div className="bg-gray-800 w-full !text-zinc-200 text-center mt-3 py-3">© Julie-Fredrike 2025 All Rights Reserved - Norway.</div>
        </div>
    )
}

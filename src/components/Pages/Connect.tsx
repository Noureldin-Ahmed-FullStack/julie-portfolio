import SocialsSegment from "../ui/SocialsSegment";

export default function Connect() {

    return (
        <div className="w-full relative bg-center bg-[url('https://res.cloudinary.com/dqijwldax/image/upload/v1743399955/Julie/StockCake-Art_in_Motion_1743296602_hnuttj.webp')]">
            <div className="absolute inset-0 bg-slate-900 bg-opacity-80"></div>
            <div className="flex flex-col items-center justify-end relative z-20">
                <h2 className="text-zinc-200 crimson-pro font-normal text-3xl pt-8">Let's connect!</h2>
                <div className="h-64 w-3/4 py-8 sm:h-32">
                    <SocialsSegment />
                </div>
                <div className="bg-gray-800 w-full !text-zinc-200 text-center mt-5 py-3">© Julie-Fredrike 2025 All Rights Reserved - Norway.</div>
            </div>

        </div>
    )
}

import { Link } from "react-router-dom";
import { FlipWords } from "../ui/flip-words";
import Reveal from "../ui/Reveal";

export default function CusomJobs() {
    return (
        <>
            <div className="hidden sm:block bg-[url('https://res.cloudinary.com/dqijwldax/image/upload/v1742233934/Julie/kat-horizontal_copy_xuxegj.jpg')] bg-cover bg-left h-[100vh] w-full overflow-hidden">
                <div className="grid grid-cols-2 gap-10 h-full">

                    <div></div>
                    <Reveal className="flex items-center" width='full' direction='left'>
                        <div className="flex-col h-full flex justify-center">
                            <div className="w-5/6 lg:w-4/5">
                                <h2 className="crimson-pro text-gray-300 text-[40px]">Bestillingskunst inspirert av din favoritt <div className="inline relative overflow-hidden"><FlipWords words={['karakter', 'Kjæledyr']} />.</div></h2>
                                <h2 className="crimson-pro text-gray-300 font-bold my-3">Bestillingsverk</h2>
                                <p className='karla text-gray-300/80 text-justify'>Har du en favorittkarakter eller et dyr du gjerne skulle sett vekket til liv på lerret? Kanskje et kjæledyr som betyr ekstra mye for deg – eller et kunstverk du falt for i nettbutikken, men som allerede er solgt? Nå kan du bestille et personlig kunstverk, skapt spesielt for deg og din visjon!</p>
                                <Link to="/about#custom"><button className="w-60 mt-10 bg-zinc-300 hover:bg-zinc-900 hover:text-zinc-100 text-zinc-900 hover:border-zinc-900 transition-all duration-300 font-bold rounded-sm hover:scale-110">Fortell mer</button></Link>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
            <div className="block sm:hidden bg-[url('https://res.cloudinary.com/dqijwldax/image/upload/v1742233984/Julie/kat-vertical-dakened_by0ec2.jpg')] bg-cover max-w-full bg-top h-[1200px] w-full overflow-hidden">
                <div className="grid grid-cols-1 gap-10 h-full">

                    <div></div>
                    <Reveal className="flex items-center" width='full' direction='top'>
                    <div className="flex-col h-full flex justify-end items-center">
                        <div className="w-5/6 mt-96">
                            <h2 className="crimson-pro text-gray-300">Bestillingskunst inspirert av din favoritt karakter eller Kjæledyr</h2>
                            <h2 className="crimson-pro text-gray-300 font-bold my-3">Bestillingsverk</h2>
                            <p className='karla text-gray-300/80 text-justify'>Har du en favorittkarakter eller et dyr du gjerne skulle sett vekket til liv på lerret? Kanskje et kjæledyr som betyr ekstra mye for deg – eller et kunstverk du falt for i nettbutikken, men som allerede er solgt? Nå kan du bestille et personlig kunstverk, skapt spesielt for deg og din visjon!</p>
                            <Link to="/about#custom"><button className="w-60 mt-10 bg-zinc-300 hover:bg-zinc-900 hover:text-zinc-100 text-zinc-900 hover:border-zinc-900 transition-all duration-300 font-bold rounded-sm hover:scale-110">Fortell mer</button></Link>

                        </div>
                    </div>
                    </Reveal>
                </div>
            </div>

        </>
    )
}

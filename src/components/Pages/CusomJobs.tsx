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
                                <h1 className="crimson-pro text-gray-300">Custom art inspired by your favourite <div className="relative overflow-hidden"><FlipWords words={['Character', 'Pet']} />.</div></h1>
                                <h2 className="crimson-pro text-gray-300 font-bold my-3">Commision work</h2>
                                <p className='karla text-gray-300/80 text-justify'>Do you have a favorite animal or character you'd love to see brought to life on canvas? Maybe a pet that holds a special place in your heart? Or you fell in love with an art piece in our shop, but it's already sold? You can now order your very own custom artwork, tailored to your vision!</p>
                                <Link to="/about#custom"><button className="w-60 mt-10 bg-zinc-300 hover:bg-zinc-900 hover:text-zinc-100 text-zinc-900 hover:border-zinc-900 transition-all duration-300 font-bold rounded-sm hover:scale-110">Tell me more</button></Link>
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
                            <h1 className="crimson-pro text-gray-300">Custom art inspired by your favourite Character or Pet.</h1>
                            <h2 className="crimson-pro text-gray-300 font-bold my-3">Commision work</h2>
                            <p className='karla text-gray-300/80 text-justify'>Do you have a favorite animal or character you'd love to see brought to life on canvas? Maybe a pet that holds a special place in your heart? Or you fell in love with an art piece in our shop, but it's already sold? You can now order your very own custom artwork, tailored to your vision!</p>
                            <Link to="/about#custom"><button className="w-60 mt-10 bg-zinc-300 hover:bg-zinc-900 hover:text-zinc-100 text-zinc-900 hover:border-zinc-900 transition-all duration-300 font-bold rounded-sm hover:scale-110">Tell me more</button></Link>

                        </div>
                    </div>
                    </Reveal>
                </div>
            </div>

        </>
    )
}

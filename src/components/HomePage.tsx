
import HeroSegment from "./HeroSegment";
import ArtPhilosophy from "./Pages/ArtPhilosophy";
import CusomJobs from "./Pages/CusomJobs";
import WhoAmI from "./WhoAmI";
// import Products from "./Pages/Products";


export default function HomePage() {

    return (
        <div className="flex flex-col grow items-center">
            <div className="flex flex-col w-full grow items-center ">
                {/* <img src="https://ssniper.sirv.com/Julie-Portfolio/julie.jpg" className="w-full min-h-60 object-cover" alt="header" /> */}
                <div className="w-full bg-blue-900 flex justify-center">
                    <HeroSegment />

                </div>
                <div className="mt-12 text-center crimson-pro flex flex-col items-center">
                    <h3 className="font-serif text-slate-800 text-2xl">“Art is not what you see, but what you make others see.” </h3>
                    <p className=" text-slate-500">Edgar Degas</p>
                </div>
                <WhoAmI />
                <CusomJobs />
                <ArtPhilosophy />
                {/* <Products /> */}
            </div>
        </div>
    )
}


import HeroSegment from "./HeroSegment";
import ArtPhilosophy from "./Pages/ArtPhilosophy";
import Connect from "./Pages/Connect";
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
                <WhoAmI />
                <CusomJobs />
                <ArtPhilosophy />
                <Connect />
               {/* <Products /> */}
            </div>
        </div>
    )
}

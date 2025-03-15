
import HeroSegment from "./HeroSegment";
import Products from "./Pages/Products";


export default function HomePage() {
   
    return (
        <div className="flex flex-col grow items-center ">
            <div className="flex flex-col w-full grow items-center ">
                {/* <img src="https://ssniper.sirv.com/Julie-Portfolio/julie.jpg" className="w-full min-h-60 object-cover" alt="header" /> */}
                <div className="w-full bg-blue-900 flex justify-center">
                    <HeroSegment />

                </div>
               <Products />
            </div>
        </div>
    )
}

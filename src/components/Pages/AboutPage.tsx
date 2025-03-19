import { useEffect } from "react";
import AboutSegment1 from "../AboutSegment1";
import { FlipWords } from "../ui/flip-words";
import AboutSegment2 from "./AboutSegment2";
import DescribeYourOrder from "./DescribeYourOrder";
import OrderSteps from "./OrderSteps";

export default function AboutPage() {
    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, []);
    return (
        <div>
            <div className="relative bg-gray-900 text-white text-center py-32">
                {/* Background and Text */}
                <h2 className="text-2xl font-semibold">Custom art inspired by your favourite <div className="relative overflow-hidden"><FlipWords words={['Characters', 'Pet', 'Historical_icons']} /></div></h2>
                <p className="uppercase text-sm tracking-wide text-gray-400">Commision Work</p>

                {/* Circular Image */}
                <div className="absolute left-1/2 -translate-x-1/2 bottom-0 -mb-12 w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <img src="https://res.cloudinary.com/dqijwldax/image/upload/v1742319455/Julie/circle-pic_fskksp.png" alt="Art Supplies" className="w-full h-full object-cover" />
                </div>
            </div>
            <div className="mt-24 text-center crimson-pro flex flex-col items-center">
                <h3 className="font-serif text-slate-800 text-2xl w-3/5">“A work of art is a world in itself, reflecting neither the artist nor the viewer, but a bridge between them.” </h3>
                <p className=" text-slate-500">André Malraux</p>
            </div>
            <AboutSegment1 />
            <AboutSegment2 />
            <OrderSteps />
            <DescribeYourOrder />
        </div>
    )
}

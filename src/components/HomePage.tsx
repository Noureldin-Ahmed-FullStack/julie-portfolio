
import { Helmet } from "react-helmet-async";
import HeroSegment from "./HeroSegment";
import ArtPhilosophy from "./Pages/ArtPhilosophy";
import CusomJobs from "./Pages/CusomJobs";
import WhoAmI from "./WhoAmI";
// import Products from "./Pages/Products";


export default function HomePage() {

    return (
        <div className="flex flex-col grow items-center">
            <Helmet>
                {/* <title>Hjem | Julie Ulfeng – Norsk Pastellkunstner</title> */}
                <title>Julie Ulfeng – Norsk Pastellkunstner</title>
                {/* Home | Julie Ulfeng – Norwegian Pastel Artist */}

                {/* <meta
                    name="description"
                    content="Velkommen til den offisielle nettsiden til Julie Ulfeng. Utforsk unike pastellkunstverk, lær mer om kunstneren og oppdag inspirasjon fra norsk kunst."
                /> */}
                <meta name="description"
                    content="Hei, jeg er Julie Ulfeng, en 23 år gammel norsk kunstner som spesialiserer meg på pastell. Arbeidet mitt kombinerer kunst, psykologi og personlige uttrykk." />

                {/* Welcome to the official website of Julie Ulfeng. Explore unique pastel artworks, learn more about the artist, and discover inspiration from Norwegian art. */}

                {/* <meta
                    property="og:title"
                    content="Hjem | Julie Ulfeng – Norsk Pastellkunstner"
                /> */}

                <meta property="og:title" content="Julie Ulfeng – Norsk Pastellkunstner" />
                {/* Home | Julie Ulfeng – Norwegian Pastel Artist */}
                <meta property="og:image:type" content="image/jpg" />
                <meta name="twitter:image" content="https://ssniper.sirv.com/Images/j2.jpg" />
                <meta property="og:image:width" content="745" />
                <meta property="og:image:height" content="1098" />
                <meta
                    property="og:description"
                    content="Besøk Julie Ulfengs hjemmeside og opplev hennes kunstneriske univers. Se vakre pastellmalerier og følg reisen hennes som kunstner."
                />
                {/* Visit Julie Ulfeng’s homepage and experience her artistic universe. See beautiful pastel paintings and follow her journey as an artist. */}

                <meta property="og:type" content="website" />
            </Helmet>

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

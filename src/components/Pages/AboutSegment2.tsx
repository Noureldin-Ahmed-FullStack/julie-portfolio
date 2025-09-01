import CenteredPage from "../CenteredPage";
import Reveal from "../ui/Reveal";


export default function AboutSegment2() {
    return (
        <CenteredPage>
            <div className='grid sm:grid-cols-2 gap-8 w-5/6 md:w-5/6 my-24'>
                <Reveal className="flex items-center" width='full' direction='right'>
                    <div className=' flex-col flex justify-center'>
                        <div className='w-fit'>
                            <a href="https://www.flaticon.com/free-icons/flower" title="flower icons"><img className='w-9 h-9' src="https://res.cloudinary.com/dqijwldax/image/upload/v1742242524/Julie/flower2_oz48wq.png" alt="www.flaticon.com" /></a>
                            <h1 className='crimson-pro text-slate-800'>Tegneprosess</h1>
                            <div className='bg-slate-500 h-px w-4/5 my-5'></div>
                        </div>

                        <p className="text-justify">
                            Hvert kunstverk er unikt, men dersom et bilde du liker allerede er solgt, kan jeg lage en ny versjon spesielt for deg.
                            <br />
                           For å komme i gang kan du kontakte meg via Instagram, TikTok-direktemelding eller e-post. Når vi har fått kontakt, avtaler vi detaljer og setter opp en tidsplan for arbeidet.
                            <br />
                            For best mulig resultat er det fint om du gir en grundig beskrivelse av din idé – jo mer detaljert, desto bedre! Referansebilder i god kvalitet hjelper meg også med å skape et verk som svarer til dine ønsker.
                            <br />
                           Før jeg starter, kreves et forskudd på 50 % av totalprisen. Ved behov kan jeg lage en grovskisse for å vise mine tanker, og jeg kan sende oppdateringer underveis om ønskelig.
                            <br />
                            Når kunstverket er ferdig, kan du hente det hos meg eller få det sendt direkte hjem til deg.
                            <br />
                            Har du et kjæledyr, et favorittidol, et familiemedlem eller en karakter som du gjerne vil forevige i kunst? Da kan jeg skape et personlig verk bare for deg. Klikk nedenfor for mer informasjon
                        </p>
                    </div>
                </Reveal>
                <Reveal width='full' direction='left'>
                    <div className='flex justify-center items-center'>
                        <img className='overflow-hidden rounded-3xl w-5/6 md:w-5/6 lg:w-4/6 xl:w-4/6 2xl:w-3/6 transition-all duration-1000' src="https://res.cloudinary.com/dqijwldax/image/upload/v1742333281/Julie/image_mjk5jb.jpg" alt="" />
                    </div>
                </Reveal>
            </div>
        </CenteredPage>
    )
}

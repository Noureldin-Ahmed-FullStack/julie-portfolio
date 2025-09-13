import CenteredPage from "../CenteredPage";
import Reveal from "../ui/Reveal";


export default function ArtPhilosophy() {
    return (
        <CenteredPage>
            <div className='grid sm:grid-cols-2 gap-8 w-5/6 md:w-5/6 my-24'>
                <Reveal className="flex items-center" width='full' direction='right'>
                    <div className=' flex-col flex justify-center'>
                        <div className='w-fit'>
                            <a href="https://www.flaticon.com/free-icons/flower" title="flower icons"><img className='w-9 h-9' src="https://res.cloudinary.com/dqijwldax/image/upload/v1742242524/Julie/flower2_oz48wq.png" alt="www.flaticon.com" /></a>
                            <h2 className='crimson-pro text-slate-800 text-[40px]'>Min filosofi</h2>
                            <div className='bg-slate-500 h-px w-4/5 my-5'></div>
                        </div>
                        <p className='karla text-justify text-slate-800/80'>Tegningene mine søker å fortelle to sammenvevde historier: min tolkning av motivets personlighet og bakgrunn, og sporene som tiden har satt i deres ytre. Jeg kan ikke avsløre sjelen deres – men jeg kan formidle hvem jeg opplever at de er. Enten det er et menneske, et dyr eller en fiktiv karakter, bærer hvert motiv på en fortelling. Jeg forsøker å gi liv til både fortiden og essensen deres, styrt av intuisjon og bevisste kunstneriske valg.

I denne prosessen møtes mitt kunstneriske uttrykk og motivets indre verden – og smelter sammen i en visuell dialog. Målet er ikke bare å skape et vakkert bilde, men å viske ut grenser og åpne for et snev av magi i hvert verk.</p>
                    </div>
                </Reveal>
                <Reveal width='full' direction='left'>
                    <div className='flex justify-center items-center'>
                        <img className='overflow-hidden rounded-3xl w-5/6 md:w-5/6 lg:w-4/6 xl:w-4/6 2xl:w-3/6 transition-all duration-1000' src="https://res.cloudinary.com/dqijwldax/image/upload/v1742239612/Julie/selfie_gqvsla.jpg" alt="" />
                    </div>
                </Reveal>
            </div>
        </CenteredPage>
    )
}

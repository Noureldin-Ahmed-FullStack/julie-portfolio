import Grid from '@mui/material/Grid2';
import { FlipWords } from './ui/flip-words';
import Reveal from './ui/Reveal';
// import SocialsSegment from './ui/SocialsSegment';

export default function HeroSegment() {
    const words = ["Kunst", "psykologi", "sjeleliv", "Personligheter", "Indre_livsverdener"];
    return (
        <Grid className="justify-between w-4/5 roboto-slab text-white pt-9 sm:pt-24 md:pt-9 transition-all duration-500" container>
            <Grid className="justify-center flex-col flex font-medium text-center sm:text-start mb-5 sm:mb-0" size={{ xs: 12, sm: 6 }} order={{ xs: 1, sm: 0 }}>
                <h1 className='mb-5 mt-5 sm:mt-0 tracking-tight  !text-[24px] sm:!text-[25px] md:!text-[30px] lg:!text-[48px]'>Hi I'm <span className='border-b-2 text-cream border-cream '>Julie-Fredrike,</span></h1>
                {/* <p>I make <FlipWords className='text-cream p-0' words={words} />Art works</p> */}
                <div className='overflow-hidden w-full'>Hei, jeg er Julie, en 23 år gammel norsk kunstner som spesialiserer meg på pastell. Arbeidet mitt forener <div className="relative overflow-hidden"><FlipWords className='text-cream p-0' words={words} />.</div></div>
            </Grid>
            <Grid className="justify-center items-end flex" size={{ xs: 12, sm: 6 }}>
                <Reveal direction='left' width='full'>
                    <div className="relative max-w-[435px]">
                        <img className='object-contain' src="https://res.cloudinary.com/dqijwldax/image/upload/v1741989336/Julie/weirdo-woman_udoqef.png" alt="hero" />
                        {/* <div className='bg-slate-700 w-full absolute bottom-0 left-0  bg-opacity-50 backdrop-blur-2xl text-white p-1 rounded-b-lg'>
                        <SocialsSegment />

                    </div> */}
                    </div>
                </Reveal>
            </Grid>
        </Grid>
    )
}

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
                            <h1 className='crimson-pro text-slate-800'>My Philosophy</h1>
                            <div className='bg-slate-500 h-px w-4/5 my-5'></div>
                        </div>
                        <p className='karla text-justify text-slate-800/80'>My drawings seek to tell two intertwined stories: my interpretation of the subject’s history and personality, and the imprints of time etched into their appearance. I cannot reveal their soul, but I can express who I believe they are. Whether human, animal, or fictional, each subject carries a narrative. I strive to bring their past and essence to life, guided by both intuition and deliberate artistic choices. In this process, my own artistic spirit meets theirs, merging on paper in a visual dialogue. The goal is not merely to create a beautiful image, but to dissolve boundaries and invite a sense of magic into the work.</p>
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

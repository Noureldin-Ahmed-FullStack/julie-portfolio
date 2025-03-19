import CenteredPage from './CenteredPage'
import Reveal from './ui/Reveal'

export default function WhoAmI() {
    return (
        <CenteredPage>
            <div className='grid sm:grid-cols-2 gap-8 w-5/6 md:w-5/6 lg:w-4/6 xl:w-4/6 2xl:w-3/6 my-12'>
                <Reveal width='full' direction='right'>
                    <div className='flex justify-center items-center'>
                        <img className='overflow-hidden rounded-3xl w-3/5 sm:w-full lg:w-4/5 transition-all duration-1000' src="https://res.cloudinary.com/dqijwldax/image/upload/v1742225489/Julie/julie-selfie_elfj6e.jpg" alt="" />
                    </div>
                </Reveal>

                <Reveal className="flex items-center" width='full' direction='left'>
                <div className=' flex-col flex justify-center'>
                    <div className='w-fit'>
                        <a href="https://www.flaticon.com/free-icons/flower" title="flower icons"><img className='w-9 h-9' src="https://res.cloudinary.com/dqijwldax/image/upload/v1742226577/Julie/flower_mu3ne0.png" alt="www.flaticon.com" /></a>
                        <h1 className='crimson-pro text-slate-800'>Julie-Fredrike</h1>
                        <div className='bg-slate-500 h-px w-4/5 my-5'></div>
                    </div>
                    <p className='karla text-slate-800/80 text-justify'>Hi, I’m Julie – a 23-year-old Norwegian artist with a lifelong passion for drawing. I love experimenting with new mediums, and right now I specialize in pastels. My art is deeply rooted in my fascination with both art and psychology, as I delve into souls, personality, and inner worlds. My intuitive process is an interpretation of the subject—a blend of description and personal insight. I often add details I find fitting, whether they’re objects from the subject’s era or elements that resonate with their gaze, but the focus always remains on the person drawn. I strive to tell compelling stories through my art, often complemented by visual poetry.</p>
                </div>
                </Reveal>
            </div>
        </CenteredPage>
    )
}

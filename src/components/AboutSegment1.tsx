import CenteredPage from './CenteredPage'
import Reveal from './ui/Reveal'

export default function AboutSegment1() {
    return (
        <CenteredPage>
            <div className='grid sm:grid-cols-2 gap-8 w-5/6 md:w-5/6 lg:w-4/6 xl:w-4/6 2xl:w-3/6 my-12'>
                <Reveal width='full' direction='right'>
                    <div className='flex justify-center items-center'>
                        <img className='overflow-hidden rounded-3xl w-3/5 sm:w-full lg:w-4/5 transition-all duration-1000' src="https://res.cloudinary.com/dqijwldax/image/upload/v1742326231/Julie/IMG_4582_tqbjj0.jpg" alt="" />
                    </div>
                </Reveal>

                <Reveal className="flex items-center" width='full' direction='left'>
                <div className=' flex-col flex justify-center'>
                    <div className='w-fit'>
                        <a href="https://www.flaticon.com/free-icons/flower" title="flower icons"><img className='w-9 h-9' src="https://res.cloudinary.com/dqijwldax/image/upload/v1742226577/Julie/flower_mu3ne0.png" alt="www.flaticon.com" /></a>
                        <h1 className='crimson-pro text-slate-800'>More about me</h1>
                        <div className='bg-slate-500 h-px w-4/5 my-5'></div>
                    </div>
                    <p className='karla text-slate-800/80 text-justify'>I had my first solo exhibition in May 2024 at Galleriet Vinbar in Gamlebyen, where I showcased my unique interpretations of humans, animals, and fictional characters. My work explored their inner life worlds and the way different viewers perceive the same image—what one sees as arrogance, another might see as confidence. Therefore numerous versions of us exist and makes capturing the essence of a being challenging, as it inevitably highlights certain fragments of their identity over others.</p>
                </div>
                </Reveal>
            </div>
        </CenteredPage>
    )
}

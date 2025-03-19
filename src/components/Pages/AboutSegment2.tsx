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
                            <h1 className='crimson-pro text-slate-800'>Production Process</h1>
                            <div className='bg-slate-500 h-px w-4/5 my-5'></div>
                        </div>

                        <p className="text-justify">
                            Every artwork is unique, but if a piece you love has already been sold, I can recreate it just for you.
                            <br />
                            To begin, reach out to me via Instagram, TikTok direct messages, or email. Once we establish contact, we will discuss the details and set a timeline for production.
                            <br />
                            For the best results, please provide a detailed description of your vision—the more details, the better! High-quality reference images will also help ensure the best possible outcome.
                            <br />
                            Before I start working, a 50% deposit of the total price is required. If needed, I will create a rough sketch to outline my ideas, and I can share progress updates upon request.
                            <br />
                            Once the artwork is complete, you can pick it up from my home address or have it shipped directly to you.
                            Personalized Artwork
                            <br />
                            Do you have a beloved pet, favorite idol, cherished family member, or comfort character you’d love captured in art? Click below to learn more!
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

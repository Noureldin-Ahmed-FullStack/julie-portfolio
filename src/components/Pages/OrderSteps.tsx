import Grid from '@mui/material/Grid2';
import { Meteors } from '../ui/meteors';
import CenteredPage from '../CenteredPage';
interface StepItemProps {
    number: number;
    title: string;
    text: string;
}
const data = [
    {
        title: 'Getting started',
        text: 'To begin, send me a direct message on TikTok, Instagram, or email (Julie_lazuli@hotmail.com) with your request; Or you can click the start a project Button below. Please include as many details as possible about your vision. It should include pictures of the desired pet, human or character. The better quality of the images, the more precise details in the final product will be.'
    },
    {
        title: 'Shaping the Vision',
        text: 'After reviewing your request, I’ll ask follow-up questions and share my ideas. If needed, I may create a small sketch to better communicate the concept. You can also choose to give me creative freedom for a more unique surprise. If you’re unsure or need inspiration, click here.'
    },
    {
        title: 'Payment',
        text: 'Once we’ve agreed on the subject, I will send an invoice for a 50% deposit. This confirms your order, and I will begin the artwork after payment is received. The deposit is non-refundable, and if the final piece is declined, ownership of the artwork remains with me.'
    },
    {
        title: 'The Drawing Process',
        text: 'During the creation process, I will send progress updates so you can provide feedback. Adjustments can be made where possible, but please note that pastels cannot be erased. I will do my best to accommodate changes while ensuring the best possible result.'
    },
    {
        title: 'Final Approval',
        text: 'Once the artwork is complete, I will share images of the final result. If you’re satisfied, I will send an invoice for the remaining 50% balance.'
    },
    {
        title: 'Delivery',
        text: 'After receiving full payment, the artwork will be shipped within two business days. It will also contain a little personal surprise.'
    },
]
function StepItem({ text, title, number }: StepItemProps) {
    return (
        <div className="w-full flex flex-col">
            <div className="grow w-full relative">
                <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] rounded-full blur-3xl" />
                <Grid container spacing={3} className="relative shadow-xl text-slate-700 myLightPost border border-gray-800 justify-between items-center px-4 py-4 h-full overflow-hidden rounded-2xl">
                    <Grid size={2} className="">
                        <div className='w-full aspect-square flex justify-between items-center bg-zinc-400/35 overflow-hidden rounded-full'><p className='text-center text-3xl w-full'>{number}</p></div>
                    </Grid>
                    <Grid size={10} className="crimson-pro">
                        <h1 className="font-bold text-xl w-full relative z-5 flex justify-between">
                            {title}
                        </h1>
                        <p className="text-xl w-full relative z-5 flex justify-between">
                            {text}
                        </p>
                    </Grid>
                    {/* Meaty part - Meteor effect */}
                    <Meteors number={10} />
                </Grid>
            </div>
        </div>
    )
}

export default function OrderSteps() {
    return (

        <CenteredPage>
            <h1 id='custom' className='crimson-pro text-slate-800 text-center'>How to Order an Art Piece</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 w-5/6 md:w-5/6 lg:w-5/6 xl:w-4/6 2xl:w-4/6 my-12'>
                {data.map((item,index)=>(
                    <StepItem key={index} title={item.title} number={index+1} text={item.text} />
                ))}
            </div>
        </CenteredPage>
    )
}

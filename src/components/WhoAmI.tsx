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
                    <p className='karla text-slate-800/80 text-justify'>Hei, jeg er Julie – en 23 år gammel norsk kunstner med en livslang lidenskap for tegning. Jeg elsker å utforske nye uttrykksformer, og jobber for tiden hovedsakelig med pastell. Kunsten min er nært knyttet til min interesse for både kunst og psykologi, og jeg lar meg inspirere av sjeler, personligheter og indre verdener. Arbeidsprosessen min er intuitiv og personlig – en tolkning av motivet som kombinerer det observerbare med egne innsikter. Jeg tilfører ofte detaljer som jeg føler hører hjemme i bildet, enten det er objekter fra personens tidsepoke eller visuelle elementer som gjenspeiler blikket deres. Likevel er fokuset alltid på mennesket jeg portretterer. Jeg ønsker å formidle sterke, visuelle fortellinger gjennom kunsten min.</p>
                </div>
                </Reveal>
            </div>
        </CenteredPage>
    )
}

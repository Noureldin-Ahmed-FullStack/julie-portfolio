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
        title: 'Kom i gang',
        text: 'For å starte, send meg en direktemelding på TikTok, Instagram eller en e-post til Julie_lazuli@hotmail.com med forespørselen din. Du kan også trykke på Start et prosjekt-knappen nedenfor. Vennligst legg ved så mange detaljer som mulig om visjonen din. Inkluder gjerne bilder av kjæledyret, personen eller karakteren du ønsker portrettert. Jo bedre bildekvalitet, desto mer presise blir detaljene i det ferdige kunstverket.'
    },
    {
        title: 'Forming av visjonen',
        text: 'Etter å ha sett gjennom forespørselen din, vil jeg stille oppfølgingsspørsmål og dele mine idéer. Ved behov kan jeg lage en liten skisse for å tydeliggjøre konseptet. Du kan også velge å gi meg kreativ frihet – da får du et mer unikt og overraskende resultat.Er du usikker eller trenger inspirasjon, kan du klikke her.'
    },
    {
        title: 'Betaling',
        text: 'Når vi har blitt enige om motivet, sender jeg en faktura på et forskudd på 50 %. Dette bekrefter bestillingen din, og jeg begynner arbeidet så snart betalingen er mottatt. Forskuddet refunderes ikke. Dersom det ferdige verket ikke ønskes, forblir eierskapet til kunstverket hos meg.'
    },
    {
        title: 'Tegneprosessen',
        text: 'Under arbeidet vil jeg sende deg oppdateringer slik at du kan gi tilbakemeldinger underveis. Justeringer kan gjøres der det er mulig, men merk at pastell ikke kan viskes ut. Jeg vil likevel gjøre mitt beste for å tilpasse endringer og samtidig sikre et best mulig resultat.'
    },
    {
        title: 'Ferdigstillelse',
        text: 'Når kunstverket er ferdig, sender jeg bilder av det endelige resultatet. Hvis du er fornøyd, sender jeg en faktura på de resterende 50 %.'
    },
    {
        title: 'Levering',
        text: 'Når full betaling er mottatt, sendes kunstverket innen to virkedager. Du kan også velge å hente det hos meg, eller vi kan avtale et hentested som passer. Pakken vil i tillegg inneholde en liten personlig overraskelse.'
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
            <h1 id='custom' className='crimson-pro text-slate-800 text-center'>Hvordan bestille kunstverk</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 w-5/6 md:w-5/6 lg:w-5/6 xl:w-4/6 2xl:w-4/6 my-12'>
                {data.map((item,index)=>(
                    <StepItem key={index} title={item.title} number={index+1} text={item.text} />
                ))}
            </div>
        </CenteredPage>
    )
}

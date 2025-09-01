// import { Link } from 'react-router-dom';
import CenteredPage from '../CenteredPage';
import AddArtRequestButton from './AddArtRequestButton';

export default function DescribeYourOrder() {
    return (

        <CenteredPage>
            <div className='crimson-pro text-center w-full my-6 bg-zinc-300/40 py-14'>
                <div className='text-center max-w-lg mx-auto px-8'>
                    <h1 className=' text-slate-800 text-center my-4 text-4xl'>Hvordan beskrive din bestilling</h1>
                    <p className=' text-slate-600 text-xl my-4'>En tydelig beskrivelse hjelper meg å gjøre visjonen din levende. Her er noen viktige detaljer du bør inkludere:</p>

                    <h2 className='text-2xl text-slate-800'>1. Størrelse på kunstverk</h2>
                    <p className=' text-slate-600 text-xl my-4 mt-1'>Velg mellom 50 x 70 cm eller 70 x 100 cm.</p>

                    <h2 className='text-2xl text-slate-800'>2. Motiv og elementer</h2>
                    <p className=' text-slate-600 text-xl my-4 mt-1'>Beskriv det overordnede temaet eller motivet- dette kan inkludere fargepalett, plagg, objekter eller betydningsfulle detaljer. Hvis det er noe som er ønskelig å unngå (eks. spesifikke farger som ikke harmonerer med dekorasjon i hjemmet), inkluder dette også.</p>

                    <h2 className='text-2xl text-slate-800'>3. Stemning</h2>
                    <p className=' text-slate-600 text-xl my-4 mt-1'>Hva slags stemning bør kunstverket formidle? Eksempler: En varm, oppløftende energi; Et drømmende skylandskap; En dyp, stjerneklar nattstemning.</p>


                    <h2 className='text-2xl text-slate-800'>4. Referansebilder</h2>
                    <p className=' text-slate-600 text-xl my-4 mt-1'>Del gjerne bilder eller visuelle referanser som fanger essensen av det du ser for deg.</p>


                    <p className=' text-slate-600 text-xl my-12'>Du kan også bla gjennom mine tidligere kunstverk og be om noe som er inspirert av- eller ligner på et tidligere verk.</p>
                    <h1 className=' text-slate-800 text-center my-4 mt-1 text-4xl'>Prisliste - Soft Pastell Kunstverk</h1>
                    <div className=' text-slate-600 text-xl my-4 mt-1'>
                        <h3 className='font-extrabold !text-2xl'>25 x 35 cm</h3>
                        <ul>
                            <li>
                                2 700 kr (standard ramme)
                            </li>
                            <li>
                                3 500 kr (profesjonell innramming med kunstglass)
                            </li>
                        </ul>
                        <h3 className='font-extrabold !text-2xl'>50 x 70 cm</h3>
                        <ul>
                            <li>
                               4 900 kr (standard ramme)
                            </li>
                            <li>
                                6 900 kr (profesjonell innramming med kunstglass)
                            </li>
                        </ul>
                        <h3 className='font-extrabold !text-2xl'>70 x 100 cm</h3>
                        <ul>
                            <li>
                                7 600 kr (standard ramme)
                            </li>
                            <li>
                                11 000 kr (profesjonell innramming med kunstglass)
                            </li>
                        </ul>
                        <hr className='mt-12 bg-slate-600 h-[2px] opacity-85'/>
                        <p className='text-slate-600'>+ Frakt kommer i tillegg, med mindre vi avtaler et møtepunkt for overlevering.</p>
                    </div>
                    <AddArtRequestButton />

                </div>
                {/* <div className='!pt-4'>
                <Link to="/requests">Check out your Art Requests.</Link>
                </div> */}
            </div>
        </CenteredPage>
    )
}

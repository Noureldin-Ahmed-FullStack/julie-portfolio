// import { Link } from 'react-router-dom';
import CenteredPage from '../CenteredPage';
import AddArtRequestButton from './AddArtRequestButton';

export default function DescribeYourOrder() {
    return (

        <CenteredPage>
            <div className='crimson-pro text-center w-full my-6 bg-zinc-300/40 py-14'>
                <div className='text-center max-w-lg mx-auto px-8'>
                    <h1 className=' text-slate-800 text-center my-4 text-4xl'>How to Describe your order</h1>
                    <p className=' text-slate-600 text-xl my-4'>Providing a clear description helps me bring your vision to life. Here are some key details to include:</p>

                    <h2 className='text-2xl text-slate-800'>1. Artwork Size</h2>
                    <p className=' text-slate-600 text-xl my-4 mt-1'>Choose between 50 × 70 cm or 70 × 100 cm.</p>

                    <h2 className='text-2xl text-slate-800'>2. Subject & Elements</h2>
                    <p className=' text-slate-600 text-xl my-4 mt-1'>Describe the overall theme or subject of the piece—this could include color schemes, clothing, specific objects, or meaningful details. If there’s anything you’d like to avoid (e.g., certain colors that clash with your home decor), please mention that as well.</p>

                    <h2 className='text-2xl text-slate-800'>3. Mood & Atmosphere</h2>
                    <p className=' text-slate-600 text-xl my-4 mt-1'>What kind of feeling should the artwork convey? Examples: A warm, uplifting energy; A dreamy cloudscape; A deep, starry night ambiance</p>


                    <h2 className='text-2xl text-slate-800'>4. Reference Images</h2>
                    <p className=' text-slate-600 text-xl my-4 mt-1'>Feel free to share photos or visual references that capture the essence of what you’re looking for.</p>


                    <p className=' text-slate-600 text-xl my-12'>You can also browse my previous artworks and request something inspired by or similar to a past piece.</p>
                    <h1 className=' text-slate-800 text-center my-4 mt-1 text-4xl'>Price List – Soft Pastel Artworks</h1>
                    <ul className=' text-slate-600 text-xl my-4 mt-1'>
                        <li>50 × 70 cm: $600 + $50 shipping</li>
                        <li>70 × 100 cm: $1000+ $70 shipping</li>
                    </ul>
                    <AddArtRequestButton />

                </div>
                {/* <div className='!pt-4'>
                <Link to="/requests">Check out your Art Requests.</Link>
                </div> */}
            </div>
        </CenteredPage>
    )
}

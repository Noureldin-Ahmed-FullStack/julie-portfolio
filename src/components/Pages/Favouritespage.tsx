// import { useFavs } from "../../hooks/FetchFields";
import CenteredPage from "../CenteredPage";
import KeyboardTabIcon from '@mui/icons-material/KeyboardTab';
import { Link } from "react-router-dom";
import { useUserFavsContext } from "../../context/UserContext";
import { ArtPieceType } from "../../types";
import LoadingPage from "./LoadingPage";
import Grid from '@mui/material/Grid2';
import ArtItemMUI from "../ui/ArtItemMUI";
import { DarkDiv } from "../ui/DarkDiv";
interface FavouritesPageProps {
    className?: string; // Optional className prop
}
export default function Favouritespage({ className }: FavouritesPageProps) {
    // const { userData } = useUserContext()

    const { favsList, favsLoading } = useUserFavsContext()
    // console.log(data?.items)
    if (favsLoading) {
        return (
            <LoadingPage />
        )
    }
    return (

        <div className="flex flex-col justify-center items-center playwrite grow">
            <div className="flex items-center mt-12 bg-blue-800">
            </div>
            <Grid container className="items-center w-3/5">
                <Grid size="grow" className="justify-center">
                    <a className="flex justify-center" href="https://www.flaticon.com/free-icons/flower" title="flower icons"><img className='!w-9 !h-9' src="https://res.cloudinary.com/dqijwldax/image/upload/v1742256773/Julie/succulent_jegahu.png" alt="www.flaticon.com" /></a>
                </Grid>
                <Grid size={6}>
                    <h1 className="text-center mx-5">Your Favourited Artworks</h1>
                </Grid>
                <Grid size="grow" className="justify-center">
                    <a className="flex justify-center" href="https://www.flaticon.com/free-icons/flower" title="flower icons"><img className='w-9 h-9 flip-x' src="https://res.cloudinary.com/dqijwldax/image/upload/v1742256773/Julie/succulent_jegahu.png" alt="www.flaticon.com" /></a>
                </Grid>
            </Grid>
            <DarkDiv className="mt-12 container">
                <div className={"flex mx-auto grow justify-center md:pt-4 maxWidth75vw " + className}>
                    {favsList?.length != 0 ? (
                        <div className="columns-2 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                            {favsList.map((item: ArtPieceType) => (
                                <ArtItemMUI key={item._id} _id={item._id} type={item.type} className="my-2" Name={item.title} Icon={item.coverImage} note={item.note} price={1000} status={item.status}/>
                            ))}
                        </div>
                    ) : (
                        <CenteredPage className="">
                            <h4 className="text-6xl mb-5 text-center text-blue-700 dark:text-zinc-200 font-medium agu-display">Favourites are empty</h4>
                            <Link to="/"><p className="underline underline-offset-4 text-3xl mb-5 text-center text-blue-600 text-opacity-70 font-medium">go back home<KeyboardTabIcon /></p></Link>
                        </CenteredPage>
                    )}

                </div>
            </DarkDiv>
        </div>
    )
}

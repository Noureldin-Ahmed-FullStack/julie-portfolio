import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { IconButton, Tooltip } from "@mui/material";
import Grid from '@mui/material/Grid2';
import { useUserContext, useUserFavsContext } from "../../context/UserContext";
import StarBorderIcon from '@mui/icons-material/StarBorder';
const BaseURL = import.meta.env.VITE_BASE_URL;
import axios from 'axios';
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
// import { useAppContext } from "../../context/AppContext";
import { Meteors } from "./meteors";
interface ratings {
    userId: string
    rating: number, // e.g., 1 to 5
}
interface props {
    _id: string,
    Name: string,
    type: string,
    Icon: string,
    price: number,
    note: string,
    ratings?: ratings[],
    className?: string
}
export default function ArtItemMUI(props: props) {
    const { Icon, Name, note, _id, type, ratings } = props
    const { userData } = useUserContext();
    const { favsList } = useUserFavsContext();
    const queryClient = useQueryClient();
    const favContains = (itemID: string) => {
        const item = favsList.find(item => item._id === itemID);
        if (item) {
            return true
        } else {
            return false
        }
    }
    const addFav = async (user_ID: string | undefined, Item_ID: string) => {
        if (user_ID != null || user_ID != undefined) {
            const res = await axios.put(BaseURL + "addFav/" + user_ID, { itemID: Item_ID });
            console.log(res);
            return queryClient.refetchQueries({ queryKey: ['favourites/' + user_ID] });
        } else {
            toast.error("Sign in first!", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }
    const removeFav = async (user_ID: string | undefined, Item_ID: string) => {
        if (user_ID != null || user_ID != undefined) {
            const res = await axios.put(BaseURL + "removeFav/" + user_ID, { itemID: Item_ID });
            console.log(res);
            return queryClient.refetchQueries({ queryKey: ['favourites/' + user_ID] });
        } else {
            toast.error("Sign in first!", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }
   
        return (
            <div className="w-full flex flex-col">
                <div className="grow w-full relative">
                    <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] rounded-full blur-3xl" />
                    <Grid direction={"column"} container className="relative shadow-xl text-slate-700 myLightPost border border-gray-800 justify-between items-center px-4 py-4 h-full overflow-hidden rounded-2xl">
                        <Grid sx={{ width: "100%" }} size={3}>
                            <h1 className="font-bold text-xl w-full relative z-50 flex justify-between">
                                {Name}
                                {favContains(_id) ? <Tooltip title="Remove from Favourites" followCursor><IconButton onClick={() => removeFav(userData?._id, _id)} className='!text-red-700 dark:!text-inherit' sx={{ marginRight: "-10px" }} aria-label="add to Favourites"><FavoriteIcon className="cursor-pointer" /></IconButton></Tooltip> : <Tooltip title="Add to Favourites" followCursor><IconButton className="" onClick={() => addFav(userData?._id, _id)} sx={{ marginRight: "-10px" }} aria-label="add to Favourites"><FavoriteBorderIcon className="cursor-pointer" /></IconButton></Tooltip>}
                            </h1>
                            <div className="flex w-full justify-between text-neutral-500 text-sm mb-2 dark:text-neutral-300" >
                                <div>{type}</div>
                                <div className="flex items-end">4.6<StarBorderIcon />{ratings?.length}</div>

                            </div>
                        </Grid>
                        <Grid sx={{ width: "100%" }} size={6}>
                            <div className="flex justify-center w-full">
                                <img src={Icon} className="" alt="" />
                            </div>
                        </Grid>
                        <Grid sx={{ width: "100%" }} size={3}>
                            <p className="font-normal text-base text-slate-500 mb-4 relative z-50 line-clamp-3">
                                {note}
                            </p>

                            <div className="w-full flex justify-end">
                                <Link to={"/artpiece/" + _id} className="border px-4 py-1 rounded-lg border-gray-500 text-slate-700">
                                    Explore
                                </Link>
                            </div>


                        </Grid>
                        {/* Meaty part - Meteor effect */}
                        <Meteors number={10} />
                    </Grid>
                </div>
            </div>
        )
    }

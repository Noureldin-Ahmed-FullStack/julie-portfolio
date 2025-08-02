import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { IconButton, Tooltip } from "@mui/material";
import { useUserContext, useUserFavsContext } from "../../context/UserContext";
const BaseURL = import.meta.env.VITE_BASE_URL;
import axios from 'axios';
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
// import { useAppContext } from "../../context/AppContext";

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
    status: string,
    ratings?: ratings[],
    className?: string
}
export default function ArtItemMUI(props: props) {
    const { Icon, Name, note, _id, type, status, price } = props
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
        <div className="w-full max-w-sm rounded-lg overflow-hidden shadow-md cursor-pointer mx-auto">
            <div className="relative group">
                <img
                    src={Icon}
                    alt="Painting"
                    loading='lazy'
                    className="w-full object-cover min-h-64"
                />

                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:pb-8 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-between p-4">
                    {status == 'sold' && <div className='bg-slate-200 text-zinc-900 absolute left-0 top-12 px-5 py-2 rounded-e'><p className='crimson-pro text-xl capitalize'>sold</p></div>}
                    <div className='w-full flex justify-end '>
                        {favContains(_id) ? <Tooltip title="Remove from Favourites" followCursor>
                            <IconButton onClick={() => removeFav(userData?._id, _id)} className='!text-red-700 dark:!text-inherit' sx={{ marginRight: "-10px" }} aria-label="add to Favourites">
                                <FavoriteIcon className="cursor-pointer" /></IconButton></Tooltip> : <Tooltip title="Add to Favourites" followCursor>
                            <IconButton className="!text-white" onClick={() => addFav(userData?._id, _id)} sx={{ marginRight: "-10px" }} aria-label="add to Favourites"><FavoriteBorderIcon className="cursor-pointer" /></IconButton></Tooltip>}
                    </div>
                    <div>
                        <h2 className="text-white text-md sm:text-2xl font-semibold">{Name}</h2>
                        <p className="text-gray-300 text-sm line-clamp-2">{type}</p>
                        <p className="text-gray-300 text-sm line-clamp-2">Pris: Kr {price}-</p>
                        <p className="text-gray-300 text-sm line-clamp-2">{note}</p>
                        <Link to={"/artpiece/" + _id} className="!w-full block rounded-md mt-5 hover:text-black bg-white py-2 px-4 text-center text-sm text-slate-800 transition-all shadow-md hover:shadow-lg focus:bg-zinc-200 focus:shadow-none active:bg-zinc-200 hover:bg-zinc-200 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                            Explore
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
}

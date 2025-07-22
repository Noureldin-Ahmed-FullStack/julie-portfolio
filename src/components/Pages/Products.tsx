import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { DarkDiv } from '../ui/DarkDiv';
import { ArtPieceType } from '../../types';
import { useEffect, useState } from "react";
import LoadingPage from "./LoadingPage";
import Grid from '@mui/material/Grid2';
import { useArt } from "../../hooks/FetchArt";
import ArtItemMUI from "../ui/ArtItemMUI";
import ErrorPage from "./ErrorPage";
// import MasonryGallery from "./MasionaryComponent";

export default function Products() {
    const [artType, setArtType] = useState("undefined");
    // const [search, setSearch] = useState('');
    // const handleArtTypeChange = (event: SelectChangeEvent) => {
    //     setArtType(event.target.value as string);
    // };

    const handleChange = (
        _event: React.MouseEvent<HTMLElement>,
        newAlignment: string,
    ) => {
        setArtType(newAlignment);
    };

    // const [ArtTitle, setArtTitle] = useState("undefined")
    // const searchFunc = (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //     const target = e.target as HTMLFormElement;
    //     const titleValue = (target.elements[0] as HTMLInputElement).value;
    //     const category = (target.elements[2] as HTMLInputElement).value;
    //     console.log(titleValue, category);

    //     setArtTitle(titleValue)

    // };
    const { data, isLoading, refetch, isError } = useArt(artType)

    // 🔄 Automatically refetch when ArtTitle or artType changes
    useEffect(() => {
        console.log(artType, data);

        refetch();
    }, [artType, refetch]);
    console.log(data)
    if (isError) {
        return (
            <ErrorPage />
        )
    }
    if (isLoading) {
        return (
            <LoadingPage />
        )
    }
    return (
        <>

            <div className="flex flex-col justify-center items-center playwrite w-full">
                <div className="grid grid-cols-10 gap-4 px-8 mb-8">
                    <div className="col-span-2">
                        <a className="flex" href="https://www.flaticon.com/free-icons/flower" title="flower icons"><img className='!w-9 !h-9' src="https://res.cloudinary.com/dqijwldax/image/upload/v1742256773/Julie/succulent_jegahu.png" alt="www.flaticon.com" /></a>
                    </div>
                    <div className="col-span-6">
                        <h1 className="text-center text-3xl mx-5">Gallery</h1>
                    </div>
                    <div className="col-span-2">
                        <a className="flex justify-center" href="https://www.flaticon.com/free-icons/flower" title="flower icons"><img className='w-9 h-9 flip-x' src="https://res.cloudinary.com/dqijwldax/image/upload/v1742256773/Julie/succulent_jegahu.png" alt="www.flaticon.com" /></a>
                    </div>
                </div>
                <ToggleButtonGroup
                    color="primary"
                    value={artType}
                    exclusive
                    onChange={handleChange}
                    aria-label="Platform"
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 1, // Adds spacing between buttons
                        justifyContent: "center",
                    }}
                >
                    <ToggleButton value={'undefined'}><p className="crimson-pro">All art works</p></ToggleButton>
                    <ToggleButton value={'general'}><p className="crimson-pro">General Art</p></ToggleButton>
                    <ToggleButton value={'cartoon_characters'}><p className="crimson-pro">Cartoon characters</p></ToggleButton>
                    <ToggleButton value={'realism'}><p className="crimson-pro">Realism</p></ToggleButton>
                    <ToggleButton value={'animals'}><p className="crimson-pro">animals</p></ToggleButton>
                    <ToggleButton value={'historical_icons'}><p className="crimson-pro">Historical icons</p></ToggleButton>
                </ToggleButtonGroup>
            </div>

            <DarkDiv className="mt-5 container">
                <div className="columns-2 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                    {data.map((item: ArtPieceType) => (
                        <ArtItemMUI key={item._id} _id={item._id} type={item.type} className="my-2" Name={item.title} Icon={item.coverImage} note={item.note} price={1000} status={item.status} />
                    ))}
                </div>
                {/* <MasonryGallery /> */}
                {/* <Masonry columns={{ xs: 2,sm:3, md: 4 }} spacing={2}> */}

                {/* {data.map((item: ArtPieceType) => (
                        <ArtItemBox key={item._id} _id={item._id} type={item.type} className="my-2" Name={item.title} Icon={item.coverImage} note={"item.note"} price={1000} />
                    ))} */}
                {/* <ParallaxScroll items={data} /> */}
                {/* </Masonry> */}
            </DarkDiv>
        </>
    )
}

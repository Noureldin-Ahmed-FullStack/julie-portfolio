import { Button, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import Grid from '@mui/material/Grid2';
import { NiceDiv } from '../ui/NiceDiv';
import { DarkDiv } from '../ui/DarkDiv';
import { ArtPieceType } from '../../types';
import { useEffect, useState } from "react";
import LoadingPage from "./LoadingPage";
import { useArt } from "../../hooks/FetchArt";
import ArtItemMUI from "../ui/ArtItemMUI";
import ErrorPage from "./ErrorPage";
// import MasonryGallery from "./MasionaryComponent";

export default function Products() {
    const [artType, setArtType] = useState("undefined");
    const [search, setSearch] = useState('');
    const handleArtTypeChange = (event: SelectChangeEvent) => {
        setArtType(event.target.value as string);
    };
    const [ArtTitle, setArtTitle] = useState("undefined")
    const searchFunc = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const target = e.target as HTMLFormElement;
        const titleValue = (target.elements[0] as HTMLInputElement).value;
        const category = (target.elements[2] as HTMLInputElement).value;
        console.log(titleValue, category);

        setArtTitle(titleValue)

    };
    const { data, isLoading, refetch ,isError } = useArt(artType, ArtTitle)

    // 🔄 Automatically refetch when ArtTitle or artType changes
    useEffect(() => {
        console.log(ArtTitle, artType, data);

        refetch();
    }, [ArtTitle, artType, refetch]);
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
            <NiceDiv className="md:!w-3/4 !w-full mt-5">
                <form onSubmit={searchFunc}>
                    <Grid container className="justify-between" spacing={2}>
                        <Grid size={6}>
                            <TextField
                                value={search} // Set the value of the TextField to the state
                                onChange={(e) => setSearch(e.target.value)}
                                fullWidth
                                id="search"
                                name="search"
                                placeholder="example: cat ;)"
                                label="search"
                            />
                        </Grid>
                        <Grid size={6}>
                            <div className="flex items-center">
                                <div><p className="w-20">Filter By:</p></div>
                                <Select
                                    required
                                    className="overflow-hidden"
                                    labelId="type"
                                    id="type"
                                    variant='outlined'
                                    fullWidth
                                    name="type"
                                    value={artType}
                                    label="type"
                                    onChange={handleArtTypeChange}
                                >
                                    <MenuItem value={'undefined'}>select Category</MenuItem>
                                    <MenuItem value={'general'}>General Art</MenuItem>
                                    <MenuItem value={'cartoon_characters'}>Cartoon characters</MenuItem>
                                    <MenuItem value={'realism'}>Realism</MenuItem>
                                    <MenuItem value={'animals'}>animals</MenuItem>
                                    <MenuItem value={'historical_icons'}>Historical icons</MenuItem>
                                </Select>
                            </div>
                        </Grid>
                    </Grid>
                    <Button type="submit" fullWidth variant="outlined" className="!mt-2">Search</Button>
                </form>

            </NiceDiv>
            <DarkDiv className="mt-5 container">
                <div className="columns-2 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                    {data.map((item: ArtPieceType) => (
                        <ArtItemMUI key={item._id} _id={item._id} type={item.type} className="my-2" Name={item.title} Icon={item.coverImage} note={item.note} price={1000} />
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

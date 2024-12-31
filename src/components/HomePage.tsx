import { MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import { NiceDiv } from "./ui/NiceDiv";
import { useState } from "react";
import Grid from '@mui/material/Grid2';


export default function HomePage() {
    const [artType, setArtType] = useState('select_art_type');
    const [search, setSearch] = useState('');
    const handleArtTypeChange = (event: SelectChangeEvent) => {
        setArtType(event.target.value as string);
    };
    return (
        <div className="flex flex-col grow items-center">
            <div className="flex flex-col w-full grow items-center">
                <img src="https://ssniper.sirv.com/Julie-Portfolio/julie.jpg" className="w-full min-h-60 object-cover" alt="header" />
                <NiceDiv>
                    <Grid container className="justify-between" spacing={2}>
                        <Grid size={6}>
                            <TextField
                                value={search} // Set the value of the TextField to the state
                                onChange={(e) => setSearch(e.target.value)}
                                fullWidth
                                id="search"
                                name="search"
                                placeholder="ex: cat ;)"
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
                                    <MenuItem value={'select_art_type'}>select Category</MenuItem>
                                    <MenuItem value={'general'}>General Art</MenuItem>
                                    <MenuItem value={'cartoon_characters'}>Cartoon characters</MenuItem>
                                    <MenuItem value={'realism'}>Realism</MenuItem>
                                    <MenuItem value={'animals'}>animals</MenuItem>
                                    <MenuItem value={'historical_icons'}>Historical icons</MenuItem>
                                </Select>
                            </div>
                        </Grid>
                    </Grid>
                </NiceDiv>
            </div>
        </div>
    )
}

import { useParams } from "react-router-dom";
import CenteredPage from "../CenteredPage";
import { useArtDetails } from "../../hooks/FetchArt";
import { useEffect, useState } from "react";
import { GridLoader } from "react-spinners";
import { useThemeStore } from "../../context/ThemeContext";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { motion } from "framer-motion";
import Grid from '@mui/material/Grid2';
import "slick-carousel/slick/slick-theme.css";
import StarRateIcon from '@mui/icons-material/StarRate';
import { response } from "../../types";
import { CardBody } from "../ui/3d-card";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Chip } from "@mui/material";
import { ImagesSlider } from "../ui/Image-slider";
export default function ArtDetailsPage() {

    var settings = {
        infinite: true,
        speed: 500,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500
    };
    const { artID } = useParams();
    const { theme } = useThemeStore();
    const { data } = useArtDetails(artID)
    const [Art, setArt] = useState<response | "error">()
    useEffect(() => {
        console.log(artID);
        setArt(data)
    }, [data])
    if (Art && Art != "error") {
        return (
            <div className="grow flex flex-col">
                <ImagesSlider className="h-[40rem]" images={Art.Images}>
                   <></>
                </ImagesSlider>
                <div className="hidden md:block">
                    <CenteredPage className="mt-28 text-zinc-800 dark:text-zinc-100 mx-auto maxWidth75vw transition-all ease-in bg-zinc-100 bg-opacity-50 dark:bg-opacity-30 dark:bg-black relative dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-black/[0.1] sm:w-[30rem] h-auto rounded-xl p-6 border ">
                        <Grid container spacing={2} className="w-full">
                            <Grid size={4}>
                                <div className="carousel-container">

                                </div>
                            </Grid>
                            <Grid size={8}>
                                <div className="flex justify-between">
                                    <p className="text-4xl">{Art.title}</p>
                                    <p><StarRateIcon /><StarRateIcon /><StarRateIcon /><StarRateIcon /><StarRateIcon /></p>
                                </div>
                                <div className="flex justify-between mt-3">
                                    <p className="">Address:</p>
                                    <a href={Art.location} target="_blank">{Art.address}<LocationOnIcon /></a>
                                </div>
                                <div className="flex justify-start mt-3">
                                    <p>{Art.note}</p>
                                </div>
                                <p className="mb-2">Tags:</p>
                                {Art.tags.map((tag, index) => (
                                    <Chip clickable key={index} className="!me-2" color="warning" label={tag} />
                                ))}
                            </Grid>
                        </Grid>

                    </CenteredPage>
                </div>
                <div className="md:hidden grow flex flex-col text-zinc-900 dark:text-zinc-200">

                    <div className="carousel-container">
                        <Slider {...settings}>
                            {Art.Images.map((img, index) => (
                                <div key={index} className="carousel-slide">
                                    <img className="carousel-image" src={img} alt={Art.title} />
                                </div>
                            ))}
                        </Slider>
                        <div className="h-0">test</div>
                    </div>

                    <CardBody className="w-full grow transition-all rounded-none ease-in bg-zinc-100 bg-opacity-50 dark:bg-opacity-30 dark:bg-black relative dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-black/[0.1] p-6 border ">
                        <div className="flex justify-between">
                            <p className="text-4xl">{Art.title}</p>
                            <p><StarRateIcon /><StarRateIcon /><StarRateIcon /><StarRateIcon /><StarRateIcon /></p>
                        </div>
                        <div className="flex justify-between mt-3">
                            <p className="">Address</p>
                            <a href={Art.location} target="_blank">{Art.address}<LocationOnIcon /></a>
                        </div>
                        <div className="flex justify-start mt-3">
                            <p>{Art.note}</p>
                        </div>
                    </CardBody>
                </div>
            </div>)
    } else if (Art == "error") {
        return (
            <CenteredPage>
                <h4 className="text-7xl mb-5 text-center text-red-700 dark:text-red-800 font-medium agu-display">error 404: This Item doesnt exist</h4>
            </CenteredPage>)
    } else {
        return (
            <CenteredPage>
                <h4 className="text-7xl mb-5 text-center text-orange-700 dark:text-zinc-200 font-medium agu-display">Loading</h4>
                <GridLoader size={25} color={theme == 'dark' ? 'white' : 'orange'} />
            </CenteredPage>
        )
    }

}

import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";

import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import { Link } from 'react-router-dom';
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import AddArtsButton from "../Pages/AddArtsButton";
import { useAppContext } from "../../context/AppContext";
export default function TailwindNavbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY < 400); // Change background when scrolled past 50px
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const pages = ['home', 'browse', 'blog', 'favourites', 'about'];
    const { currentPath } = useAppContext();

    return (
        <>
            {/* <nav className="bg-white dark:bg-gray-900 w-full fixed z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600"> */}
            {(currentPath != '/home' && currentPath != '/') && <div className="mt-12"></div>}
            <nav className={"!bg-transparent dark:bg-gray-900 w-full fixed z-50 top-0 start-0 "}>
                <div className={`px-8 duration-300 transition-all flex flex-wrap items-center justify-between mx-auto py-2 ${(isScrolled && (currentPath == '/home' || currentPath == '/')) ? '!bg-transparent' : 'bg-blue-900'}`}>
                    <div className="flex items-center">
                        <LocalFloristIcon className=" !text-cream mr-1 !text-[24px] sm:!text-[32px] md:!text-[40px] lg:!text-[48px]" />
                        <Typography
                            variant="h6"
                            noWrap
                            className='hover:text-inherit !text-cream'
                            component={Link}
                            to="/home"
                            sx={{
                                mr: 2,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                                fontSize: { xs: '1.5rem', sm: '2rem' }
                            }}
                        >
                            Julie
                        </Typography>
                    </div>
                    <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <Box sx={{ flexGrow: 0 }}>
                            <SignedOut>
                                <Button
                                    variant='contained'
                                    component={Link}
                                    to="/sign-in"
                                    // !bg-slate-50 !text-zinc-100 !bg-gradient-to-r !from-violet-500/80 !to-orange-300/80
                                    className='hover:text-inherit !text-zinc-900 !bg-cream'>
                                    <Typography sx={{
                                        textAlign: 'center',
                                        fontFamily: 'monospace',
                                        fontWeight: 400,
                                        textTransform: "capitalize"
                                    }}>Sign-In</Typography>
                                </Button>
                            </SignedOut>
                            <SignedIn>
                                <div className='relative flex items-center'>
                                    <div className="absolute right-10">
                                        <AddArtsButton />
                                    </div>
                                    <UserButton />
                                </div>
                            </SignedIn>

                        </Box>
                        {/* <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button> */}
                        {/* Toggle Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className=" inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-200 bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    {/* Responsive Menu */}
                    <div className={`${isOpen ? "block" : "hidden"} md:flex items-center justify-between w-full md:w-auto md:order-1`} id="navbar-sticky">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-800 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            {pages.map((item, index) => (
                                <li key={index} onClick={()=>setIsOpen(false)} className="group myCssLink capitalize">
                                    <Link to={item} className={`group-hover:bg-cream/10 duration-300 transition-all block py-2 px-3 rounded-sm md:p-0 text-white md:bg-transparent md:text-cream ` + (currentPath == '/' + item ? 'bg-cream/80 md:bg-transparent' : '')}><span className={"md:group-hover:bg-transparent text-white group-hover:text-cream " + (currentPath == '/' + item ? 'md:text-cream underline underline-offset-4 text-blue-900 hover:text-blue-800' : '')}>{item}</span> </Link>

                                    {/* <Link to={"/"+item} className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">{item}</Link> */}
                                </li>
                            ))}

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

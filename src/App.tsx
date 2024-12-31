import { Outlet } from "react-router-dom"
// import { FloatingNav } from "./components/ui/floating-navbar"
// import OpenIconSpeedDial from "./components/ui/SpeedDial"
import { useUserContext, useUserFavsContext } from "./context/UserContext";
import { useEffect, useRef } from "react";
import { useUser } from "@clerk/clerk-react";
import axios from "axios";
import { Box, createTheme, ThemeProvider } from "@mui/material";
import { useThemeStore } from "./context/ThemeContext";
import { useFavs } from "./hooks/FetchArt";
import ResponsiveAppBar from "./components/ui/ResponsiveAppBar";
function App() {
  const { userData, setUserData } = useUserContext();
  const { setfavsList ,setfavsLoading } = useUserFavsContext();

  const { data } = useFavs(userData?._id)
  // const location = useLocation();
  // const currentPath = location.pathname;
  useEffect(() => {
    if (data?.items) {
      setfavsList(data.items);
      setfavsLoading(false)
      // console.log(data.items);
    }
  }, [data, setfavsList])
  
  const { theme } = useThemeStore();
  const BaseURL = import.meta.env.VITE_BASE_URL;
  const { isLoaded, isSignedIn, user } = useUser();

  const ref = useRef<HTMLDivElement>(null);
  // const navbarItems = [
  //   { name: 'Home', link: 'home' }, { name: 'favourites', link: 'favourites' }, { name: 'social', link: 'social' }, { name: 'News', link: 'News' }, { name: 'Profile', link: 'Profile' }
  // ]
  const darkTheme = createTheme({
    palette: {
      mode: theme,
    },
  });

  useEffect(() => {
    if (!user && !isSignedIn) {
      setUserData(null)
      return
    } else {

      const bodyData = {
        name: user.fullName,
        email: user.primaryEmailAddress?.emailAddress,
        _id: user.id,
        userPFP: user.imageUrl,
      }
      axios
        .post(`${BaseURL}signUp`, bodyData)
        .then((response) => {
          // console.log("Success:", response.data.userData);
          setUserData(response.data.userData)
          
        }).catch((error) => {
          console.log(error);
        })
    }

  }, [isLoaded, isSignedIn, user])

  return (
    <Box className='flex !bg-fixed bg-gradient-to-tr from-stone-300 from-0% via-amber-100 to-emerald-100 dark:bg-gradient-to-tr dark:from-stone-900 dark:via-zinc-800 dark:to-emerald-800 grow flex-col text-zinc-900 dark:text-zinc-100' ref={ref}>
      <ThemeProvider theme={darkTheme}>
        <ResponsiveAppBar />
      {/* {(currentPath != "/" && currentPath != "/home") &&<FloatingNav navItems={navbarItems}/>} */}
        <Outlet />
      </ThemeProvider>

    </Box>
  )
}

export default App

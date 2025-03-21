import { useState } from "react";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
// import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "../../lib/utils/cn";
import { useThemeStore } from "../../context/ThemeContext";
import { Link, useNavigate } from "react-router-dom";
import { Checkbox, Typography } from "@mui/material";
import { UserButton, useUser } from "@clerk/clerk-react";
import { useAppContext } from "../../context/AppContext";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0) {
        setVisible(false);
      } else {
        if (direction === 1 || direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  const { isSignedIn, isLoaded } = useUser(); // Clerk's hook
  const { ToggleTheme, theme } = useThemeStore();
  const { currentPath } = useAppContext();
  const navigate = useNavigate();
  const goTo = (path: String) => {
    navigate('/' + path);
  }
  // const location = useLocation();
  // const [currentPath, setCurrentPath] = useState(location.pathname);

  // useEffect(() => {
  //   setCurrentPath(location.pathname);
  // }, [location]);
  const getPathIndex = (path: string | null) => {
    switch (path) {
      case "":
        return "/home"
      case "home":
        return "/home"
      case "social":
        return "/social"
      case "News":
        return "/News"
      case "favourites":
        return "/favourites"
      case "Profile":
        return "/Profile"
      default:
        return -1
    }
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "fixed top-10 items-center flex justify-around z-50 w-full ",
          className
        )}
      >
        <div className="relative">
        
        </div>
        <div className="min-w-fit flex inset-x-0 mx-auto border w-10/12 justify-between border-transparent text-white rounded-full bg-blue-700 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-2 py-2 items-center">
       <div className="flex items-center">
       <LocalFloristIcon
        sx={{
          stroke: "black",
          strokeWidth: 1.1,
          color:"pink"
        }}/>
          <Typography
            variant="h6"
            noWrap
            className='hover:text-inherit !ml-1'
            component={Link}
            to="/home"
            sx={{
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 500,
              letterSpacing: '.13rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            JULIE
          </Typography>
       </div>
       <div className="flex space-x-5">
        {navItems.map((navItem: any, idx: number) => (
            <Link
              key={`link=${idx}`}
              to={navItem.link}
              className={cn(
                "relative dark:text-neutral-50 hover:border-b-2 border-gray-500 navLinks items-center font-bold flex text-neutral-200 dark:hover:text-neutral-300 hover:text-orange-100", (currentPath == (getPathIndex(navItem.link))) ? "navOutline border-b-emerald-700 dark:border-b-blue-700" : ""
              )}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="text-sm">{navItem.name}</span>
            </Link>
          ))}
       </div>
          
          {(isSignedIn && isLoaded) ? < UserButton /> :
            (<button onClick={() => goTo("sign-up")} className="border myDarkBG text-sm font-medium relative border-white/[0.2] text-white px-4 py-2 rounded-full">
              <span>Login</span>
              <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
            </button>)
          }
        </div>
        <div onClick={ToggleTheme} className="absolute right-10 w-9 h-9 z-0 hidden sm:flex items-center justify-center">
          <Checkbox
            aria-label="Darkmode"
            checked={theme == 'dark'}
            icon={<WbSunnyIcon
              sx={{
                stroke: 'white',
                strokeWidth: 0.1, // Adjust thickness here
              }} className="text-zinc-700 dark:text-black  h-5" />}
            checkedIcon={<DarkModeIcon sx={{
              stroke: 'black',
              strokeWidth: 0.1, // Adjust thickness here
            }} className="text-gray-900 dark:text-white " />}
          />
        </div>

      </motion.div>
    </AnimatePresence>
  );
};

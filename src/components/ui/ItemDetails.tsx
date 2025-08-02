
import {
  // AnimatePresence, 
  motion
} from "framer-motion";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { useEffect, useState } from "react";
import { Chip } from "@mui/material";
import ArtPeiceEditButton from "./ArtPeiceEditButton";
import { useUserContext } from "../../context/UserContext";
import { ArtPieceType } from "../../types";
import DeleteArtButton from "./DeleteArtButton";
import MarkAsSoldButton from "./MarkAsSoldButton";

export const ItemDetails = ({
  item,
  autoplay = false,
}: {
  item: ArtPieceType;
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const { userData } = useUserContext();
  const handleNext = () => {
    setActive((prev) => (prev + 1) % item.Images.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + item.Images.length) % item.Images.length);
  };

  // const isActive = (index: number) => {
  //   return index === active;
  // };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  // const randomRotateY = () => {
  //   return Math.floor(Math.random() * 21) - 10;
  // };
  return (
    <div className="max-w-lg md:max-w-5xl antialiased font-sans px-4 md:px-8 lg:px-12 py-10">
      <div className="">
        <img src={item.Images[0]} className="w-full md:max-w-80 float-left me-5 rounded-2xl mb-3 overflow-hidden " alt="" />
        <div className="">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <h3 className="text-2xl font-bold dark:text-white text-black">
              {item.title}
              {userData && (userData?.role == 'admin') && <ArtPeiceEditButton FieldData={item} userData={userData} />}
              {userData && (userData?.role == 'admin') && <MarkAsSoldButton FieldData={item} userData={userData} />}

            </h3>
            <p className="text-sm text-gray-500 dark:text-neutral-500">
              {item.type}
            </p>
            <p className="text-lg text-gray-500 mt-2 sm:mt-4 dark:text-neutral-300">
              Pris: Kr {item.price},-
            </p>

            <p className="text-lg text-gray-500 mt-2 sm:mt-4 dark:text-neutral-300">
              Format: {item.format}
            </p>

            <motion.p className="text-lg text-gray-500 mt-2 sm:mt-4 dark:text-neutral-300">
              inspiration: {item.note.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
            <p className="mb-2">Tags:</p>
            <div className="mb-2">
              {item.tags.map((tag, index) => (
                <Chip clickable key={index} className="!me-2" color="primary" label={tag} />
              ))}
            </div>
          </motion.div>
          <div className="flex gap-4 pt-12 md:pt-0">
            <button
              onClick={handlePrev}
              className="h-7 w-7 rounded-full bg-neutral-800 dark:bg-neutral-800 flex items-center justify-center group/button"
            >
              <KeyboardDoubleArrowLeftIcon className="h-5 w-5 !text-white dark:text-neutral-400 group-hover/button:rotate-12 transition-all duration-1000" />
            </button>
            <button
              onClick={handleNext}
              className="h-7 w-7 rounded-full bg-neutral-800 dark:bg-neutral-800 flex items-center justify-center group/button"
            >
              <KeyboardDoubleArrowRightIcon className="h-5 w-5 !text-white dark:text-neutral-400 group-hover/button:-rotate-12 transition-all duration-1000" />
            </button>

          </div>
          {userData && (userData?.role == 'admin') && <DeleteArtButton FieldData={item} userData={userData} />}
        </div>
      </div>
    </div>
  );
};

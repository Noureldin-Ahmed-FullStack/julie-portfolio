
import { AnimatePresence, motion } from "framer-motion";
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

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };
  return (
    <div className="max-w-sm md:max-w-4xl mx-auto antialiased font-sans px-4 md:px-8 lg:px-12 py-10">
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-0">
        <div>
          <div className="relative h-80 w-full">
            <AnimatePresence>
              {item.Images.map((testimonial, index) => (
                <motion.div
                  key={testimonial + index.toString()}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index)
                      ? 20
                      : item.Images.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <img
                    src={testimonial}
                    alt={item.title}
                    width={500}
                    height={500}
                    draggable={false}
                    className="h-full w-full rounded-3xl object-cover object-center"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex justify-between flex-col py-4">
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
            <motion.p className="text-lg text-gray-500 mt-4 sm:mt-8 dark:text-neutral-300">
              {item.note.split(" ").map((word, index) => (
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
            {item.tags.map((tag, index) => (
              <Chip clickable key={index} className="!me-2" color="primary" label={tag} />
            ))}
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
        </div>
      </div>
        {userData && (userData?.role == 'admin') && <DeleteArtButton FieldData={item} userData={userData} />}
    </div>
  );
};

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { IoIosArrowBack } from 'react-icons/io';

const MovingIconButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Animation variants for the overlay div (scaling effect)
  const overlayVariants = {
    initial: {
      scale: 1,
    },
    hover: {
      scale: 1.2,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
        // Note: 'dumppiness' seems to be a typo; assuming you meant 'damping' for spring animation
        // If you want a spring effect, you can use:
        // type: 'spring',
        // damping: 20,
      },
    },
  };

  // Animation variants for the icon (sliding right-to-left on hover, left-to-right on hover out)
  const iconVariants = {
    initial: {
      x: isHovered ? 20 : -20, // Start right (hover) or left (not hover)
      opacity: 0,
    },
    animate: {
      x: 0, // Slide to center
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
    exit: {
      x: isHovered ? -20 : 20, // Exit left (hover) or right (not hover)
      opacity: 0,
      transition: {
        duration: 0.2,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <motion.button
      className="bg-transparent p-3 relative rounded-full cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Overlay div with scaling animation */}
      <motion.div
        className="absolute top-0 left-0 bg-gray-200 w-full h-full rounded-full"
        variants={overlayVariants}
        initial="initial"
        animate={isHovered ? 'hover' : 'initial'}
      />

      {/* Icon with sliding animation */}
      <div className="relative z-10">
        <AnimatePresence mode="wait">
          {isHovered ? (
            <motion.span
              key="hovered"
              className="text-blue-500 block" // Primary color when hovered (using Tailwind or replace with your color)
              variants={iconVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <IoIosArrowBack size={20} />
            </motion.span>
          ) : (
            <motion.span
              key="not-hovered"
              className="text-gray-500 block" // Default color
              variants={iconVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <IoIosArrowBack size={20} />
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </motion.button>
  );
};

export default MovingIconButton;

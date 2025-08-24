// Animation utilities and helpers
export const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export const slideIn = {
  hidden: { x: -100, opacity: 0 },
  show: { 
    x: 0, 
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
};
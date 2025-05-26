const fastSlowFastEase = [0.7, 0.1, 0.1, 0.9];

export const rise = {
  initial: { y: "0%" },
  animate: { y: "-7.5%" },
  exit: { y: "0%" },
  transition: {
    duration: 2,
    ease: "easeInOut",
    damping: 20,
    type: "keyframes",
  },
};
export const toTop = {
  initial: { y: "100%", opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: "-100%", opacity: 0 },
  transition: {
    duration: 1,
    ease: "easeInOut",
    type: "keyframes",
    delay: 0.5,
  },
};
export const toTop2 = {
  initial: { y: "80%", opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: "-80%", opacity: 0 },
  transition: {
    duration: 1,
    ease: "easeInOut",
    damping: 20,
    type: "keyframes",
  },
};

export const rolling = {
  animate: {
    x: ["0%", "100%"],
    rotate: [0, 360],
  },
  transition: {
    duration: 1,
    ease: "linear",
  },
};

export const slideNext = {
  initial: { x: "100%" },
  animate: { x: "0" },
  exit: { x: "-100%" },
  transition: {
    duration: 1,
    ease: fastSlowFastEase,
    type: "keyframes",
  },
};

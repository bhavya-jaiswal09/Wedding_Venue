export const baseTransition = {
  duration: 0.8,
  ease: 'easeOut',
};

export const makeFadeUp = (reduceMotion = false) => {
  if (reduceMotion) {
    return {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { duration: 0.3, ease: 'linear' },
      },
    };
  }

  return {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: baseTransition,
    },
  };
};

export const makeStagger = (staggerChildren = 0.12, delayChildren = 0, reduceMotion = false) => {
  if (reduceMotion) {
    return {
      hidden: {},
      visible: {
        transition: { staggerChildren: 0.01, delayChildren: 0 },
      },
    };
  }

  return {
    hidden: {},
    visible: {
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  };
};

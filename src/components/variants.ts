

export type fadeInProps = {
  direction: string;
    delay: number;
    value: number; 
};
export const fadeIn = ({ direction, delay ,value}: fadeInProps) => {
  return {
    hidden: {
      y: direction === 'up' ? value : direction === 'down' ? value : 0,
      x: direction === 'left' ? value : direction === 'right' ? value : 0,
      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 1.2,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

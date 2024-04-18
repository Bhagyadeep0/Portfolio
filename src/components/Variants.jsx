export const fadeIn = (direction, delay,duration) => {
    return {
      hidden: {
        y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
        x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
        scale: direction === 'scaleDown' ? 1.2 : direction === 'scaleUp' ? .8 : 1,
        opacity: 0,
        transition: {
          type: 'tween',
          duration: duration,
          delay: delay,
          ease: [0.25, 0.6, 0.3, 0.8],
        },
      },
      show: {
        y: 0,
        x: 0,
        scale:1,
        opacity: 1,
        transition: {
          type: 'tween',
          duration: duration-.1,
          delay: delay,
          ease: [0.25, 0.25, 0.25, 0.75],
        },
      },
    };
  };
  
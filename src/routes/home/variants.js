export const variants = {
    title: {
        initial: {
            opacity: 0,
            translateY: 80,
        },
        animate: {
            opacity: 1,
            translateY: 0,
            transition: {
                duration: 1,
                ease: 'easeInOut',
                delay: 3,
            },
        },
    },
    text: {
        initial: {
            opacity: 0,
            translateX: -40,
        },
        animate: {
            opacity: 1,
            translateX: 0,
            transition: {
                duration: 1,
                ease: 'easeInOut',
                delay: 3.6,
            },
        },
    },
    button: {
        initial: {
            opacity: 0,
            scale: 0.5,
        },
        animate: {
            opacity: 1,
            scale: 1,
            transition: {
                ease: [0, 0.71, 0.2, 1.15],
                duration: 0.8,
                delay: 4.2,
            },
        },
    },
};

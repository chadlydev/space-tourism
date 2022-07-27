import { hide, show } from '../../constants/variants';

export const sentence = {
    initial: { ...hide },
    animate: {
        ...show,
        transition: {
            delay: 1.5,
            staggerChildren: 0.4,
        },
    },
};

export const words = {
    initial: { ...hide, translateY: -60 },
    animate: {
        ...show,
        translateY: 0,
        transition: {
            duration: 1,
        },
    },
};

export const imgAndTitle = {
    initial: {
        ...hide,
        translateY: 20,
    },
    animate: {
        ...show,
        translateY: 0,
        transition: {
            ease: [0.17, 0.55, 0.55, 1],
            duration: 1,
            delay: 0.5,
        },
    },
    exit: {
        ...hide,
        translateY: -20,
        transition: {
            duration: 0.5,
        },
    },
};

export const navList = {
    initial: { ...hide },
    animate: {
        ...show,
        transition: {
            delayChildren: 2.6,
            staggerChildren: 0.3,
        },
    },
};

export const listItem = {
    initial: { ...hide, translateY: -20 },
    animate: {
        ...show,
        translateY: 0,
        transition: { type: 'spring', stiffness: 60 },
    },
};

export const paragraph = {
    initial: { ...hide, translateX: -20 },
    animate: {
        ...show,
        translateX: 0,
        transition: { type: 'spring', stiffness: 60, delay: 1.5 },
    },
};

export const line = {
    initial: {
        width: '0%',
    },
    animate: {
        width: '100%',
        transition: {
            type: 'tween',
            duration: 1,
            delay: 2.4,
        },
    },
    delay: {
        width: '100%',
        transition: {
            type: 'tween',
            duration: 1,
            delay: 1.5,
        },
    },
};

export const extraInfo = {
    initial: { opacity: 0, translateY: 20 },
    animate: {
        opacity: 1,
        translateY: 0,
        transition: {
            type: 'spring',
            stiffness: 60,
            delayChildren: 2.6,
            staggerChildren: 0.6,
        },
    },
    delay: {
        opacity: 1,
        translateY: 0,
        transition: {
            type: 'spring',
            stiffness: 60,
            delayChildren: 2.2,
            staggerChildren: 0.3,
        },
    },
};

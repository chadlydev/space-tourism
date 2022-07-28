import { ease, hide, show } from '../../constants/variants';

export const title = {
    initial: {
        ...hide,
        translateY: 80,
    },
    animate: {
        ...show,
        translateY: 0,
        transition: {
            ...ease,
            duration: 1,
            delay: 3.6,
        },
    },
    delay: {
        ...show,
        translateY: 0,
        transition: {
            ...ease,
            duration: 1,
        },
    },
};

export const otherText = {
    initial: {
        ...hide,
        translateX: -40,
    },
    animate: {
        ...show,
        translateX: 0,
        transition: {
            ...ease,
            duration: 1,
            delay: 4.2,
        },
    },
    delay: {
        ...show,
        translateX: 0,
        transition: {
            ...ease,
            duration: 1,
            delay: 0.6,
        },
    },
};

export const button = {
    initial: {
        ...hide,
        scale: 0.5,
    },
    animate: {
        ...show,
        scale: 1,
        transition: {
            ease: [0, 0.71, 0.2, 1.15],
            duration: 1,
            delay: 4.8,
        },
    },
    delay: {
        ...show,
        scale: 1,
        transition: {
            ease: [0, 0.71, 0.2, 1.15],
            duration: 1,
            delay: 1.2,
        },
    },
};

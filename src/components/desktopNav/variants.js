import { ease, hide, show } from '../../constants/variants';

export const logo = {
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
            delay: 2.8,
        },
    },
};

export const nav = {
    initial: { width: '0%' },
    tablet: {
        width: 'auto',
        transition: {
            type: 'tween',
            duration: 1,
            delay: 0.8,
        },
    },
    desktop: {
        width: '100%',
        transition: {
            type: 'tween',
            duration: 1,
            delay: 0.8,
        },
    },
};

export const navListTablet = {
    initial: { ...hide },
    animate: {
        ...show,
        transition: {
            delayChildren: 1.8,
            staggerChildren: 0.3,
        },
    },
};

export const navListDesktop = {
    initial: { ...hide },
    animate: {
        ...show,
        transition: {
            delayChildren: 1.8,
            staggerChildren: 0.2,
        },
    },
};

export const listItem = {
    initial: { ...hide, translateY: -20 },
    animate: {
        ...show,
        translateY: 0,
        transition: { ...ease, duration: 1 },
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
            delay: 2.8,
        },
    },
};

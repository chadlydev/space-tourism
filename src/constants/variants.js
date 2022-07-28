export const hide = {
    opacity: 0,
};

export const show = {
    opacity: 1,
};

export const ease = { ease: [0.17, 0.55, 0.55, 1] };

export const pageTitle = {
    initial: { ...hide, translateY: -40 },
    animate: {
        ...show,
        translateY: 0,
        transition: {
            ...ease,
            delay: 0.5,
            duration: 1,
        },
    },
};

export const otherText = {
    initial: { ...hide, translateY: 20 },
    animate: {
        ...show,
        translateY: 0,
        transition: {
            delay: 2,
            ...ease,
            duration: 1,
        },
    },
    delay: {
        ...show,
        translateY: 0,
        transition: {
            delay: 1,
            ...ease,
            duration: 1,
        },
    },
};

export const imgAndTitle = {
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
            delay: 1.5,
        },
    },
    delay: {
        ...show,
        translateX: 0,
        transition: {
            ...ease,
            duration: 1,
            delay: 0.5,
        },
    },
    exit: {
        ...hide,
        translateY: -20,
        transition: {
            duration: 0.2,
        },
    },
};

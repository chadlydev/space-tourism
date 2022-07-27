export const variants = {
    tablet: {
        logo: {
            initial: {
                opacity: 0,
                translateX: -80,
            },
            animate: {
                opacity: 1,
                translateX: 0,
                transition: {
                    type: 'spring',
                    stiffness: 60,
                    delay: 2.8,
                },
            },
        },
        nav: {
            initial: { width: '0%' },
            animate: {
                width: 'auto',
                transition: {
                    type: 'tween',
                    duration: 1,
                    delay: 0.8,
                },
            },
        },
        ul: {
            initial: { opacity: 0 },
            animate: {
                opacity: 1,
                transition: {
                    delayChildren: 1.8,
                    staggerChildren: 0.3,
                },
            },
        },
        li: {
            initial: { opacity: 0, y: -20 },
            animate: {
                opacity: 1,
                y: 0,
                transition: { type: 'spring', stiffness: 200 },
            },
        },
    },
    desktop: {
        line: {
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
        },
        nav: {
            initial: { width: '0%' },
            animate: {
                width: '100%',
                transition: {
                    type: 'tween',
                    duration: 1,
                    delay: 0.8,
                },
            },
        },
        ul: {
            initial: { opacity: 0 },
            animate: {
                opacity: 1,
                transition: {
                    delayChildren: 1.8,
                    staggerChildren: 0.2,
                },
            },
        },
        li: {
            initial: { opacity: 0, y: -20 },
            animate: {
                opacity: 1,
                y: 0,
                transition: { type: 'spring', stiffness: 60 },
            },
        },
    },
};

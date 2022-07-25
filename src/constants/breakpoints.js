const BREAKPOINT_SIZES = {
    mobile: 320,
    tablet: 540,
    smDesktop: 1024,
    mdDesktop: 1440,
    lgDesktop: 1920,
    xlDesktop: 2560,
};

export const BREAKPOINTS = {
    mobile: `(min-width: ${BREAKPOINT_SIZES.mobile}px)`,
    tablet: `(min-width: ${BREAKPOINT_SIZES.tablet}px)`,
    smDesktop: `(min-width: ${BREAKPOINT_SIZES.smDesktop}px)`,
    mdDesktop: `(min-width: ${BREAKPOINT_SIZES.mdDesktop}px)`,
    lgDesktop: `(min-width: ${BREAKPOINT_SIZES.lgDesktop}px)`,
    xlDesktop: `(min-width: ${BREAKPOINT_SIZES.xlDesktop}px)`,
};

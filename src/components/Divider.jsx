import styled from 'styled-components/macro';
import { motion } from 'framer-motion';

export const Divider = styled(motion.div)`
    min-height: 1px;
    width: 100%;
    z-index: 5;
    background: hsla(231, 15%, 26%, 1);
`;

import { motion } from 'framer-motion';
import styled from 'styled-components/macro';

const Path = props => (
    <motion.path fill='transparent' strokeWidth='3' {...props} />
);

const transition = { duration: 0.3 };

const MenuToggle = ({ toggle, isOpen }) => {
    return (
        <Button onClick={toggle}>
            <svg width='24' height='24' viewBox='0 0 24 24'>
                <Path
                    animate={isOpen ? 'open' : 'closed'}
                    initial={false}
                    variants={{
                        closed: {
                            d: 'M 2 1.5 L 24 1.5',
                            stroke: 'var(--color-accent)',
                        },
                        open: {
                            d: 'M 3 17.5 L 19 1.5',
                            stroke: 'var(--color-accent)',
                        },
                    }}
                    transition={transition}
                />
                <Path
                    d='M 2 9.423 L 24 9.423'
                    animate={isOpen ? 'open' : 'closed'}
                    initial={false}
                    variants={{
                        closed: { opacity: 1, stroke: 'var(--color-accent)' },
                        open: { opacity: 0 },
                    }}
                    transition={transition}
                />
                <Path
                    animate={isOpen ? 'open' : 'closed'}
                    initial={false}
                    stroke='var(--color-accent)'
                    variants={{
                        closed: {
                            d: 'M 2 17.346 L 24 17.346',
                            stroke: 'var(--color-accent)',
                        },
                        open: {
                            d: 'M 3 1.5 L 19 17.346',
                            stroke: 'var(--color-accent)',
                        },
                    }}
                    transition={transition}
                />
            </svg>
        </Button>
    );
};

export default MenuToggle;

const Button = styled.div`
    z-index: 99;
    cursor: pointer;
`;

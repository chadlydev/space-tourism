import { Outlet } from 'react-router-dom';
import { Divider } from '../../components/Divider';
import useGetData from './useGetData';
import Background from '../../components/Background';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import * as variants from './variants';
import { Flex, FlexColumn, Left, NavLink, Right, Wrapper } from './styles';
import useNextAnimation from '../../hooks/useNextAnimation';
import { pageTitle } from '../../constants/variants';

const Destination = () => {
    const [currentContent, setCurrentContent] = useState('moon');
    const { nextAnimation } = useNextAnimation('/destination');
    const { data } = useGetData(currentContent);

    return (
        <>
            <Background page='destination'>
                <Wrapper>
                    <Left>
                        <motion.h5
                            variants={pageTitle}
                            initial='initial'
                            animate='animate'
                        >
                            <span>01</span>Pick your destination
                        </motion.h5>
                        <AnimatePresence exitBeforeEnter={true}>
                            <motion.img
                                src={`/assets/destination/image-${currentContent}.webp`}
                                alt='moon'
                                key={currentContent}
                                variants={variants.imgAndTitle}
                                initial='initial'
                                animate={nextAnimation ? 'delay' : 'animate'}
                                exit='exit'
                            />
                        </AnimatePresence>
                    </Left>
                    <Right>
                        <nav>
                            <motion.ul
                                variants={variants.navList}
                                initial='initial'
                                animate='animate'
                            >
                                <motion.li variants={variants.listItem}>
                                    <NavLink
                                        onClick={() =>
                                            setCurrentContent('moon')
                                        }
                                        className={
                                            currentContent === 'moon'
                                                ? 'active'
                                                : 'inactive'
                                        }
                                    >
                                        Moon
                                    </NavLink>
                                </motion.li>
                                <motion.li variants={variants.listItem}>
                                    <NavLink
                                        onClick={() =>
                                            setCurrentContent('mars')
                                        }
                                        className={
                                            currentContent === 'mars'
                                                ? 'active'
                                                : 'inactive'
                                        }
                                    >
                                        Mars
                                    </NavLink>
                                </motion.li>
                                <motion.li variants={variants.listItem}>
                                    <NavLink
                                        onClick={() =>
                                            setCurrentContent('europa')
                                        }
                                        className={
                                            currentContent === 'europa'
                                                ? 'active'
                                                : 'inactive'
                                        }
                                    >
                                        Europa
                                    </NavLink>
                                </motion.li>
                                <motion.li variants={variants.listItem}>
                                    <NavLink
                                        onClick={() =>
                                            setCurrentContent('titan')
                                        }
                                        className={
                                            currentContent === 'titan'
                                                ? 'active'
                                                : 'inactive'
                                        }
                                    >
                                        Titan
                                    </NavLink>
                                </motion.li>
                            </motion.ul>
                        </nav>
                        <AnimatePresence exitBeforeEnter={true}>
                            <motion.h2
                                variants={variants.imgAndTitle}
                                initial='initial'
                                animate={nextAnimation ? 'delay' : 'animate'}
                                exit='exit'
                                key={currentContent}
                            >
                                {data.name}
                            </motion.h2>
                        </AnimatePresence>
                        <motion.p
                            variants={variants.paragraph}
                            initial='initial'
                            animate={nextAnimation ? 'delay' : 'animate'}
                            key={currentContent}
                        >
                            {data.content}
                        </motion.p>

                        <AnimatePresence exitBeforeEnter={true}>
                            <Divider
                                variants={variants.line}
                                initial='initial'
                                animate={nextAnimation ? 'delay' : 'animate'}
                                key={currentContent + 1}
                            />
                            <Flex
                                variants={variants.extraInfo}
                                initial='initial'
                                animate={nextAnimation ? 'delay' : 'animate'}
                                key={currentContent}
                            >
                                <FlexColumn variants={variants.extraInfo}>
                                    <motion.h6>Avg. distance</motion.h6>
                                    <motion.h4>{data.distance}</motion.h4>
                                </FlexColumn>
                                <FlexColumn variants={variants.extraInfo}>
                                    <motion.h6>Est. travel time</motion.h6>
                                    <motion.h4>{data.travelTime}</motion.h4>
                                </FlexColumn>
                            </Flex>
                        </AnimatePresence>
                    </Right>
                </Wrapper>
            </Background>
            <Outlet />
        </>
    );
};

export default Destination;

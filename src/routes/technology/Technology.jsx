import { Outlet } from 'react-router-dom';
import Background from '../../components/Background';
import useGetData from './useGetData';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import useNextAnimation from '../../hooks/useNextAnimation';
import {
    ease,
    hide,
    imgAndTitle,
    otherText,
    pageTitle,
    show,
} from '../../constants/variants';
import { Circle, ContentWrapper, FlexColumn, Wrapper } from './styles';

const Technology = () => {
    const [currentContent, setCurrentContent] = useState(1);
    const { data } = useGetData(currentContent);
    const { nextAnimation } = useNextAnimation('/technology');

    return (
        <>
            <Background page='technology'>
                <Wrapper>
                    <ContentWrapper>
                        <motion.h5
                            variants={pageTitle}
                            initial='initial'
                            animate='animate'
                        >
                            <span>03</span> Space Launch 101
                        </motion.h5>
                        <nav>
                            <motion.ul
                                variants={navList}
                                initial='initial'
                                animate='animate'
                            >
                                <motion.li variants={listItem}>
                                    <Circle
                                        onClick={() => setCurrentContent(1)}
                                        className={
                                            currentContent === 1
                                                ? 'active'
                                                : 'inactive'
                                        }
                                    >
                                        1
                                    </Circle>
                                </motion.li>
                                <motion.li variants={listItem}>
                                    <Circle
                                        onClick={() => setCurrentContent(2)}
                                        className={
                                            currentContent === 2
                                                ? 'active'
                                                : 'inactive'
                                        }
                                    >
                                        2
                                    </Circle>
                                </motion.li>
                                <motion.li variants={listItem}>
                                    <Circle
                                        onClick={() => setCurrentContent(3)}
                                        className={
                                            currentContent === 3
                                                ? 'active'
                                                : 'inactive'
                                        }
                                    >
                                        3
                                    </Circle>
                                </motion.li>
                            </motion.ul>
                        </nav>
                        <FlexColumn>
                            <motion.h6
                                variants={otherText}
                                initial='initial'
                                animate='animate'
                            >
                                The Terminology...
                            </motion.h6>
                            <AnimatePresence exitBeforeEnter={true}>
                                <motion.h3
                                    key={currentContent}
                                    variants={imgAndTitle}
                                    initial='initial'
                                    animate={
                                        nextAnimation ? 'delay' : 'animate'
                                    }
                                    exit='exit'
                                >
                                    {data.title}
                                </motion.h3>
                            </AnimatePresence>
                            <AnimatePresence exitBeforeEnter={true}>
                                <motion.p
                                    key={currentContent}
                                    variants={otherText}
                                    initial='initial'
                                    animate={
                                        nextAnimation ? 'delay' : 'animate'
                                    }
                                    exit='exit'
                                >
                                    {data.content}
                                </motion.p>
                            </AnimatePresence>
                        </FlexColumn>
                        <AnimatePresence exitBeforeEnter={true}>
                            <motion.img
                                src={data.imageURL}
                                alt={data.title}
                                key={currentContent}
                                variants={imgAndTitle}
                                initial='initial'
                                animate={nextAnimation ? 'delay' : 'animate'}
                                exit='exit'
                            />
                        </AnimatePresence>
                    </ContentWrapper>
                </Wrapper>
            </Background>
            <Outlet />
        </>
    );
};

export default Technology;

const navList = {
    initial: { ...hide },
    animate: {
        ...show,
        transition: {
            delayChildren: 2.6,
            staggerChildren: 0.2,
        },
    },
};

const listItem = {
    initial: { ...hide, translateX: -40 },
    animate: {
        ...show,
        translateX: 0,
        transition: { ...ease, duration: 1 },
    },
};

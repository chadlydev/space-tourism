import { Outlet } from 'react-router-dom';
import Background from '../../components/Background';
import useSetCrewData from './useGetData';
import { Divider } from '../../components/Divider';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import useNextAnimation from '../../hooks/useNextAnimation';
import {
    hide,
    imgAndTitle,
    otherText,
    pageTitle,
    show,
} from '../../constants/variants';
import { Circle, ContentWrapper, FlexColumn, Wrapper } from './styles';

const Crew = () => {
    const [currentContent, setCurrentContent] = useState(1);
    const { data } = useSetCrewData(currentContent);
    const { nextAnimation } = useNextAnimation('/crew');

    return (
        <>
            <AnimatePresence exitBeforeEnter={true}>
                <Background page='crew'>
                    <Wrapper>
                        <ContentWrapper>
                            <AnimatePresence exitBeforeEnter={true}>
                                <motion.img
                                    src={data.imageURL}
                                    alt={data.name}
                                    key={currentContent}
                                    variants={imgAndTitle}
                                    initial='initial'
                                    animate={
                                        nextAnimation ? 'delay' : 'animate'
                                    }
                                    exit='exit'
                                />
                            </AnimatePresence>
                            <Divider
                                variants={line}
                                initial='initial'
                                animate='animate'
                            />
                            <motion.h5
                                variants={pageTitle}
                                initial='initial'
                                animate='animate'
                            >
                                <span>02</span>Meet your crew
                            </motion.h5>
                            <motion.nav
                                variants={otherText}
                                initial='initial'
                                animate='animate'
                            >
                                <ul>
                                    <li>
                                        <Circle
                                            onClick={() => setCurrentContent(1)}
                                            className={
                                                currentContent === 1
                                                    ? 'active'
                                                    : 'inactive'
                                            }
                                        />
                                    </li>
                                    <li>
                                        <Circle
                                            onClick={() => setCurrentContent(2)}
                                            className={
                                                currentContent === 2
                                                    ? 'active'
                                                    : 'inactive'
                                            }
                                        />
                                    </li>
                                    <li>
                                        <Circle
                                            onClick={() => setCurrentContent(3)}
                                            className={
                                                currentContent === 3
                                                    ? 'active'
                                                    : 'inactive'
                                            }
                                        />
                                    </li>
                                    <li>
                                        <Circle
                                            onClick={() => setCurrentContent(4)}
                                            className={
                                                currentContent === 4
                                                    ? 'active'
                                                    : 'inactive'
                                            }
                                        />
                                    </li>
                                </ul>
                            </motion.nav>
                            <FlexColumn>
                                <AnimatePresence exitBeforeEnter={true}>
                                    <motion.h4
                                        key={currentContent + 1}
                                        variants={otherText}
                                        initial='initial'
                                        animate={
                                            nextAnimation ? 'delay' : 'animate'
                                        }
                                        exit='exit'
                                    >
                                        {data.title}
                                    </motion.h4>
                                </AnimatePresence>
                                <AnimatePresence exitBeforeEnter={true}>
                                    <motion.h3
                                        key={currentContent + 2}
                                        variants={imgAndTitle}
                                        initial='initial'
                                        animate={
                                            nextAnimation ? 'delay' : 'animate'
                                        }
                                        exit='exit'
                                    >
                                        {data.name}
                                    </motion.h3>
                                </AnimatePresence>
                                <AnimatePresence exitBeforeEnter={true}>
                                    <motion.p
                                        key={currentContent + 3}
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
                        </ContentWrapper>
                    </Wrapper>
                </Background>
            </AnimatePresence>
            <Outlet />
        </>
    );
};

export default Crew;

const line = {
    initial: {
        ...hide,
    },
    animate: {
        ...show,
        transition: {
            delay: 1,
        },
    },
};

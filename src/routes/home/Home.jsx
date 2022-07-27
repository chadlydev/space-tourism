import Background from '../../components/Background';
import { motion } from 'framer-motion';
import { Banner, ExploreButton, Wrapper } from './styles';
import { variants } from './variants';
import { useNavigate } from 'react-router-dom';

const Home = ({ hasVisited }) => {
    const navigate = useNavigate();

    const noDelay = {
        ...variants,
        title: {
            ...variants.title,
            animate: {
                ...variants.title.animate,
                transition: {
                    ...variants.title.animate.transition,
                    delay: 0,
                },
            },
        },
        text: {
            ...variants.text,
            animate: {
                ...variants.text.animate,
                transition: {
                    ...variants.text.animate.transition,
                    delay: 0.6,
                },
            },
        },
        button: {
            ...variants.button,
            animate: {
                ...variants.button.animate,
                transition: {
                    ...variants.button.animate.transition,
                    delay: 1.2,
                },
            },
        },
    };

    return (
        <Background page='home'>
            <Wrapper>
                <Banner>
                    <motion.h5
                        variants={hasVisited ? noDelay.text : variants.text}
                        initial='initial'
                        animate='animate'
                    >
                        So, you want to travel to
                    </motion.h5>
                    <motion.h1
                        variants={hasVisited ? noDelay.title : variants.title}
                        initial='initial'
                        animate='animate'
                    >
                        Space
                    </motion.h1>
                    <motion.p
                        variants={hasVisited ? noDelay.text : variants.text}
                        initial='initial'
                        animate='animate'
                    >
                        Let’s face it: if you want to go to space, you might as
                        well genuinely go to outer space and not hover kind of
                        on the edge of it. Well sit back, and relax because
                        we’ll give you a truly out of this world experience!
                    </motion.p>
                </Banner>
                <ExploreButton
                    onClick={() => navigate('/destination')}
                    variants={hasVisited ? noDelay.button : variants.button}
                    initial='initial'
                    animate='animate'
                >
                    Explore
                </ExploreButton>
            </Wrapper>
        </Background>
    );
};

export default Home;

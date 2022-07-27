import Background from '../../components/Background';
import { motion } from 'framer-motion';
import { Banner, ExploreButton, Wrapper } from './styles';
import * as variants from './variants';
import { useNavigate } from 'react-router-dom';

const Home = ({ hasVisited }) => {
    const navigate = useNavigate();

    return (
        <Background page='home'>
            <Wrapper>
                <Banner>
                    <motion.h5
                        variants={variants.otherText}
                        initial='initial'
                        animate={hasVisited ? 'delay' : 'animate'}
                    >
                        So, you want to travel to
                    </motion.h5>
                    <motion.h1
                        variants={variants.title}
                        initial='initial'
                        animate={hasVisited ? 'delay' : 'animate'}
                    >
                        Space
                    </motion.h1>
                    <motion.p
                        variants={variants.otherText}
                        initial='initial'
                        animate={hasVisited ? 'delay' : 'animate'}
                    >
                        Let’s face it: if you want to go to space, you might as
                        well genuinely go to outer space and not hover kind of
                        on the edge of it. Well sit back, and relax because
                        we’ll give you a truly out of this world experience!
                    </motion.p>
                </Banner>
                <ExploreButton
                    onClick={() => navigate('/destination')}
                    variants={variants.button}
                    initial='initial'
                    animate={hasVisited ? 'delay' : 'animate'}
                >
                    Explore
                </ExploreButton>
            </Wrapper>
        </Background>
    );
};

export default Home;

import { useLocation } from 'react-router-dom';
import { useLayoutEffect, useState } from 'react';

const useSetTechnologyData = () => {
    const location = useLocation();
    const [isDesktop, setIsDesktop] = useState(false);
    const [data, setData] = useState({
        title: 'Launch Vehicle',
        content:
            "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
        imageURL: '/assets/technology/image-launch-vehicle-landscape.jpg',
    });

    useLayoutEffect(() => {
        if (window.innerWidth >= 1024) {
            setIsDesktop(true);
        } else {
            setIsDesktop(false);
        }

        switch (location.pathname) {
            case '/technology/launch-vehicle':
                setData({
                    title: 'Launch Vehicle',
                    content:
                        "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
                    imageURL: `/assets/technology/image-launch-vehicle-${
                        isDesktop ? 'portrait' : 'landscape'
                    }.jpg`,
                });
                break;
            case '/technology/spaceport':
                setData({
                    title: 'Spaceport',
                    content:
                        'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.',
                    imageURL: `/assets/technology/image-spaceport-${
                        isDesktop ? 'portrait' : 'landscape'
                    }.jpg`,
                });
                break;
            case '/technology/space-capsule':
                setData({
                    title: 'Space Capsule',
                    content:
                        "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
                    imageURL: `/assets/technology/image-space-capsule-${
                        isDesktop ? 'portrait' : 'landscape'
                    }.jpg`,
                });
                break;
            default:
                return;
        }
    }, [location, isDesktop]);
    return { data };
};

export default useSetTechnologyData;

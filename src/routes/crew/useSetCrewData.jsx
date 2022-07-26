import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const UseSetCrewData = () => {
    const location = useLocation();
    const [data, setData] = useState({
        title: 'Commander',
        name: 'Douglas Hurley',
        content:
            'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
        imageURL: '/assets/crew/image-douglas-hurley.webp',
    });

    useEffect(() => {
        switch (location.pathname) {
            case '/crew/commander':
                setData({
                    title: 'Commander',
                    name: 'Douglas Hurley',
                    content:
                        'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
                    imageURL: '/assets/crew/image-douglas-hurley.webp',
                });
                break;
            case '/crew/mission-specialist':
                setData({
                    title: 'Mission Specialist',
                    name: 'Mark Shuttleworth',
                    content:
                        'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
                    imageURL: '/assets/crew/image-mark-shuttleworth.webp',
                });
                break;
            case '/crew/pilot':
                setData({
                    title: 'Pilot',
                    name: 'Victor Glover',
                    content:
                        'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.',
                    imageURL: '/assets/crew/image-victor-glover.webp',
                });
                break;
            case '/crew/flight-engineer':
                setData({
                    title: 'Flight Engineer',
                    name: 'Anousheh Ansari',
                    content:
                        'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.',
                    imageURL: '/assets/crew/image-anousheh-ansari.webp',
                });
                break;
            default:
                return;
        }
    }, [location]);
    return { data };
};

export default UseSetCrewData;

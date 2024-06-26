import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import process1 from '../../assets/images/process/process1.png'
import process2 from '../../assets/images/process/process2.png'
import process3 from '../../assets/images/process/process3.png'
import process4 from '../../assets/images/process/process4.png'
import process5 from '../../assets/images/process/process5.png'
import AnimatedParagraph from '../AnimatedPara';


const data = [
    {
        id: 1,
        title: "Market Research",
        description: "We leverage market research techniques and user testing to identify core user needs and validate product concepts.",
        icon: process1
    },
    {
        id: 2,
        title: "Product Design",
        description: "We translate validated concepts into high-fidelity prototypes for user feedback and usability testing.",
        icon: process2
    },
    {
        id: 3,
        title: "Development",
        description: "We utilize agile methodologies for rapid development and implementation of the final product.",
        icon: process3
    },
    {
        id: 4,
        title: "Go-To-Market Strategy",
        description: "We partner with you to develop a comprehensive go-to-market strategy and execute a flawless launch to maximize brand awareness and user acquisition.",
        icon: process4
    },
    {
        id: 5,
        title: "Continuous Optimization",
        description: "We leverage user insights to continuously improve performance and foster lasting engagement.",
        icon: process5
    }

]

const Card = ({ id, title, description, activeCard, onCardClick, pauseTimer, resumeTimer, time }) => {
    const [isOpen, setIsOpen] = useState(activeCard === id);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        setIsOpen(activeCard === id);
    }, [activeCard, id]);

    const handleHover = () => {
        setIsHovered(true);
        pauseTimer();
    };

    const handleHoverExit = () => {
        setIsHovered(false);
        resumeTimer();
    };

    return (
        <div
            className={`flex flex-col w-full border-opacity-40 border-white py-3 md:py-4 gap-2 cursor-pointer ${!isOpen && 'opacity-40  border-b-2'}`}
            onMouseEnter={handleHover}
            onMouseLeave={handleHoverExit}
            onClick={() => onCardClick(id)}
        >
            <div className='grid grid-cols-9 flex-1'>
                <p className={`col-span-1 font-normal text-2xl md:text-5xl`}>0{id}</p>
                <p className='col-span-8 font-normal text-2xl md:text-5xl'>{title}</p>
            </div>
            {isOpen &&
                <div className='grid grid-cols-10'>
                    <p className='font-normal text-xs md:text-lg col-span-10 col-start-2 '>{description}</p>
                </div>
            }
            {isOpen &&
                <div>
                    <motion.div
                        style={{ scaleX: activeCard ? 1 : 0, transformOrigin: "left" }}
                        className='w-full h-0.5 bg-white'
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: isHovered ? time / 240 : activeCard ? 1 : 0 }}
                        transition={{ duration: 6 }}
                    />
                    <div className='w-full h-[1px] bg-white opacity-30 mb-0.5' />
                </div>
            }
        </div>
    );
};

const Landing6 = () => {
    const [time, setTime] = useState(0);
    const [activeCard, setActiveCard] = useState(1);
    const [timerPaused, setTimerPaused] = useState(false);
    const isMobile = window.innerWidth < 768;
    const [ref, inView] = useInView(
        isMobile ? {
            triggerOnce: true,
            threshold: 0.1,
        } : {
            triggerOnce: true,
            threshold: 0.1,
        }
    );

    React.useEffect(() => {
        if (inView) {
            setActiveCard(1);
        }
    }, [inView]);

    const handleCardClick = (id) => {
        setActiveCard(id);
        setTime(0);
    };

    const pauseTimer = () => {
        setTimerPaused(true);
    };

    const resumeTimer = () => {
        setTimerPaused(false);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            if (!timerPaused) {
                setActiveCard((prevActiveCard) => (prevActiveCard === 5 ? 1 : prevActiveCard + 1));
                setTime(0);
            }
        }, 4000);

        const interval = setInterval(() => {
            if (!timerPaused && time < 240) {
                setTime((prevTime) => prevTime + 1);
            }
        }, 1000 / 60);

        return () => {
            clearTimeout(timer);
            clearInterval(interval);
        };
    }, [activeCard, timerPaused, time]);

    return (
        <div className='w-full px-6 md:px-24 pb-0 md:pb-16' ref={ref}>
            <AnimatedParagraph className='w-full font-normal text-4xl md:text-8xl !leading-tight uppercase text-center pb-10 md:pb-[70px]'>Process & Approach</AnimatedParagraph>
            <div className='w-full flex flex-col-reverse xl:flex-row overflow-hidden gap-x-16 gap-y-6'>
                <div className='flex xl:w-[54%] h-full flex-col my-auto'>
                    {data.map((cardDetail) => (
                        <Card
                            key={cardDetail.id} 
                            id={cardDetail.id}
                            title={cardDetail.title}
                            description={cardDetail.description}
                            activeCard={activeCard}
                            onCardClick={handleCardClick}
                            pauseTimer={pauseTimer}
                            resumeTimer={resumeTimer}
                            time={time}
                        />
                    ))}
                </div>
                <div className='flex md:flex-1 h-full flex-col justify-center'>
                    <img src={data[activeCard - 1].icon} alt="process" className='w-full mx-auto rounded-2xl' />
                </div>
            </div>
        </div>
    );
};

export default Landing6;

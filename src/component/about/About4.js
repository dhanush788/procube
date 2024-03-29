import React, { useEffect } from 'react';
import '../hero/hero.css';
import icon1 from '../../assets/images/About/icon1.svg';
import icon2 from '../../assets/images/About/icon2.svg';
import icon3 from '../../assets/images/About/icon3.svg';
import icon4 from '../../assets/images/About/icon4.svg';
import AnimatedParagraph from '../AnimatedPara';


const data = [
    {
        heading: "Innovation",
        icon: icon1,
        details: "We believe in the power of innovation as the driving force behind progress. We're dedicated to staying at the forefront of technological advancements and leveraging them to create groundbreaking solutions for our clients. Innovation isn't just a buzzword; it's the foundation of everything we do",
    },
    {
        heading: "Partnership",
        icon: icon2,
        details: "We see ourselves as more than just service providers; we're your dedicated partners on the journey to success. Collaboration is in our DNA, and we work closely with our clients, valuing their insights and perspectives as we co-create solutions that make a real impact.",
    },
    {
        heading: "Empathy",
        icon: icon3,
        details: "Our clients' success is at the heart of our mission. We're committed to understanding their unique needs, challenges, and aspirations, and tailoring our solutions accordingly. We put ourselves in our clients' shoes, ensuring every project is designed to exceed expectations.",
    },
    {
        heading: "Excellence",
        icon: icon4,
        details: "We don't just aim for the ordinary; we strive for excellence in every project we undertake. Our meticulous attention to detail, commitment to quality, and unwavering pursuit of excellence are the cornerstones of our work. We don't consider a project complete until it exceeds the highest standards.     ",
    },
];

const Card = ({ heading, icon, details, index }) => {

    const isLastCard = index === data.length - 1;

    return (
        <div
            className={`overflow-hidden flex w-full border-t-[2px] border-opacity-40 border-white ${isLastCard ? 'border-b-[2px]' : ''} gap-2 md:gap-4 py-5 md:py-12 cursor-pointer`}
            key={index}
        >
            <div className='md:min-h-[210px] grid grid-cols-12 flex-1 landing'>
                <img src={icon} alt="icon" className='col-span-12 md:col-span-3 w-2/10 md:w-6/12 my-auto block md:mx-auto' />
                <div className='col-span-12 md:col-span-8 flex flex-col justify-center gap-y-5 md:gap-y-10'>
                    <p className=' font-normal text-2xl md:text-4xl'>{heading}</p>
                    <p className='text-sm md:text-lg opacity-40'>{details}</p>
                </div>
            </div>
        </div>
    );
};

const About4 = () => {
    return (
        <div className='px-6 md:px-24 pt-12 md:pt-24 flex flex-col  '>
            <AnimatedParagraph className='font-normal text-4xl md:text-8xl max-w-4xl text-center uppercase mx-auto pb-10 md:pb-[70px]'>Our Values</AnimatedParagraph>
                {data.map((cardDetail, index) => (
                    <Card
                        heading={cardDetail.heading}
                        icon={cardDetail.icon}
                        details={cardDetail.details}
                        index={index}
                        key={index}
                    />
                ))}
        </div>
    );
};

export default About4;

import React, { useEffect } from "react";
import icon2 from "../../assets/images/icons/icon2.svg";
import gsap from "gsap";
import { motion } from "framer-motion";
import arrowIcon from "../../assets/images/exploreMore.png";
import AnimatedParagraph from "../AnimatedPara";
import { blogdata } from "../../data/blogdata";
import sanityClient from "../../sanity";

const filter = [
  "All",
  "Product Design",
  "Visual Design",
  "Website Design",
  "Case Study",
];

const Card = ({ heading, icon, date, index, slug }) => {
  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    if (!isMobile) {
      gsap.set(`.landing #img-${index}`, {
        x: "-100%",
        duration: 0.25,
        opacity: 0,
        transformOrigin: "right bottom",
      });
      gsap.set(`.landing #text-${index}`, {
        x: "-25%",
        duration: 0.25,
        width: "137%",
        opacity: 1,
        transformOrigin: "right bottom",
      });
    }
  }, [index]);

  const handleHover = () => {
    const isMobile = window.innerWidth < 768;

    if (!isMobile) {
      gsap.to(`.landing #img-${index}`, {
        x: 0,
        duration: 0.25,
        opacity: 1,
        transformOrigin: "right bottom",
      });
      gsap.to(`.landing #text-${index}`, {
        x: 0,
        duration: 0.25,
        width: "100%",
        opacity: 1,
        transformOrigin: "right bottom",
      });
    }
  };

  const handleHoverExit = () => {
    const isMobile = window.innerWidth < 768;

    if (!isMobile) {
      gsap.to(`.landing #img-${index}`, {
        x: "-100%",
        duration: 0.25,
        opacity: 0,
        transformOrigin: "right bottom",
      });
      gsap.to(`.landing #text-${index}`, {
        x: "-25%",
        duration: 0.25,
        width: "137%",
        opacity: 1,
        transformOrigin: "right bottom",
      });
    }
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  return (
    <motion.div
      className="overflow-hidden flex w-full odd:border-y-[2px] border-opacity-40 border-white gap-2 md:gap-4 py-5 md:py-8 cursor-pointer"
      key={index}
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverExit}
      onClick={() => (window.location.href = `/insight/${slug}`)}
    >
      <div className="md:min-h-[210px] grid grid-cols-12 flex-1 landing gap-y-5">
        <img
          id={`img-${index}`}
          src={icon}
          alt="icon"
          className="col-span-12 md:col-span-3 w-full md:w-11/12 my-auto block rounded-2xl"
        />
        <div
          id={`text-${index}`}
          className="col-span-12 md:col-span-8 flex flex-col justify-center md:justify-around gap-y-5 md:gap-y-3"
        >
          <p className=" font-normal text-2xl md:text-5xl">{heading}</p>
          <div className="py-2 px-5 md:py-3 md:px-8 rounded-[78px] bg-[#1A1A1A] mr-auto">
            <p className="text-sm md:text-lg">{formatDate(date)}</p>
          </div>
        </div>
        <div className=" md:col-span-1 w-full hidden md:block">
          <img src={icon2} alt="icon" className={` w-9 ml-auto }`} />
        </div>
      </div>
    </motion.div>
  );
};

const Insight1 = ({ Heading, filterShow }) => {
  const [id, setId] = React.useState("All");
  const [data, setData] = React.useState();
  const [blogdata, setBlogdata] = React.useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "blog"] | order(publishedAt desc){
                  title,
                  subtitle,
                  publishedAt,
                  slug,
                  description,
                  "imageUrl": image.asset->url, 
                  content,
                  tags,
                  ul
                }`
      )
      .then((data) => {
        console.log(data, "Sanity Data");
        setData(data);
        setBlogdata(data);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, []);

  const handleData = (id) => {
    setId(id);
    if (id === "All") {
      setData(blogdata);
    } else {
      const newData = blogdata.filter((item) => item.tags?.includes(id));
      setData(newData);
    }
  };

  return (
    <div
      className={`px-6 md:px-24  flex flex-col relative  ${
        filterShow ? "pt-24 md:pt-48" : "pt-12 md:pt-24"
      }`}
    >
      <AnimatedParagraph className="font-normal text-4xl md:text-8xl max-w-4xl text-center uppercase mx-auto pb-6 md:pb-[40px]">
        {Heading}
      </AnimatedParagraph>
      <div
        className="flex flex-row gap-4 md:gap-8 overflow-x-auto lg:justify-center pb-4 md:pb-[30px]"
        style={{ scrollbarWidth: "none" }}
      >
        {filterShow &&
          filter.map((item, index) => (
            <div
              className={`flex items-center px-5 py-2 md:px-10 md:py-3 rounded-full cursor-pointer ${
                item === id ? "bg-[#7605C1]" : "border-[0.25px]"
              }`}
              key={index}
              onClick={() => handleData(item)}
              style={{ whiteSpace: "nowrap", minWidth: "fit-content" }}
            >
              <p className="text-sm md:text-lg">{item}</p>
            </div>
          ))}
      </div>

      <div>
        {data?.map((cardDetail, index) => (
          <Card
            heading={cardDetail?.title}
            icon={cardDetail?.imageUrl}
            date={cardDetail?.publishedAt}
            slug={cardDetail?.slug?.current}
            index={index}
            key={index}
          />
        ))}
      </div>
      <a href="../insight">
        <img
          src={arrowIcon}
          alt="arrow"
          className="w-24 md:w-36 mx-auto my-10 md:my-16 hover:opacity-55 cursor-pointer"
        />
      </a>
    </div>
  );
};

export default Insight1;

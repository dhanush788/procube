import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar2 from "../component/hero/Navbar2";
import Navbar from "../component/hero/Navbar";
import Landing1 from "../component/hero/Landing1";
// import Landing2 from '../component/hero/Landing2';
import Landing3 from "../component/hero/Landing3";
import Landing4 from "../component/hero/Landing4";
import Landing5 from "../component/hero/Landing5";
import Marquee from "../component/hero/Marquee";
import Lanidng7 from "../component/hero/Landing7";
import Landing10 from "../component/hero/Landing10";
import Landing6 from "../component/hero/Landing6";
import Landing8 from "../component/hero/Landing8";
import Landing9 from "../component/hero/Landing9";
import Footer from "../component/hero/Footer";
import Preloader from "../component/proloader";
import Popup from "../component/Popup";
import Brands from "../component/Brands";
// import Whatsapp from '../component/Whatsapp';

function Hero() {
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [closedOnce, setClosedOnce] = useState(false);
  const landing5Ref = React.useRef(null);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);

    setTimeout(() => {
      setLoading2(true);
    }, 5000);

    const scrollHandler = () => {
      if (landing5Ref.current) {
        const landing5Position =
          landing5Ref.current.getBoundingClientRect().top;
        if (landing5Position < window.innerHeight) {
          setOpen(true);
        }
      }

      const totalHeight = document.body.clientHeight;
      const progress = (window.pageYOffset / totalHeight) * 100;
      if (progress > 100) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };

    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const handleClose = () => {
    setOpen(false);
    setClosedOnce(true);
  };

  const imageSources = [
    "/Brandspng/1.png",
    "/Brandspng/2.png",
    "/Brandspng/3.png",
    "/Brandspng/4.png",
    "/Brandspng/5.png",
    "/Brandspng/7.png",
    "/Brandspng/8.png",
    "/Brandspng/9.png",
    "/Brandspng/10.png",
    "/Brandspng/11.png",
    "/Brandspng/12.png",
    "/Brandspng/13.png",
    "/Brandspng/14.png",
    "/Brandspng/15.png",
    "/Brandspng/16.png",
    "/Brandspng/17.png",
    "/Brandspng/18.png",
    "/Brandspng/19.png",
    "/Brandspng/20.png",
    "/Brandspng/21.png",
    "/Brandspng/22.png",
    "/Brandspng/23.png",
    "/Brandspng/24.png",
    "/Brandspng/25.png",
  ];

  const repeatedImageSources = Array.from({ length: 20 }, () => [
    ...imageSources,
  ]).flat();

  return (
    <div className=" text-white bg-[#121212] ">
      {loading ? (
        <Preloader />
      ) : (
        <div>
          <Navbar2 />
          {navbar && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={navbar ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <Navbar />
            </motion.div>
          )}
          <div className="scroll-progress">
            <Landing1 />
          </div>
          {/* <Landing2 /> */}
          {loading2 && <Landing3 />}
          <Landing4 />
          <Landing5 />
          <div ref={landing5Ref}>
            {/* <Marquee /> */}
            <Lanidng7 />
          </div>
          <div className="clientsImgContainer">
            <Brands
              imageSources={repeatedImageSources}
              initialAnimateValue="-160%"
              hoverDuration="1800"
              duration="1100"
            />
          </div>
          {loading2 && <Landing10 />}
          <Landing6 />
          <Landing8 />
          <Landing9 />
          <Footer />
        </div>
      )}
      {!closedOnce && <Popup open={open} handleClose={handleClose} />}
    </div>
  );
}

export default Hero;

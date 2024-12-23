import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

function Content({ title, textBefore, textGradient, textAfter }) {
  const [isRevealed, setIsRevealed] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const element = containerRef.current;
        const rect = element.getBoundingClientRect();

        if (rect.top < window.innerHeight * 0.8) {
          setIsRevealed(true);
        } else {
          setIsRevealed(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="w-full mx-auto flex flex-col content-container"
      ref={containerRef}
    >
      <div className="mb-10 flex justify-center items-center relative">
        <div className="md:mx-44 md:px-52 md:py-44 px-14 text-center flex flex-col justify-center items-center h-3/4">
          <div className="flex justify-center gap-3 items-center mt-5 mb-5">
            <span className="w-2 h-2 rounded-full bg-[#165BB8]"></span>
            <p className="font-inter text-base font-semibold leading-6 tracking-tight uppercase text-[#165BB8]">
              {title}
            </p>
            <span className="w-2 h-2 rounded-full bg-[#165BB8]"></span>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isRevealed ? 1 : 0, y: isRevealed ? 0 : 50 }}
            transition={{ duration: 1, delay: 0.2 }}
            className={`font-quickSan md:text-[40px] leading-[129%] font-bold tracking-[-0.4px]`}
          >
            {textBefore}{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#328AE2] to-[#FF0D39]">
              {textGradient}{" "}
            </span>
            {textAfter}
          </motion.p>
        </div>
      </div>
    </div>
  );
}

export default Content;

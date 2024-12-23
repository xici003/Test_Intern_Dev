import { useState, useEffect, useRef } from "react";

function Quote() {
  const [isHighlighted, setIsHighlighted] = useState(false);
  const quoteRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const element = quoteRef.current;

      if (element) {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight / 2;

        setIsHighlighted(rect.top >= 0 && rect.top < windowHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHighlighted]);

  return (
    <div className="w-full bg-image-quote min-h-screen bg-cover bg-center mt-24 relative parent">
      <div
        className={`gradient-overlay ${isHighlighted ? "z-0" : "z-10"}`}
      ></div>
      <div
        className="absolute bottom-14 left-1/2 -translate-x-1/2"
        ref={quoteRef}
      >
        <p
          className={`text-white font-quicksand md:text-4xl text-lg font-medium leading-[148%] tracking-[-0.4px] ${
            isHighlighted
              ? "highlight opacity-80 transition duration-600"
              : " opacity-60"
          }`}
        >
          “Tình bằng hữu, sự chính trực và tinh thần tự nâng tầm hun đúc nên
          tinh thần của một tổ chức không ngừng học tập để kiến tạo giá trị.”
        </p>
      </div>
    </div>
  );
}

export default Quote;

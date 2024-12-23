import { Home, MessageCircle, PhoneCall, Settings, User } from "lucide-react";
import { useState } from "react";

const items = [
  {
    logo: <Home />,
  },
  {
    logo: <User />,
  },
  {
    logo: <MessageCircle />,
  },
  {
    logo: <PhoneCall />,
  },
  {
    logo: <Settings />,
  },
];

function Navigation() {
  const [activeIndex, setActiveIndex] = useState(0); // State to store hover index
  const itemWidth = 100 / items.length + "%";

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(0); // Reset hover state on leave
  };

  const indicatorStyle = {
    transform:
      activeIndex !== null
        ? `translateX(${activeIndex * 5 * (100 / items.length)}%)`
        : "translateX(0)", // Indicator stays at initial position when not hovering
  };

  return (
    <div className="navigation mt-24 md:mt-0">
      <ul className="flex justify-around md:static gap-8 w-full">
        {items.map((item, index) => (
          <li
            key={index}
            className={`list-none relative  ${
              activeIndex === index ? "active" : ""
            }`}
            style={{ width: `${100 / items.length}%` }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <a className="relative flex flex-col h-full w-full justify-center items-center ">
              <div className="absolute opacity-0 text">
                <div className="flex gap-3 items-center">
                  <span className="w-2 h-2 rounded-full bg-[#165BB8]"></span>
                  <p className="font-inter md:text-sm text-[12px] font-semibold uppercase text-[#165BB8]">
                    ĐỐI TÁC TIÊU BIỂU
                  </p>
                </div>
                <span className="font-inter md:text-base text-[14px] font-semibold leading-6 tracking-tight uppercase text-gradient-bg">
                  ĐỒNG HÀNH CÙNG AMI&M
                </span>
              </div>

              <span className="relative block transition duration-150 icon">
                {item.logo}
              </span>
            </a>
          </li>
        ))}
      </ul>
      <div className="indicator" style={indicatorStyle}></div>
    </div>
  );
}

export default Navigation;

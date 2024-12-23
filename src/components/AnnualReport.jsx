import React, { useState, useEffect, useRef } from "react";

const AnnualReport = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const listRef = useRef(null);

  const items = [
    {
      title: "Với cán bộ nhân viên",
      content:
        "Cảm thấy gắn kết, được trân trọng, được tạo cơ hội để khai phá, phát triển, khẳng định giá trị bản thân",
      url: "./handIcon.svg",
      image: "./img1.png",
    },
    {
      title: "với khách hàng",
      url: "./userIcon.svg",
      content:
        "Cung cấp các sản phẩm - dịch vụ theo tiêu chuẩn quốc tế, mang đến cho khách hàng những trải nghiệm tốt nhất",
      image: "./img2.jpg",
    },
    {
      title: "Với đối tác",
      url: "./ShakeHandIcon.svg",
      content:
        "Tin tưởng và muốn hợp tác dài lâu trên nền tảng của sự phát triển bền vững và hướng tới những giá trị tốt đẹp",
      image: "./img1.png",
    },
    {
      title: "Với cộng đồng",
      url: "./CircleIcon.svg",
      content:
        "Tin tưởng và muốn hợp tác dài lâu trên nền tảng của sự phát triển bền vững và hướng tới những giá trị tốt đẹp",
      image: "./img1.png",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const itemsList = listRef.current.querySelectorAll("li");
      let newIndex = activeIndex;

      itemsList.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight) {
          newIndex = index + 1;
        }
      });

      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex);
      }
    };

    const listElement = listRef.current;
    listElement.addEventListener("scroll", handleScroll);

    return () => {
      listElement.removeEventListener("scroll", handleScroll);
    };
  }, [activeIndex]);

  return (
    <div className="w-full min-h-[500px]">
      <div className="mx-auto">
        <div className="grid md:grid-cols-2 gap-6 relative grid-areas ">
          {/* Left Content */}
          <div className="md:col-span-1 md:order-1 order-2 mt-52 md:mt-0">
            <div className="relative">
              <div className="grid md:grid-cols-[1fr_4fr] gap-4">
                {/* Cột 1: Counter */}
                <div className="sticky top-20 flex justify-center">
                  <small className="text-sm font-medium">
                    {String(activeIndex).padStart(2, "0")}
                  </small>
                  <span className="text-sm">/05</span>
                </div>

                {/* Cột 2: Danh sách mục */}
                <div
                  ref={listRef}
                  className="overflow-y-auto h-[calc(100vh-100px)] scrollbar-hide"
                >
                  <ul className="md:space-y-24 space-y-10 md:mx-16 sm:mx-10">
                    {items.map((item, index) => (
                      <li
                        key={index}
                        className={`cursor-pointer ${
                          activeIndex === index + 1
                            ? "font-bold text-blue-600"
                            : ""
                        } border border-gray-300 rounded-2xl mx-3 p-5 md:border-none`}
                      >
                        <img src={item.url} alt="icon" className="w-20 h-20" />
                        <p className="font-quicksand text-[26px] font-bold leading-[130%] tracking[-1.04px] uppercase text-[#165BB8] my-3">
                          {item.title}
                        </p>
                        <p className="font-inter text-[18px] font-medium leading-[150%] tracking-[-0.36px]">
                          {item.content}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="col-span-1 md:order-2 order-1">
            <div className="relative flex justify-center">
              {items.map((item, index) => (
                <div
                  key={index}
                  className={`absolute transition-all duration-700 ease-in-out ${
                    activeIndex === index + 1
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-90"
                  }`}
                >
                  <div
                    className="md:w-[500px] md:h-[300px] w-[300px] h-[200px] bg-cover bg-center rounded-xl"
                    style={{ backgroundImage: `url(${item.image})` }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnualReport;

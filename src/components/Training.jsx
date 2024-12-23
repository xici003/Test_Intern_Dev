import { useEffect, useState } from "react";
import ContentItem from "./ContentItem";
import CircleItem from "./CircleItem";

const items = [
  {
    id: 0,
    title: "Training",
    header: "Cung cấp dịch vụ ",
    img: "/img5.jpg",
    content: "Quản lý & Khai thác Tài sản, Chuỗi cơ sở lưu trú.",
  },
  {
    id: 1,
    title: "Management",
    header: "Quản lý cơ sở",
    img: "/img2.jpg",
    content: "Quản lý & Khai thác Tài sản, Chuỗi cơ sở lưu trú.",
  },
  {
    id: 2,
    title: "Management",
    header: "Quản lý cơ sở",
    img: "/img2.jpg",
    content: "Quản lý & Khai thác Tài sản, Chuỗi cơ sở lưu trú.",
  },
  {
    id: 3,
    title: "Management",
    header: "Quản lý cơ sở",
    img: "/img5.jpg",
    content: "Quản lý & Khai thác Tài sản, Chuỗi cơ sở lưu trú.",
  },
  {
    id: 4,
    title: "Management",
    header: "Quản lý cơ sở",
    img: "/img4.png",
    content: "Quản lý & Khai thác Tài sản, Chuỗi cơ sở lưu trú.",
  },
];

function Training() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  const currentItem = items.find((item) => item.id === activeIndex);
  return (
    <div className="w-full min-h-screen mt-32">
      <div className="grid md:grid-cols-2 md:gap-4 grid-cols-1 gap-8 ">
        <div className="md:col-span-1 flex flex-col md:bg-cover md:bg-center relative bg-img ">
          <div className="absolute inset-0 bg-white bg-opacity-95 hidden md:block"></div>
          <div className="md:px-24 md:pt-24 px-5 z-10">
            <ContentItem
              title="Lĩnh vực đầu tư"
              textLg="Ami&M là đối tác tư vấn - đầu tư bền vững, phát triển dịch vụ cao cấp và nâng tầm giáo dục trải nghiệm."
              textSm="Với hệ sinh thái tối ưu, Ami&M truyền cảm hứng xây dựng sự thịnh vượng
            đích thực cho những Người đồng hành và tạo lập di sản xứng tầm cho thế
            hệ tương lai."
              fontSize="text-3xl"
            />
          </div>

          <div className="relative ml-20 mt-16 hidden md:block">
            <div className=" rounded-full image-reversed bg-gradient opacity-30 bg-gradient-to-[217deg] from-[#3E4089] to-transparent"></div>
            <img
              className="absolute bottom-10 -left-10 w-[80%] h-[90%] image-reversed"
              src="./img3.png"
              alt="image-training"
            />
            <div className="absolute bottom-0 right-0 bg-gradient-to-t from-white to-transparent w-full h-2/3"></div>
          </div>
        </div>
        <div className="md:col-span-1 bg-white">
          <div className="relative w-full md:h-full h-screen overflow-hidden">
            <div className="absolute  w-[100%] md:h-[85%] h-[70%] md:rounded-full rounded-[170px] bg-circle overflow-hidden md:-top-20 md:-right-32">
              <img
                className="bg-cover bg-center image-reversed w-full h-full opacity-15"
                src={currentItem.img}
                alt="bg-img-circle"
              />
              <div className="flex flex-col items-end absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white pr-20 gap-4">
                <div className="text-right text-white font-inter  font-medium leading-[150%] uppercase">
                  <p className="text-18px">{currentItem.header} </p>
                  <p className="text-20px font-bold">{currentItem.content}</p>
                </div>
                <button className="flex justify-between items-center w-[200px] h-[60px] p-[14px] py-[14px] px-[37px] border rounded-full">
                  Tìm hiểu thêm
                  <img src="/Left2.svg" />
                </button>
              </div>
            </div>

            <CircleItem
              title="Training"
              activeIndex={activeIndex}
              id={0}
              top="top-24"
              left="left-24"
              smTop="top-0"
              smLeft="left-0"
            />
            <CircleItem
              title="Management"
              activeIndex={activeIndex}
              id={1}
              top="top-64"
              left="left-16"
              smTop="top-0"
              smLeft="left-32"
            />
            <CircleItem
              title="Training"
              activeIndex={activeIndex}
              id={2}
              bottom="bottom-72"
              left="left-32"
              smTop="top-0"
              smRight="right-4"
            />
            <CircleItem
              title="Hospitality"
              activeIndex={activeIndex}
              id={3}
              bottom="bottom-44"
              left="left-72"
              smTop="top-24"
              smLeft="left-16"
            />
            <CircleItem
              title="Consulting"
              activeIndex={activeIndex}
              id={4}
              bottom="bottom-36"
              right="right-32"
              smTop="top-24"
              smRight="right-20"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Training;

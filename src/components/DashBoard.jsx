import ContentItem from "./ContentItem";

const Items = [
  {
    icon: "/Icon1.svg",
    number: "686",
    unit: "tỷ",
    content: "Tổng tài sản và Vốn chủ sở hữu",
  },
  {
    icon: "/Icon2.svg",
    number: "93,9",
    unit: "tỷ",
    content: "Doanh thu thuần",
  },
  {
    icon: "/Icon3.svg",
    number: "24,6",
    unit: "tỷ",
    content: "Lợi nhuận gộp",
  },
  {
    icon: "/Icon4.svg",
    number: "20+",
    content: "Dự án trọng điểm",
  },
  {
    icon: "/Icon5.svg",
    number: "03",
    unit: "văn phòng",
    content: "Trên các tỉnh thành",
  },
];

function DashBoard() {
  return (
    <div className="w-full min-h-screen mt-5">
      <div className="grid md:grid-cols-2 md:gap-4 grid-cols-1 gap-8 ">
        <div className="md:col-span-1 flex flex-col md:px-16 p-6  sticky top-0 z-10 bg-white">
          <ContentItem
            fontSize="text-6xl"
            title="Từng bước phát triển"
            textLg="Dấu ấn Ami&M"
            textSm="Những con số chỉ là một phần của câu chuyện, ý nghĩa thực sự là những dấu ấn sâu đậm về sự đổi mới, trách nhiệm xã hội và sự tin cậy từ những Người đồng hành."
          />
        </div>
        <div className="md:col-span-1 flex flex-col gap-24">
          {Items.map((item, index) => (
            <div key={index} className="flex justify-start items-center">
              <img
                src={item.icon}
                alt="icon_dashboard"
                className="p-4 size-20 md:size-24"
              />
              <div className="flex flex-col md:ml-11 px-5">
                <h1 className="md:text-[#2A2B6B] text-transparent bg-clip-text bg-gradient-to-r from-[#328AE2] to-[#FF0D39] font-inter md:text-7xl text-4xl font-extrabold leading-[1.31] tracking-[-0.68px]">
                  {item.number}{" "}
                  <span className="font-semibold md:text-6xl text-3xl">
                    {item.unit}
                  </span>
                </h1>
                <p className="text-[#646464] font-semibold text-[20px] leading-[28px] tracking-[-0.2px] font-inter">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DashBoard;

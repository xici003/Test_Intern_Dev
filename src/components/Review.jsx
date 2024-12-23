import { useEffect } from "react";
import { useState } from "react";
import Navigation from "./Navigation";

const items = [
  {
    id: 1,
    title: "Hợp tác vững bền",
    content:
      " Chúng tôi thực sự hứng khởi khi đồng hành cùng Ami&M bởi ở đây có một đội ngũ nhân sự không chỉ giàu kinh nghiệm trong lĩnh vực ngân hàng - tài chính mà quan trọng hơn đầy nhiệt tâm với mong muốn đóng góp vào sự phát triển chung của quá trình giáo dục định hướng thế hệ trẻ.",
    name: "TS. Đinh Thanh Vân",
    address: "Phó trưởng Khoa Ngân hàng - Tài chính, ĐH Kinh tế, GHQG Hà Nội",
    avatar: "/avatar1.png",
    image: "/img5.png",
  },
  {
    id: 2,
    title: "Đồng hành cùng nhau",
    content:
      " Chúng tôi thực sự hứng khởi khi đồng hành cùng Ami&M bởi ở đây có một đội ngũ nhân sự không chỉ giàu kinh nghiệm trong lĩnh vực ngân hàng - tài chính mà quan trọng hơn đầy nhiệt tâm với mong muốn đóng góp vào sự phát triển chung của quá trình giáo dục định hướng thế hệ trẻ.",
    name: "TS. Đinh Thanh Tùng",
    address: "Phó trưởng Khoa Ngân hàng - Tài chính, ĐH Kinh tế, GHQG Hà Nội",
    avatar: "/avatar2.png",
  },
  {
    id: 3,
    title: "Phát triển bền vững",
    content:
      " Chúng tôi thực sự hứng khởi khi đồng hành cùng Ami&M bởi ở đây có một đội ngũ nhân sự không chỉ giàu kinh nghiệm trong lĩnh vực ngân hàng - tài chính mà quan trọng hơn đầy nhiệt tâm với mong muốn đóng góp vào sự phát triển chung của quá trình giáo dục định hướng thế hệ trẻ.",
    name: "TS. Cao Thị Luyên",
    address: "Phó trưởng Khoa Ngân hàng - Tài chính, ĐH Kinh tế, GHQG Hà Nội",
    avatar: "/avatar3.png",
  },
];

const avatars = [
  {
    id: 1,
    url: "/avatar1.png",
  },
  {
    id: 2,
    url: "/avatar2.png",
  },
  {
    id: 3,
    url: "/avatar3.png",
  },
];
function Review() {
  const [currentAvatarIndex, setCurrentAvatarIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentAvatarIndex((prevIndex) => (prevIndex + 1) % avatars.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [avatars]);

  const currentItem = items.find(
    (item) => item.id === avatars[currentAvatarIndex].id
  );

  return (
    <div className="w-full min-h-screen text-[#fff] relative">
      <div className="w-full absolute bg-[#102A4D] bg-vector md:bg-contain bg-cover">
        <div className="grid md:grid-cols-[2fr_1fr] grid-cols-1 ">
          <div className="md:p-24 md:ml-14 md:w-[80%] w-full px-6">
            {currentItem && (
              <>
                <div className="flex gap-3 items-center py-8">
                  <span className="w-2 h-2 rounded-full bg-[#fff]"></span>
                  <p className="font-inter text-sm font-normal leading-6 uppercase">
                    {currentItem.title}
                  </p>
                </div>
                <img
                  src={currentItem.avatar}
                  alt="avatar_small"
                  className="size-36 rounded-full bg-center mb-6 md:hidden"
                />
                <p className="font-semibold md:text-2xl text-lg leading-[150%] tracking-[-0.36px] font-inter">
                  {currentItem.content}
                </p>

                <div className="mt-6">
                  <p className="font-inter text-lg">{currentItem.name}</p>
                  <div className="flex gap-5 items-center mb-5 ml-3">
                    <span className="circle_review"></span>
                    <p className="font-inter text-sm font-normal leading-6">
                      {currentItem.address}
                    </p>
                    <span className="circle_review2"></span>
                  </div>
                </div>

                <div className="md:flex md:gap-8 md:items-center hidden">
                  {avatars.map((item, index) => (
                    <img
                      key={index}
                      src={item.url}
                      alt="avatar"
                      className="size-16 rounded-full bg-center"
                    />
                  ))}
                </div>
              </>
            )}
          </div>
          <div className="absolute bottom-15 right-0 md:w-[60%] md:h-full md:block hidden">
            <img src={currentItem.image} alt="avatar" />
          </div>
        </div>

        <Navigation />
      </div>
    </div>
  );
}

export default Review;

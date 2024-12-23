function ContentItem({ title, textLg, fontSize, textSm }) {
  return (
    <>
      <div className="flex gap-3 items-center mb-5">
        <span className="w-2 h-2 rounded-full bg-[#165BB8]"></span>
        <p className="font-inter text-base font-semibold leading-6 tracking-tight uppercase text-[#165BB8]">
          {title}
        </p>
      </div>
      <p
        className={`font-quicksand pb-7 ${fontSize} font-bold leading-[120%] tracking-[-1.28px] bg-clip-text text-transparent bg-gradient-to-r from-[#328AE2] to-[#FF0D39]`}
      >
        {textLg}
      </p>
      <p className="md:pr-28 font-medium text-[18px] leading-[150%] tracking-[-0.36px] font-inter">
        {textSm}
      </p>
    </>
  );
}

export default ContentItem;

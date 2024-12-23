function CircleItem({
  title,
  activeIndex,
  top,
  bottom,
  left,
  right,
  smTop,
  smBottom,
  smLeft,
  smRight,
  id,
  isSmall,
}) {
  return (
    <div
      className={`absolute py-4 px-5  ${
        isSmall
          ? `${smTop} ${smBottom} ${smLeft} ${smRight}`
          : `${top} ${bottom} ${left} ${right}`
      }  ${
        activeIndex === id ? "bg-[#303386]" : "bg-white"
      } rounded-full shadow-lg `}
    >
      <img src="/Layer2.svg" alt="circle-small" />
      <p
        className={`text-right text-sm font-medium ${
          activeIndex === id ? "text-white" : " text-[#165BB8]"
        } `}
      >
        {title}
      </p>
    </div>
  );
}

export default CircleItem;

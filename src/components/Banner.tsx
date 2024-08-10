import { useState } from "react";
import banner1 from "../assets/banner1.png";
import banner2 from "../assets/banner2.png";
import banner3 from "../assets/banner3.png";
import LeftArrow from "../assets/navigate_before.svg";
import RightArrow from "../assets/navigate_next.svg";

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "노인층의 경제적 자립을 위한\n사회적 기업입니다.",
      description: "니어니어가 더 나은 사회를 만드는 방법을 알아보세요!",
      backgroundImage: banner1,
    },
    {
      title: "유네스코 지속가능 발전 교육\n공식프로젝트입니다.",
      description: "니어니어는 유네스코의 인증을 받은 프로젝트입니다.",
      backgroundImage: banner2,
    },
    {
      title: "임연화 요리사님께\n20명의 손녀딸이 생긴 이야기",
      description: "청년들에게 자신의 온정을 나누며 사회가 따듯해 졌습니다.",
      backgroundImage: banner3,
    },
  ];

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleLearnMoreClick = () => {
    window.location.href = "http://absorbing-galley-4af.notion.site";
  };

  return (
    <div
      className="relative w-full h-[261px] flex flex-col px-[29px] pt-[30px] pb-[28px]"
      style={{
        backgroundImage: `url(${slides[currentSlide].backgroundImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex gap-[6px] mb-[5px]">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-[6px] h-[6px] rounded-full ${
              index === currentSlide ? "bg-white" : "bg-[#333E4E]"
            }`}
          />
        ))}
      </div>
      <h1
        className="text-white font-pretendard text-[22px] leading-[35px] font-semibold mb-[12px]"
        style={{ whiteSpace: "pre-line" }}
      >
        {slides[currentSlide].title}
      </h1>
      <p className="text-white text-[12px] leading-[19px]">
        {slides[currentSlide].description}
      </p>

      <div className="flex items-center justify-between mt-[19px]">
        <button onClick={handlePrev}>
          <LeftArrow />
        </button>
        <button onClick={handleNext}>
          <RightArrow />
        </button>
      </div>

      <button
        onClick={handleLearnMoreClick}
        className="flex justify-center items-center whitespace-nowrap self-end py-[10px] px-[24px] bg-[#EEF3E2] rounded-full text-[#638404] font-pretendard text-[14px] font-semibold mt-[19px]"
      >
        더 알아보기
      </button>
    </div>
  );
}

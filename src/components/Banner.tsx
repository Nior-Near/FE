import { useState } from "react";
import bgImg from "../assets/loginbg.png";
import LeftArrow from "../assets/navigate_before.svg";
import RightArrow from "../assets/navigate_next.svg";

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "노인층의 경제적 자립을 위한 사회적 기업입니다.",
      description: "니어니어가 더 나은 사회를 만드는 방법을 알아보세요!",
    },
    {
      title: "니어니어에서 3년동안 안이루나",
      description: "니어니어가 더 나은 사회를 만드는 방법을 알아보세요!",
    },
    {
      title: "이춘자 요리사의 생생한 이야기",
      description: "화면3 ~~~",
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
        backgroundImage: `url(${bgImg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-white font-pretendard text-[22px] leading-[35px] font-semibold mb-[12px]">
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

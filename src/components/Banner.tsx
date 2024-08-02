"use client";
import { useState } from "react";

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

  return (
    <div className="relative w-full h-[261px] flex flex-col bg-green-500 px-[29px] pt-[30px] pb-[28px]">
      <h1 className="text-white font-pretendard text-[22px] leading-[35px] font-semibold mb-[12px]">
        {slides[currentSlide].title}
      </h1>
      <p className="text-white text-[12px] leading-[19px]">
        {slides[currentSlide].description}
      </p>
      <div className="flex items-center justify-between mt-[19px]">
        <button onClick={handlePrev}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <rect width="24" height="24" fill="white" />
            <path
              d="M14 18L8 12L14 6L15.4 7.4L10.8 12L15.4 16.6L14 18Z"
              fill="#222224"
            />
          </svg>
        </button>
        <button onClick={handleNext}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <rect width="24" height="24" fill="white" />
            <path
              d="M12.6 12L8 7.4L9.4 6L15.4 12L9.4 18L8 16.6L12.6 12Z"
              fill="#222224"
            />
          </svg>
        </button>
      </div>
      <button className="flex justify-center items-center whitespace-nowrap self-end py-[10px] px-[24px] bg-[#EEF3E2] rounded-full text-[#638404] font-pretendard text-[14px] font-semibold mt-[19px]">
        더 알아보기
      </button>
    </div>
  );
}

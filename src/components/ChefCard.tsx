import React from "react";
import Food from "../assets/food.jpg";
import Fav from "../assets/favorite.svg";

export interface Chef {
  name: string;
  certification: string;
  kitchen: string;
  image: string;
}

export interface CardProps {
  chef: Chef;
  title: string;
  price: string;
  temperature: string;
  reviews: string;
  imageUrl: string;
}

const ChefCard: React.FC<CardProps> = ({
  chef,
  title,
  price,
  temperature,
  reviews,
  imageUrl,
}) => {
  return (
    <div className="bg-white rounded-[12px] w-[322px] overflow-hidden shadow-md">
      <div className="relative">
        <img
          src={Food.src}
          alt="이미지 들어가요 여기"
          className="w-[322px] h-[179px] object-cover"
        />
        <Fav className="absolute top-[12px] right-[11px]" />
      </div>
      <div className="p-[16px]">
        <div className="flex items-center">
          <img
            src={chef.image}
            alt="요리사사진"
            className="h-[28px] w-[28px] rounded-full mr-[8px]"
          />
          <div className="flex flex-row items-center gap-[8px]">
            <div className="font-pretendard text-[14px] leading-[22px]">
              {chef.name} 요리사
            </div>
            <div className="w-[63px] px-[4px] flex items-center justify-center text-[#638404] whitespace-nowrap bg-[#EEF3E2] rounded-[2px] font-pretendard text-[12px] leading-[19px]">
              {chef.certification}
            </div>
            <div className="text-[#638404] px-[4px] flex items-center justify-center w-[60px] whitespace-nowrap bg-[#EEF3E2] rounded-[2px] font-pretendard text-[12px] leading-[19px]">
              {chef.kitchen}
            </div>
          </div>
        </div>
        <div className="font-pretendard h-[39px] flex items-center text-[16px] leading-[25px] whitespace-nowrap ">
          {title}
        </div>
        <div className="font-pretendard text-[#638404] h-[39px] flex items-center text-[18px] font-semibold leading-[28px]">
          {price}원~
        </div>
        <div className="text-[#707A87] font-pretendard text-[12px] leading-[19px]">
          온도 {temperature} | 후기 {reviews}개
        </div>
      </div>
    </div>
  );
};

export default ChefCard;

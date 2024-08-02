import React from "react";

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
          src={imageUrl}
          alt="이미지 들어가요 여기"
          className="w-[322px] h-[179px] object-cover"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          className="absolute top-[12px] right-[11px]"
        >
          <path
            d="M12 21.5561L10.55 20.2561C8.86667 18.7394 7.475 17.4311 6.375 16.3311C5.275 15.2311 4.4 14.2477 3.75 13.3811C3.1 12.4977 2.64167 11.6894 2.375 10.9561C2.125 10.2227 2 9.47272 2 8.70606C2 7.13939 2.525 5.83106 3.575 4.78105C4.625 3.73105 5.93333 3.20605 7.5 3.20605C8.36667 3.20605 9.19167 3.38939 9.975 3.75605C10.7583 4.12272 11.4333 4.63939 12 5.30606C12.5667 4.63939 13.2417 4.12272 14.025 3.75605C14.8083 3.38939 15.6333 3.20605 16.5 3.20605C18.0667 3.20605 19.375 3.73105 20.425 4.78105C21.475 5.83106 22 7.13939 22 8.70606C22 9.47272 21.8667 10.2227 21.6 10.9561C21.35 11.6894 20.9 12.4977 20.25 13.3811C19.6 14.2477 18.725 15.2311 17.625 16.3311C16.525 17.4311 15.1333 18.7394 13.45 20.2561L12 21.5561ZM12 18.8561C13.6 17.4227 14.9167 16.1977 15.95 15.1811C16.9833 14.1477 17.8 13.2561 18.4 12.5061C19 11.7394 19.4167 11.0644 19.65 10.4811C19.8833 9.88106 20 9.28939 20 8.70606C20 7.70606 19.6667 6.87272 19 6.20606C18.3333 5.53939 17.5 5.20606 16.5 5.20606C15.7167 5.20606 14.9917 5.43106 14.325 5.88106C13.6583 6.31439 13.2 6.87272 12.95 7.55606H11.05C10.8 6.87272 10.3417 6.31439 9.675 5.88106C9.00833 5.43106 8.28333 5.20606 7.5 5.20606C6.5 5.20606 5.66667 5.53939 5 6.20606C4.33333 6.87272 4 7.70606 4 8.70606C4 9.28939 4.11667 9.88106 4.35 10.4811C4.58333 11.0644 5 11.7394 5.6 12.5061C6.2 13.2561 7.01667 14.1477 8.05 15.1811C9.08333 16.1977 10.4 17.4227 12 18.8561Z"
            fill="white"
          />
        </svg>
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
            <div className="w-[50px] px-[4px] flex items-center justify-center text-[#638404] whitespace-nowrap bg-[#EEF3E2] rounded-[2px] font-pretendard text-[12px] leading-[19px]">
              {chef.certification}
            </div>
            <div className="text-[#638404] px-[4px] flex items-center justify-center w-[50px] whitespace-nowrap bg-[#EEF3E2] rounded-[2px] font-pretendard text-[12px] leading-[19px]">
              {chef.kitchen}
            </div>
          </div>
        </div>
        <div className="font-pretendard h-[39px] flex items-center text-[16px] leading-[25px] whitespace-nowrap ">
          {title}
        </div>
        <div className="text-[#638404] h-[39px] flex items-center text-[18px] font-semibold leading-[28px]">
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

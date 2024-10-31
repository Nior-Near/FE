import Link from "next/link";
import Food from "../assets/food.jpg";
import { FC } from "react";

export interface CardProps {
  storeId: number;
  name: string;
  tags: string[];
  title: string;
  temperature: string;
  reviews: string;
  imageUrl: string;
}

const ChefCard: FC<CardProps> = ({
  storeId,
  name,
  tags,
  title,
  temperature,
  reviews,
  imageUrl,
}) => {
  return (
    <Link href={`/stores/${storeId}`} passHref>
      <div className="bg-white rounded-[12px] w-[322px] overflow-hidden shadow-md">
        <div className="relative">
          <img src={Food.src} alt="이미지 들어가요" className="w-[322px] h-[179px] object-cover" />
        </div>
        <div className="p-[16px]">
          <div className="flex items-center">
            <img
              src={imageUrl}
              alt="요리사사진"
              className="h-[28px] w-[28px] rounded-full mr-[8px]"
            />
            <div className="font-pretendard text-[14px] leading-[22px]">{name} 요리사</div>
          </div>
          <div
            className="font-pretendard font-semibold text-[16px] leading-[25px] h-[39px] overflow-hidden text-ellipsis whitespace-nowrap"
          >

            {title}
          </div>
          <div className="flex flex-row items-center gap-[8px] mb-[12px] flex-wrap">
            {tags.map((tag, index) => (
              <div
                key={index}
                className="px-[4px] flex items-center justify-center text-[#638404] whitespace-nowrap bg-[#EEF3E2] rounded-[2px] font-pretendard text-[12px] leading-[19px]"
              >
                {tag}
              </div>
            ))}
          </div>
          <div className="text-[#707A87] font-pretendard text-[12px] leading-[19px]">
            온도 {temperature} | 후기 {reviews}개
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ChefCard;

import ArrowRight from "@/src/assets/arrow_right.svg";
import Image from "next/image";
import letter from "@/src/assets/letter.png";
import { useEffect } from "react";
import { axios } from "@/src/lib/axios";
import { useRouter } from "next/router";

export interface Letter {
  letterId: number;
  senderName: string;
  senderId: number;
  status: "열람" | "미열람";
  imageUrl: string;
  createdAt: string;
}

export default function ViewLetter({ data, setLetter }: { data: Letter; setLetter: any }) {
  const router = useRouter();

  const markAsRead = async () => {
    const response = await axios.put(`/letters/${data?.letterId}`);
  };

  useEffect(() => {
    markAsRead();
  }, []);

  return (
    <>
      <span className="font-pretendard text-[24px] font-[600] leading-[38.4px]">
        <span className="text-[#638404]">{data?.senderName}</span> 요리사님의 편지
      </span>
      <span className="mt-[8px] font-pretendard text-[12px] font-[400] leading-[19.2px]">
        노인 요리사님이 보내주신 편지를 읽고, 답장을 보내주세요!
      </span>
      <div className="py-[30px] flex flex-col items-center">
        <img src={data?.imageUrl} alt="" />
        <span className="font-pretendard text-[12px] font-[400] leading-[19.2px] text-[#A8B1B9]">
          캡처하여 편지를 간직해보세요
        </span>
      </div>
      <div className="pb-[30px] flex flex-col gap-[5px]">
        <span className="font-pretendard text-[14px] font-[400] leading-[22.4px] text-[#222224]">
          노인 요리사에게 감사 편지쓰기 (200자)
        </span>
        <textarea
          className="h-[214px] resize-none rounded-[4px] border border-[#d1d6db] bg-white px-[4px] py-[8px] placeholder:font-pretendard placeholder:font-[400] placeholder:leading-[22.4px] placeholder:text-[14px] placeholder:text-[#707a87] placeholder:w-[288px] placeholder:px-[14.5px]"
          placeholder="상품과 편지를 받은 후기를 작성해주세요. 일방적인 욕설 등은 신고의 대상이 될 수 있습니다."
        />
      </div>
      <button className="h-[51px] p-[4px] flex items-center justify-center gap-[4px] self-stretch rounded-full bg-[#d1d6db] font-pretendard font-[600] text-[18px] leading-[28.8px] text-center text-white">
        요리사님께 편지 전송하기
      </button>
    </>
  );
}

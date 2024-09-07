import ArrowRight from "@/src/assets/arrow_right.svg";
import { Done } from "./interface";
import Image from "next/image";
import Link from "next/link";
import Title from "../Title";

export default function Order_Done({ data }: { data: Done | null }) {
  return (
    <div className="relative h-dvh z-0">
      <Title route="주문 완료" />
      <svg
        width="375"
        height="327"
        viewBox="0 0 375 327"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-[-47px] z-[-9]"
      >
        <circle cx="187" cy="-210" r="537" fill="#486300" />
      </svg>
      <nav className="w-full py-[16px] flex flex-row items-center justify-center relative text-white">
        <ArrowRight width="24" height="24" className="ml-[27px] mr-auto [&_path]:fill-white" />
        <span className="absolute font-pretendard text-[16px] font-[600] leading-[25.6px]">
          주문 완료
        </span>
      </nav>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="375"
        height="2"
        viewBox="0 0 375 2"
        fill="none"
      >
        <path d="M-8 1H384" stroke="#638404" />
      </svg>
      <div className="pt-[41px] flex flex-col items-center gap-[16px]">
        <span className="font-pretendard text-[20px] font-[600] leading-[32px] text-white">
          음식 주문이 완료되었습니다
        </span>
        <span className="font-pretendard font-[400] text-[12px] leading-[19.2px] text-white text-center">
          주문하신 음식은 선택하신 픽업장소에서
          <br />
          상품 제작이 완료된 후 가져가실 수 있습니다.
        </span>
      </div>
      <div className="pb-[47px] mt-[27px] mx-auto w-[204px] flex flex-col items-center gap-[8px]">
        <div className="w-[120px] h-[120px] rounded-full bg-white text-center shadow-[0px_0px_5px_rgba(0,0,0,0.25)] overflow-hidden">
          <Image src={data?.profileImage!} width={120} height={120} alt="" />
        </div>
        <div className="flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="8"
            viewBox="0 0 16 8"
            fill="none"
          >
            <path d="M8 0L0 8H16L8 0Z" fill="#DBE8B6" />
          </svg>
          <div className="w-[204px] h-[68px] bg-[#dbe8b6] rounded-[12px] px-[21.5px] py-[8px]">
            <p className="font-pretendard text-[16px] font-[400] leading-[25.6px] text-center text-[#222224]">
              {data?.message}
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-[185px] py-4 mb-[34px] bg-[#f0f2f5] border-dashed border-[1px] border-[#d1d6db] flex-col justify-start items-start gap-1 inline-flex">
        <div className="self-stretch h-[153px] px-6 flex-col justify-start items-start gap-3 flex">
          <div className="self-stretch text-[#222224] text-[18px] font-semibold font-pretendard leading-[28.80px]">
            주문 상품 총 2개
          </div>
          {data?.orderMenus?.map((menu, index) => (
            <div
              key={menu?.menuName}
              className="self-stretch justify-between items-start inline-flex"
            >
              <div className="text-[#333e4e] text-sm font-normal font-pretendard leading-snug">
                {menu?.menuName}
              </div>
              <div className="w-[207px] text-right text-[#333e4e] text-sm font-semibold font-pretendard">
                {menu?.menuPrice} * {menu?.quantity}
              </div>
            </div>
          ))}
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="327"
              height="2"
              viewBox="0 0 375 2"
              fill="none"
            >
              <path d="M-8 1H384" stroke="black" strokeOpacity="0.1" />
            </svg>
          </div>
          <div className="w-[326px] justify-between items-center inline-flex">
            <div className="w-[79px] text-[#333e4e] text-base font-normal font-pretendard leading-relaxed">
              총 결제금액
            </div>
            <div className="w-[79px] text-right text-[#638404] text-xl font-semibold font-pretendard leading-loose">
              {data?.totalPrice?.toLocaleString()}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full inline-flex items-center gap-[20px] justify-center">
        <Link
          href="/"
          className="px-[24px] py-[10px] flex items-center justify-center h-[40px] rounded-full bg-[#97b544] font-pretendard font-[600] text-[16px] leading-[25.6px] text-white text-center"
        >
          니어니어 홈으로
        </Link>
        <Link
          href={`/order/history/${data?.orderId}`}
          className="px-[24px] py-[10px] flex items-center justify-center h-[40px] rounded-full bg-[#638404] font-pretendard font-[600] text-[16px] leading-[25.6px] text-white text-center"
        >
          주문내역 보러가기
        </Link>
      </div>
    </div>
  );
}

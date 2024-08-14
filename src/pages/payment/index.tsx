import ArrowRight from "@/src/assets/arrow_right.svg";
import NavigateDown from "@/src/assets/navigate_down.svg";

export default function Payment() {
  return (
    <div>
      <nav className="w-full py-[16px] flex flex-row items-center justify-center relative">
        <ArrowRight width="24" height="24" className="ml-[27px] mr-auto" />
        <span className="absolute font-pretendard text-[16px] font-[600] leading-[25.6px]">
          주문/결제
        </span>
      </nav>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="375"
        height="2"
        viewBox="0 0 375 2"
        fill="none"
      >
        <path d="M-8 1H384" stroke="black" strokeOpacity="0.1" />
      </svg>
      <div className="w-full p-[24px] pb-0">
        <div className="h-[328px] flex-col justify-start items-start gap-[12px] inline-flex">
          <div className="text-[#222224] font-pretendard leading-[28.8px] text-[18px] font-[600]">
            픽업 장소
          </div>
          <div className="flex-col justify-start items-start gap-[4px] flex">
            <div className="text-[#222224] font-pretendard text-[14px] font-[400] leading-[22.4px]">
              강북구 수유동 니어키친 1호점
            </div>
            <div className="text-[#707a87] font-pretendard text-[12px] font-[400] leading-[19.2px]">
              010-1234-1234
            </div>
          </div>
          <img
            className="w-[327px] h-[178px] rounded-[9px] shadow"
            src="https://via.placeholder.com/327x178"
          />
          <div className="w-[327px] h-[40px] border-[#d1d6db] border-[1px] rounded-[4px] bg-white">
            <div className="w-full h-full self-stretch px-4 py-2 justify-start items-center gap-[85px] inline-flex">
              <div className="text-[#707a87] font-pretendard text-[14px] font-[400] leading-[22.4px]">
                배송 시 요청사항을 선택해주세요
              </div>
              <NavigateDown className="*:fill-[#A8B1B9]" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full px-[27px] py-[40px]">
        <div className="h-[164px] flex-col justify-start items-start gap-3 inline-flex">
          <div className="text-[#222224] font-pretendard text-[18px] font-[600] leading-[28.8px]">
            주문자 정보
          </div>
          <div className="self-stretch h-[19px] flex-col justify-start items-start gap-1 flex">
            <div className="text-[#222224] font-pretendard text-[12px] font-[400] leading-[19.2px]">
              상품 전달을 위한 정보이며, 픽업 이후 자체 폐기됩니다.
            </div>
          </div>
          <div className="w-[321px] h-[40px] border-[#d1d6db] border-[1px] rounded-[4px] bg-white">
            <div className="self-stretch px-4 py-2 justify-start items-center gap-[11px] inline-flex">
              <div className="text-[#707a87] font-pretendard text-[14px] font-[400] leading-[22.4px]">
                이름을 작성해주세요.
              </div>
            </div>
          </div>
          <div className="w-[321px] h-[40px] border-[#d1d6db] border-[1px] rounded-[4px] bg-white">
            <div className="self-stretch px-4 py-2 justify-start items-center gap-[11px] inline-flex">
              <div className="text-[#707a87] font-pretendard text-[14px] font-[400] leading-[22.4px]">
                전화번호를 작성해주세요.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[185px] py-4 bg-[#f0f2f5] border-dashed border-[1px] border-[#d1d6db] flex-col justify-start items-start gap-1 inline-flex">
        <div className="self-stretch h-[153px] px-6 flex-col justify-start items-start gap-3 flex">
          <div className="self-stretch text-[#222224] text-[18px] font-semibold font-pretendard leading-[28.80px]">
            주문 상품 총 2개
          </div>
          <div className="self-stretch justify-start items-start gap-[89px] inline-flex">
            <div className="w-[31px] text-[#333e4e] text-sm font-normal font-pretendard leading-snug">
              잡채
            </div>
            <div className="w-[207px] text-right text-[#333e4e] text-sm font-semibold font-pretendard">
              7,000 * 2
            </div>
          </div>
          <div className="self-stretch justify-start items-start gap-[74px] inline-flex">
            <div className="w-[45px] text-[#333e4e] text-sm font-normal font-pretendard leading-snug">
              불고기
            </div>
            <div className="w-[207px] text-right text-[#333e4e] text-sm font-semibold font-pretendard">
              7,000 * 2
            </div>
          </div>
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
              38,700
            </div>
          </div>
        </div>
      </div>
      <div className="w-full py-[40px] px-[23px]">
        <button className="bg-[#638404] w-[329px] h-[51px] py-[16px] px-[32px] flex flex-col items-center self-stretch rounded-[100px] font-inter text-center text-[16px] font-[600] text-white leading-[normal]">
          결제하기
        </button>
      </div>
    </div>
  );
}

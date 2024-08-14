import ArrowRight from "@/src/assets/arrow_right.svg";
import NavigateNext from "@/src/assets/navigate_next.svg";

export default function Orders() {
  return (
    <div className="h-dvh">
      <nav className="w-full py-[16px] flex flex-row items-center justify-center relative">
        <ArrowRight width="24" height="24" className="ml-[27px] mr-auto" />
        <span className="absolute font-pretendard text-[16px] font-[600] leading-[25.6px]">
          주문내역
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
      <div className="mt-[22px] flex flex-col items-center">
        <div className="w-[322.35px] h-[523.53px] flex-col justify-start items-start gap-5 inline-flex">
          <div className="self-stretch h-[251.77px] flex-col justify-start items-start gap-5 flex">
            <div className="self-stretch h-[251.77px] flex-col justify-start items-start gap-5 flex">
              <div className="self-stretch h-[251.77px] rounded-[5px] shadow-[0px_0px_5px_0px_rgba(0,0,0,0.25)] flex-col justify-start items-start flex">
                <div className="self-stretch h-[92px] py-3 bg-white rounded-tl-[5px] rounded-tr-[5px] flex-col justify-start items-center gap-1 flex">
                  <div className="self-stretch grow shrink basis-0 justify-center items-center gap-3 inline-flex">
                    <div className="w-[68px] h-[68px] bg-neutral-100 rounded-full text-center">
                      사진
                    </div>
                    <div className="w-24 flex-col justify-start items-start gap-1 inline-flex">
                      <div className="self-stretch text-[#486200] text-sm font-semibold font-pretendard">
                        이영자 요리사님
                      </div>
                      <div className="justify-start items-center inline-flex">
                        <div className="text-[#707a87] text-xs font-normal font-pretendard leading-tight">
                          가게 페이지
                        </div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                        >
                          <path
                            d="M7.49413 7.49999L4.82129 4.82715L5.63476 4.01367L9.12108 7.49999L5.63476 10.9863L4.82129 10.1728L7.49413 7.49999Z"
                            fill="#707A87"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="h-[33px] bg-[#638404] rounded-[100px] flex-col justify-center items-center inline-flex">
                      <div className="self-stretch h-[33px] px-3 py-2 justify-center items-center gap-2 inline-flex">
                        <div className="text-center text-white text-xs font-semibold font-pretendard leading-tight">
                          주문내역 보러가기
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-[159.77px] py-[13.75px] bg-[#f0f2f5] rounded-bl-[5px] rounded-br-[5px] border-[0.86px] border-dashed border-[#d1d6db] flex-col justify-start items-start gap-[3.44px] flex">
                  <div className="self-stretch h-[132.26px] px-[20.63px] flex-col justify-start items-start gap-[10.32px] flex">
                    <div className="self-stretch text-[#222224] text-base font-semibold font-pretendard leading-normal">
                      주문 상품 총 2개
                    </div>
                    <div className="self-stretch justify-start items-start gap-[76.50px] inline-flex">
                      <div className="w-[26.65px] text-[#333e4e] text-xs font-normal font-pretendard leading-tight">
                        잡채
                      </div>
                      <div className="w-[177.93px] text-right text-[#333e4e] text-xs font-semibold font-pretendard">
                        1,000 * 2
                      </div>
                    </div>
                    <div className="self-stretch justify-start items-start gap-[63.61px] inline-flex">
                      <div className="w-[38.68px] text-[#333e4e] text-xs font-normal font-pretendard leading-tight">
                        불고기
                      </div>
                      <div className="w-[177.93px] text-right text-[#333e4e] text-xs font-semibold font-pretendard">
                        1,000 * 2
                      </div>
                    </div>
                    <div className="w-[280.23px] justify-between items-center inline-flex">
                      <div className="w-[67.91px] text-[#333e4e] text-sm font-normal font-pretendard leading-snug">
                        총 결제금액
                      </div>
                      <div className="w-[67.91px] text-right text-[#638404] text-[17.19px] font-semibold font-pretendard leading-7">
                        4,000
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-[251.77px] flex-col justify-start items-start gap-5 flex">
            <div className="self-stretch h-[251.77px] flex-col justify-start items-start gap-5 flex">
              <div className="self-stretch h-[251.77px] rounded-[5px] shadow-[0px_0px_5px_0px_rgba(0,0,0,0.25)] flex-col justify-start items-start flex">
                <div className="self-stretch h-[92px] py-3 bg-white rounded-tl-[5px] rounded-tr-[5px] flex-col justify-start items-center gap-1 flex">
                  <div className="self-stretch grow shrink basis-0 justify-center items-center gap-3 inline-flex">
                    <div className="w-[68px] h-[68px] bg-neutral-100 rounded-full text-center">
                      사진
                    </div>
                    <div className="w-24 flex-col justify-start items-start gap-1 inline-flex">
                      <div className="self-stretch text-[#486200] text-sm font-semibold font-pretendard">
                        이영자 요리사님
                      </div>
                      <div className="justify-start items-center inline-flex">
                        <div className="text-[#707a87] text-xs font-normal font-pretendard leading-tight">
                          가게 페이지
                        </div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                        >
                          <path
                            d="M7.49413 7.49999L4.82129 4.82715L5.63476 4.01367L9.12108 7.49999L5.63476 10.9863L4.82129 10.1728L7.49413 7.49999Z"
                            fill="#707A87"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="h-[33px] bg-[#638404] rounded-[100px] flex-col justify-center items-center inline-flex">
                      <div className="self-stretch h-[33px] px-3 py-2 justify-center items-center gap-2 inline-flex">
                        <div className="text-center text-white text-xs font-semibold font-pretendard leading-tight">
                          주문내역 보러가기
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-[159.77px] py-[13.75px] bg-[#f0f2f5] rounded-bl-[5px] rounded-br-[5px] border-[0.86px] border-dashed border-[#d1d6db] flex-col justify-start items-start gap-[3.44px] flex">
                  <div className="self-stretch h-[132.26px] px-[20.63px] flex-col justify-start items-start gap-[10.32px] flex">
                    <div className="self-stretch text-[#222224] text-base font-semibold font-pretendard leading-normal">
                      주문 상품 총 2개
                    </div>
                    <div className="self-stretch justify-start items-start gap-[76.50px] inline-flex">
                      <div className="w-[26.65px] text-[#333e4e] text-xs font-normal font-pretendard leading-tight">
                        잡채
                      </div>
                      <div className="w-[177.93px] text-right text-[#333e4e] text-xs font-semibold font-pretendard">
                        1,000 * 7
                      </div>
                    </div>
                    <div className="self-stretch justify-start items-start gap-[63.61px] inline-flex">
                      <div className="w-[38.68px] text-[#333e4e] text-xs font-normal font-pretendard leading-tight">
                        불고기
                      </div>
                      <div className="w-[177.93px] text-right text-[#333e4e] text-xs font-semibold font-pretendard">
                        1,000 * 7
                      </div>
                    </div>
                    <div className="w-[280.23px] justify-between items-center inline-flex">
                      <div className="w-[67.91px] text-[#333e4e] text-sm font-normal font-pretendard leading-snug">
                        총 결제금액
                      </div>
                      <div className="w-[67.91px] text-right text-[#638404] text-[17.19px] font-semibold font-pretendard leading-7">
                        14,000
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

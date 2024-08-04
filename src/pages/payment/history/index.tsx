import ArrowRight from "@/src/assets/arrow_right.svg";

export default function Payment_History() {
  return (
    <div>
      <nav className="w-full py-[16px] flex flex-row items-center justify-center relative">
        <ArrowRight width="24" height="24" className="ml-[27px] mr-auto" />
        <span className="absolute font-pretendard text-[16px] font-[600] leading-[25.6px]">
          주문내역
        </span>
      </nav>
      <div className="w-[375px] h-[163px] p-6 bg-[#638404] flex-col justify-start items-start gap-5 inline-flex">
        <div className="self-stretch h-[52px] flex-col justify-start items-start gap-1 flex">
          <div className="self-stretch text-white text-lg font-semibold font-pretendard leading-[28.80px]">
            주문을 접수했어요
          </div>
          <div className="self-stretch text-white text-[12px] font-[400] font-pretendard leading-[19.2px]">
            요리사님께서 주문을 수락하면 상품 제작에 들어가요
          </div>
        </div>
        <div className="h-[43px] flex-col justify-start items-center gap-2 flex">
          <div className="self-stretch justify-start items-center gap-[88px] inline-flex">
            <div className="w-[50px] flex-col justify-start items-center inline-flex">
              <div className="self-stretch px-1 py-0.5 bg-white rounded justify-center items-center gap-1 inline-flex">
                <div className="text-[#344800] text-[12px] font-[400] font-pretendard leading-[19.2px]">
                  주문접수
                </div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="4"
                viewBox="0 0 6 4"
                fill="none"
              >
                <path d="M6 0H0L3 4L6 0Z" fill="white" />
              </svg>
            </div>
            <div className="w-[50px] flex-col justify-start items-center inline-flex">
              <div className="self-stretch px-1 py-0.5 bg-[#486200] rounded justify-center items-center gap-1 inline-flex">
                <div className="text-[#638404] text-[12px] font-[400] font-pretendard leading-[19.2px]">
                  상품제작
                </div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="4"
                viewBox="0 0 6 4"
                fill="none"
              >
                <path d="M6 0H0L3 4L6 0Z" fill="#486300" />
              </svg>
            </div>
            <div className="w-[50px] flex-col justify-start items-center inline-flex">
              <div className="self-stretch px-1 py-0.5 bg-[#486200] rounded justify-center items-center gap-1 inline-flex">
                <div className="text-[#638404] text-[12px] font-[400] font-pretendard leading-[19.2px]">
                  픽업
                </div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="4"
                viewBox="0 0 6 4"
                fill="none"
              >
                <path d="M6 0H0L3 4L6 0Z" fill="#486300" />
              </svg>
            </div>
          </div>
          <div className="w-[327px] h-2 relative">
            <div className="w-[327px] h-2 left-0 top-0 absolute bg-[#486200] rounded-[999px]" />
            <div className="w-[83px] h-2 left-0 top-0 absolute bg-[#eef3e2] rounded-[999px]" />
          </div>
        </div>
      </div>
      <div className="py-[40px]">
        <div className="w-[375px] h-[328px] flex-col justify-start items-center gap-3 inline-flex">
          <div className="self-stretch h-[86px] px-6 flex-col justify-start items-start gap-3 flex">
            <div className="self-stretch text-[#222224] text-[18px] font-semibold font-pretendard leading-[28.80px]">
              픽업 장소
            </div>
            <div className="flex-col justify-start items-start gap-1 flex">
              <div className="w-[174px] text-[#222224] text-[14px] font-[400] font-pretendard leading-[22.4px]">
                강북구 수유동 니어키친 1호점
              </div>
              <div className="w-[207px] text-[#707a87] text-[12px] font-[400] font-pretendard leading-[19.2px]">
                010-1234-1234
              </div>
            </div>
          </div>
          <div className="self-stretch h-[178px] px-6 flex-col justify-start items-start gap-1 flex">
            <img
              className="w-[326px] h-[178px] rounded-[9px] shadow-[0px_0px_5px_0px_rgba(0,0,0,0.25)]"
              src="https://via.placeholder.com/326x178"
            />
          </div>
          <div className="bg-white flex-col justify-start items-start flex">
            <div className="w-[321px] h-10 bg-white rounded border border-[#d1d6db] flex-col justify-center items-start flex">
              <div className="self-stretch px-4 py-2 justify-start items-center gap-[11px] inline-flex">
                <div className="w-[254px] h-[22px] text-[#222224] text-[14px] font-[400] font-pretendard leading-[22.4px]">
                  오후 2시 반에 픽업하러 갈게요.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[185px] py-4 mb-[91px] bg-[#f0f2f5] border-dashed border-[1px] border-[#d1d6db] flex-col justify-start items-start gap-1 inline-flex">
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
    </div>
  );
}

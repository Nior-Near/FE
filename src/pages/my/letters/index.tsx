import ArrowRight from "@/src/assets/arrow_right.svg";
import LetterRead from "@/src/assets/letter_read.svg";
import LetterUnread from "@/src/assets/letter_unread.svg";

export default function Letters() {
  return (
    <div className="h-dvh">
      <nav className="w-full py-[16px] flex flex-row items-center justify-center relative">
        <ArrowRight width="24" height="24" className="ml-[27px] mr-auto" />
        <span className="absolute font-pretendard text-[16px] font-[600] leading-[25.6px]">
          편지함
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
      <div className="pt-[31px] px-[23px]">
        <div className="flex flex-col gap-[8px]">
          <span className="font-pretendard font-[600] leading-[38.4px] text-[24px]">
            따듯한 편지가 도착했어요!
          </span>
          <span className="font-pretendard text-[12px] font-[400] leading-[19.2px]">
            노인 요리사분들이 보내주신 편지를 읽고, 답장을 보내보세요!
          </span>
        </div>
        <div className="pt-[42px] grid grid-cols-3 gap-x-[7px] gap-y-[24px]">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((value, index) => (
            <div key={value} className="w-[105px] h-[130px] flex flex-col items-center gap-[8px]">
              <LetterUnread />
              <div className="flex flex-col items-center">
                <span className="text-[#1E2530] font-pretendard font-[600] text-[14px] leading-none">
                  이영자 요리사
                </span>
                <span className="text-[#1E2530] font-pretendard font-[400] text-[12px] leading-[19.2px]">
                  2024.08.02
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

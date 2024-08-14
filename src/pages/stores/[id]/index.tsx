import Image from "next/image";
import food from "@/src/assets/food.jpg";
import food2 from "@/src/assets/food-2.jpeg";
import food3 from "@/src/assets/food-3.jpeg";
import food4 from "@/src/assets/food-4.jpeg";
import food5 from "@/src/assets/food-5.jpeg";
import NavigateBefore from "@/src/assets/navigate_before.svg";
import NavigateNext from "@/src/assets/navigate_next.svg";

export default function Store() {
  return (
    <div>
      <div className="w-[375px] h-[291px] relative">
        <Image src={food} alt="" className="w-full h-full object-cover" />
        <div className="absolute bottom-[-15px] w-full flex flex-row items-center justify-center gap-[16px]">
          {[food2, food3, food4].map((img, index) => (
            <div
              key={img.src}
              className="w-[90px] h-[66px] rounded-[5px] border-2 border-[#97b544] shadow-[0px_0px_5px_0px_#638404]"
            >
              <Image src={img} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
      <div className="pt-[33px] pb-[24px] px-[24px]">
        <div className="flex flex-row items-center gap-[15px]">
          <div className="w-[90px] h-[90px] rounded-full border text-center">사진</div>
          <span className="font-pretendard text-[24px] font-[600] leading-[13.268px] text-[#222224]">
            이영자 요리사님
          </span>
        </div>
      </div>
      <div className="px-[24px] flex flex-col gap-[10px]">
        <span className="font-pretendard text-[16px] font-[600] leading-[13.268px] text-[#222224]">
          똥강아지들 밥 한끼 든든하게 먹고 다니고 있지?
        </span>
        <span className="font-pretendard text-[14px] font-[400] leading-none text-[#333e4e]">
          안녕하세요. 강북구에 있는 교회 구내 식당의 35년 경력 요리사입니다. 한식을 잘하고 고기는
          무조건 받아오는 곳이 있어요. 마장동에서 매일 아침 사와서 요리합니다.
        </span>
      </div>
      <div className="px-[24px] py-[40px] flex flex-col items-start gap-[20px]">
        <div className="flex flex-row items-center gap-[18px]">
          <span className="font-pretendard text-[14px] font-[700] leading-none text-[#222224]">
            주문 가능 지역
          </span>
          <span className="font-pretendard text-[14px] font-[400] leading-none text-[#1e2530]">
            수유동, 번동, 우이동
          </span>
        </div>
        <div className="flex flex-row items-center gap-[18px]">
          <span className="font-pretendard text-[14px] font-[700] leading-none text-[#222224]">
            위치
          </span>
          <span className="font-pretendard text-[14px] font-[400] leading-none text-[#1e2530]">
            강북구 수유동 은희 밥상
          </span>
        </div>
        <div className="px-[4px] flex items-center justify-center rounded-[2px] bg-[#eef3e2]">
          <span className="font-pretendard text-[12px] font-[400] leading-[19.2px] text-[#638404]">
            경력 5년 이상
          </span>
        </div>
      </div>
      <div className="py-[16px] px-[24px] bg-[#eef3e2]">
        <div className="flex flex-col gap-[10px]">
          <div className="flex flex-row gap-[73px] items-center">
            <div className="flex flex-col items-start gap-[5px]">
              <span className="font-pretendard text-[14px] font-[700] leading-none text-[#1e2530]">
                요리사의 온기
              </span>
              <span className="font-pretendard text-[12px] font-[400] leading-[19.2px] text-[#1e2530]">
                요리사님의 요리를 구매한 사람들의 평가
              </span>
            </div>
            <span className="font-pretendard text-[24px] font-[600] leading-[38.4px] text-[#638404]">
              79℃
            </span>
          </div>
          <div className="w-full h-[18px] rounded-full bg-[#d1d6db]">
            <div
              className="h-[18px] rounded-full transition-all duration-500"
              style={{
                width: "268.18px",
                background: "linear-gradient(90deg, #97B544 0%, #486300 100%)",
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className="py-[40px] flex flex-col">
        <span className="px-[24px] font-pretendard text-[18px] font-[600] leading-[28.8px] text-[#222224]">
          주문
        </span>
        <div className="px-[24px] py-[12px] flex flex-row flex-nowrap items-center gap-[16px] overflow-x-auto">
          {[0, 1, 2, 3].map((item, index) => (
            <div
              key={item}
              className="w-[184px] flex flex-col p-[8px] gap-[23px] rounded-[8px] bg-white shadow-[0px_0px_5px_0px_rgba(0,0,0,0.25)]"
            >
              <div className="w-[168px] h-[143px] rounded-[4px] overflow-hidden">
                <Image src={food5} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="px-[8px] flex flex-col gap-[12px]">
                <span className="font-pretendard text-[16px] font-[600] leading-[25.6px]">
                  잡채
                </span>
                <span className="font-pretendard tet-[14px] font-[400] leading-none text-[#1e2530]">
                  교회에서 사람들에게 양껏 대접하고 싶은 날은 꼭 잡채를 합니다.
                </span>
                <span className="font-pretendard text-[12px] font-[400] leading-[19.2px] text-[#707a87]">
                  1,000원당 약 130g
                </span>
              </div>
              <div className="flex flex-row items-center gap-[12px] self-center">
                <NavigateBefore />
                <div className="px-[16px] py-[8px] rounded-[4px] border border-[#e4e8eb] bg-white">
                  <span className="font-pretendard text-[14px] font-[400] leading-[22.4px] text-[#707a87] text-center">
                    0
                  </span>
                </div>
                <NavigateNext />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="pb-[40px]">
        <button className="mx-auto px-[24px] py-[4px] w-[329px] h-[51px] flex items-center justify-center font-pretendard text-[18px] font-[600] leading-[28.8px] text-center rounded-full bg-[#638404] text-white">
          총 3개 3,000원 주문하기
        </button>
      </div>
    </div>
  );
}

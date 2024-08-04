import React from "react";
import Link from "next/link";

const regions = [
  {
    name: "서울",
    areas: [
      "전체",
      "건대/왕십리",
      "명동/이태원",
      "신촌/이대",
      "홍대/마포",
      "강남/논현",
      "관악/신림",
      "삼성/선릉",
      "압구정/신사",
      "강동/천호",
      "교대/사당",
      "송파/잠실",
      "여의도/영등포",
      "강서/목동",
      "노원/강북",
    ],
  },
  { name: "경기-인천", areas: [] },
  { name: "대전-충청", areas: [] },
  { name: "대구-경북", areas: [] },
  { name: "부산-경남", areas: [] },
  { name: "광주-전라", areas: [] },
  { name: "다른지역", areas: [] },
];

export default function RegionSelectPage() {
  const [selectedRegion, setSelectedRegion] = React.useState(regions[0]);
  const [selectedArea, setSelectedArea] = React.useState<string | null>(null);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-[#638404] h-[56px] pl-[28px] text-white flex items-center">
        <Link href="/" legacyBehavior>
          <a className="mr-[30px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M4 12.5L3.29289 13.2071L2.58579 12.5L3.29289 11.7929L4 12.5ZM19 11.5C19.5523 11.5 20 11.9477 20 12.5C20 13.0523 19.5523 13.5 19 13.5V11.5ZM9.29289 19.2071L3.29289 13.2071L4.70711 11.7929L10.7071 17.7929L9.29289 19.2071ZM3.29289 11.7929L9.29289 5.79289L10.7071 7.20711L4.70711 13.2071L3.29289 11.7929ZM4 11.5H19V13.5H4V11.5Z"
                fill="white"
              />
            </svg>
          </a>
        </Link>
        <h1 className="text-[18px] font-medium font-pretendard leading-[28px]">
          어느 지역에서 음식을 받을건가요?
        </h1>
      </header>
      <div className="flex flex-1">
        <div className="bg-[#F0F2F5] w-[124px] flex justify-center pt-[31px]">
          <ul className="space-y-[21px]">
            {regions.map((region, index) => (
              <li
                key={index}
                className={`cursor-pointer ${
                  selectedRegion.name === region.name
                    ? "text-[#638404] text-[18px] font-pretendard font-medium leading-[29px]"
                    : "text-[#333E4E] text-[18px] font-pretendard leading-[29px]"
                }`}
                onClick={() => {
                  setSelectedRegion(region);
                  setSelectedArea(null);
                }}
              >
                {region.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-[#E4E8EB] flex-1 pt-[31px] pl-[29px]">
          <ul className="space-y-[21px]">
            {selectedRegion.areas.map((area, index) => (
              <li
                key={index}
                className={`cursor-pointer ${
                  selectedArea === area
                    ? "text-[#638404] text-[16px] font-pretendard font-medium leading-[29px]"
                    : "text-[#333E4E] text-[16px] font-pretendard leading-[29px]"
                }`}
                onClick={() => setSelectedArea(area)}
              >
                {area}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

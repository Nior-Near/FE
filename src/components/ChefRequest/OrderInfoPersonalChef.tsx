import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";

export interface OrderInfoPersonalChefFormData {
  name: string;
  placeName: string;
  placeAddress: string;
  regionId1: string;
  regionId2: string;
  message: string;
}

interface OrderInfoPersonalChefProps {
  nextStep: (data: OrderInfoPersonalChefFormData) => void;
}

const regionOptions: Record<string, string[]> = {
  서울: [
    "강남/논현",
    "강동/천호",
    "강서/목동",
    "건대/왕십리",
    "관악/신림",
    "교대/사당",
    "노원/강북",
    "명동/이태원",
    "삼성/선릉",
    "송파/잠실",
    "수유/동대문",
    "신촌/이대",
    "압구정/신사",
    "여의도/영등포",
    "종로/대학로",
    "홍대/마포",
  ],
  "경기-인천": [
    "일산/파주",
    "용인/분당/수원",
    "인천/부천",
    "남양주/구리/하남",
    "안양/안산/광명",
  ],
  "대전-충청": ["대전", "충청"],
  "대구-경북": ["대구", "경북"],
  "부산-경남": ["부산", "경남"],
  "광주-전라": ["광주", "전라"],
  다른지역: ["강원", "제주"],
};

const OrderInfoPersonalChef: React.FC<OrderInfoPersonalChefProps> = ({
  nextStep,
}) => {
  const {
    handleSubmit,
    control,
    formState: { isValid },
    setValue,
    watch,
  } = useForm<OrderInfoPersonalChefFormData>({
    mode: "onChange",
    defaultValues: {
      name: "",
      placeName: "",
      placeAddress: "",
      regionId1: "",
      regionId2: "",
      message: "",
    },
  });

  const [isRegion1DropdownOpen, setRegion1DropdownOpen] = useState(false);
  const [isRegion2DropdownOpen, setRegion2DropdownOpen] = useState(false);
  const [selectedRegion1, setSelectedRegion1] = useState("");
  const [selectedRegion2, setSelectedRegion2] = useState("");
  const [region2Options, setRegion2Options] = useState<string[]>([]);

  const onSubmit = (data: OrderInfoPersonalChefFormData) => {
    console.log("Form submitted:", data);
    nextStep(data);
  };

  const toggleRegion1Dropdown = () => {
    setRegion1DropdownOpen(!isRegion1DropdownOpen);
  };

  const toggleRegion2Dropdown = () => {
    setRegion2DropdownOpen(!isRegion2DropdownOpen);
  };

  const handleRegion1Select = (region: string) => {
    setSelectedRegion1(region);
    setValue("regionId1", region, { shouldValidate: true });
    setRegion2Options(regionOptions[region] || []);
    setValue("regionId2", "");
    setRegion1DropdownOpen(false);
  };

  const handleRegion2Select = (region: string) => {
    setValue("regionId2", region, { shouldValidate: true });
    setRegion2DropdownOpen(false);
  };

  return (
    <div className="px-[23px] pb-[43px]">
      <div className="text-[20px] font-semibold mt-[39px] mb-[32px]">
        주문 정보
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-[20px]">
          <label className="text-[14px] mb-[5px] leading-[22px]">
            픽업지 주소 <span className="text-[#638404]">*</span>
          </label>
          <Controller
            name="name"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <input
                {...field}
                placeholder="식당명을 입력해주세요."
                className={`flex w-[325px] h-[40px] mb-[10px] flex-col justify-center items-start rounded-[4px] border border-[#D1D6DB] bg-[#FFF] py-[8px] px-[16px] text-[14px] font-pretendard placeholder-[#707A87] text-[#000]`}
                style={{
                  fontFamily: "Pretendard",
                  fontSize: "14px",
                  lineHeight: "160%",
                }}
              />
            )}
          />
          <Controller
            name="placeName"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <input
                {...field}
                placeholder="건물, 지번 또는 도로명 주소"
                className={`flex w-[325px] h-[40px] mb-[10px] flex-col justify-center items-start rounded-[4px] border border-[#D1D6DB] bg-[#FFF] py-[8px] px-[16px] text-[14px] font-pretendard placeholder-[#707A87] text-[#000]`}
                style={{
                  fontFamily: "Pretendard",
                  fontSize: "14px",
                  lineHeight: "160%",
                }}
              />
            )}
          />
          <Controller
            name="placeAddress"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <input
                {...field}
                placeholder="상세주소를 입력해주세요."
                className={`flex w-[325px] h-[40px] flex-col justify-center items-start rounded-[4px] border border-[#D1D6DB] bg-[#FFF] py-[8px] px-[16px] text-[14px] font-pretendard placeholder-[#707A87] text-[#000]`}
                style={{
                  fontFamily: "Pretendard",
                  fontSize: "14px",
                  lineHeight: "160%",
                }}
              />
            )}
          />
        </div>

        <div className="mb-[20px]">
          <label className="text-[14px] font-pretendard text-[#222224] mb-[5px] leading-[22px]">
            주문 가능 지역 (최대) <span className="text-[#638404]">*</span>
          </label>

          <div className="relative mb-[10px]">
            <Controller
              name="regionId1"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <div
                  className="flex w-[321px] h-[40px] justify-between items-center rounded-[4px] border border-[#D1D6DB] bg-[#FFF] py-[8px] px-[16px] cursor-pointer"
                  onClick={toggleRegion1Dropdown}
                >
                  <input
                    value={selectedRegion1}
                    readOnly
                    placeholder="지역 분류"
                    className="flex-1 bg-transparent placeholder-[#707A87] text-[14px] font-pretendard text-[#000] border-none outline-none cursor-pointer"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className={`transform transition-transform ${
                      isRegion1DropdownOpen ? "rotate-180" : ""
                    }`}
                  >
                    <path
                      d="M12 12.6L16.6 8L18 9.4L12 15.4L6 9.4L7.4 8L12 12.6Z"
                      fill="#A8B1B9"
                    />
                  </svg>
                </div>
              )}
            />

            {isRegion1DropdownOpen && (
              <div className="absolute flex flex-col w-[321px] border border-[#D1D6DB] rounded-[4px] bg-[#FFF] mt-[8px] z-10">
                {Object.keys(regionOptions).map((region) => (
                  <div
                    key={region}
                    onClick={() => handleRegion1Select(region)}
                    className={`flex items-center justify-between px-[16px] py-[8px] gap-[23px] text-[#707A87] text-[14px] font-pretendard leading-[22px] cursor-pointer ${
                      selectedRegion1 === region
                        ? "bg-[#EEF3E2] text-[#333E4E]"
                        : ""
                    }`}
                  >
                    <span>{region}</span>
                    {selectedRegion1 === region ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12 17C13.3833 17 14.5625 16.5125 15.5375 15.5375C16.5125 14.5625 17 13.3833 17 12C17 10.6167 16.5125 9.4375 15.5375 8.4625C14.5625 7.4875 13.3833 7 12 7C10.6167 7 9.4375 7.4875 8.4625 8.4625C7.4875 9.4375 7 10.6167 7 12C7 13.3833 7.4875 14.5625 8.4625 15.5375C9.4375 16.5125 10.6167 17 12 17ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z"
                          fill="#638404"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z"
                          fill="#A8B1B9"
                        />
                      </svg>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="relative">
            <Controller
              name="regionId2"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <div
                  className="flex w-[321px] h-[40px] justify-between items-center rounded-[4px] border border-[#D1D6DB] bg-[#FFF] py-[8px] px-[16px] cursor-pointer"
                  onClick={toggleRegion2Dropdown}
                >
                  <input
                    value={selectedRegion2}
                    readOnly
                    placeholder="지역 선택"
                    className="flex-1 bg-transparent placeholder-[#707A87] text-[14px] font-pretendard text-[#000] border-none outline-none cursor-pointer"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className={`transform transition-transform ${
                      isRegion2DropdownOpen ? "rotate-180" : ""
                    }`}
                  >
                    <path
                      d="M12 12.6L16.6 8L18 9.4L12 15.4L6 9.4L7.4 8L12 12.6Z"
                      fill="#A8B1B9"
                    />
                  </svg>
                </div>
              )}
            />

            {isRegion2DropdownOpen && region2Options.length > 0 && (
              <div className="absolute flex flex-col w-[321px] border border-[#D1D6DB] rounded-[4px] bg-[#FFF] mt-[8px] z-10">
                {region2Options.map((region) => (
                  <div
                    key={region}
                    onClick={() => handleRegion2Select(region)}
                    className={`flex items-center justify-between px-[16px] py-[8px] gap-[23px] text-[#707A87] text-[14px] font-pretendard leading-[22px] cursor-pointer ${
                      watch("regionId2") === region
                        ? "bg-[#EEF3E2] text-[#333E4E]"
                        : ""
                    }`}
                  >
                    <span>{region}</span>
                    {watch("regionId2") === region ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12 17C13.3833 17 14.5625 16.5125 15.5375 15.5375C16.5125 14.5625 17 13.3833 17 12C17 10.6167 16.5125 9.4375 15.5375 8.4625C14.5625 7.4875 13.3833 7 12 7C10.6167 7 9.4375 7.4875 8.4625 8.4625C7.4875 9.4375 7 10.6167 7 12C7 13.3833 7.4875 14.5625 8.4625 15.5375C9.4375 16.5125 10.6167 17 12 17ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z"
                          fill="#638404"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z"
                          fill="#A8B1B9"
                        />
                      </svg>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="mb-[190px]">
          <label className="text-[14px] font-pretendard text-[#222224] mb-[5px] leading-[22px]">
            주문 완료 시 고객에게 보여질 문구 (최대 30자){" "}
            <span className="text-[#638404]">*</span>
          </label>
          <Controller
            name="message"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <textarea
                {...field}
                placeholder="내용을 입력해주세요"
                className="w-[329px] h-[60px] rounded-[4px] border border-[#D1D6DB] bg-[#FFF] py-[8px] px-[16px] text-[14px] font-pretendard placeholder-[#707A87] text-[#000]"
                style={{
                  fontFamily: "Pretendard",
                  fontSize: "14px",
                  lineHeight: "160%",
                }}
              />
            )}
          />
        </div>
        <button
          type="submit"
          className={`flex w-[329px] h-[51px] mt-[2px] justify-center items-center gap-[4px] flex-shrink-0 rounded-[999px] ${
            isValid ? "bg-[#638404]" : "bg-[#D1D6DB]"
          } text-white font-semibold leading-[28px]`}
          disabled={!isValid}
        >
          다음으로
        </button>
      </form>
    </div>
  );
};

export default OrderInfoPersonalChef;

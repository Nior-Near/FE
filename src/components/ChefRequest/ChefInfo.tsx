import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";

interface ChefInfoFormProps {
  nextStep: (data: FormData) => void;
}

export interface FormData {
  name: string;
  shortIntro: string;
  detailedIntro: string;
  qualification: string;
  affiliation: string;
  experience: string;
}

const ChefInfo: React.FC<ChefInfoFormProps> = ({ nextStep }) => {
  const {
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm<FormData>({
    mode: "onChange",
    defaultValues: {
      name: "",
      shortIntro: "",
      detailedIntro: "",
      qualification: "자격증 보유",
      affiliation: "개인 요리사",
      experience: "",
    },
  });

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState("");

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
    nextStep(data);
    console.log(data);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleExperienceSelect = (experience: string) => {
    setSelectedExperience(experience);
    setDropdownOpen(false);
  };

  return (
    <div className="px-[23px] pb-[43px]">
      <div className="text-[20px] font-semibold mt-[39px]">요리사 정보</div>
      <div className="flex justify-center mt-[30px] mb-[42px]">
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="104"
            height="104"
            viewBox="0 0 104 104"
            fill="none"
          >
            <g filter="url(#filter0_d_62_3159)">
              <rect x="8" y="8" width="88" height="88" rx="44" fill="#DBE8B6" />
              <rect
                x="6.5"
                y="6.5"
                width="91"
                height="91"
                rx="45.5"
                stroke="white"
                strokeWidth="3"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M65.2005 43.2C65.2005 50.4902 59.2907 56.4 52.0005 56.4C44.7104 56.4 38.8005 50.4902 38.8005 43.2C38.8005 35.9098 44.7104 30 52.0005 30C59.2907 30 65.2005 35.9098 65.2005 43.2ZM60.8005 43.2C60.8005 48.0601 56.8606 52 52.0005 52C47.1404 52 43.2005 48.0601 43.2005 43.2C43.2005 38.3399 47.1404 34.4 52.0005 34.4C56.8606 34.4 60.8005 38.3399 60.8005 43.2Z"
                fill="#638404"
              />
              <path
                d="M52.0005 63C37.7569 63 25.6209 71.4225 20.998 83.2225C22.1242 84.3408 23.3106 85.3985 24.5518 86.3905C27.9942 75.5569 38.7933 67.4 52.0005 67.4C65.2078 67.4 76.0069 75.5569 79.4493 86.3906C80.6905 85.3986 81.8769 84.3408 83.003 83.2225C78.3802 71.4225 66.2442 63 52.0005 63Z"
                fill="#638404"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_62_3159"
                x="0"
                y="0"
                width="104"
                height="104"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="2.5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_62_3159"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_62_3159"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="41"
            height="41"
            viewBox="0 0 41 41"
            fill="none"
            className="absolute bottom-0 right-0"
            style={{
              bottom: "3px",
              right: "-8px",
            }}
          >
            <g filter="url(#filter0_d_62_3160)">
              <rect
                x="8"
                y="8"
                width="25"
                height="25"
                rx="12.5"
                fill="#DBE8B6"
              />
              <rect
                x="6.5"
                y="6.5"
                width="28"
                height="28"
                rx="14"
                stroke="white"
                strokeWidth="3"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                x="10.5"
                y="10.5"
                style={{ transform: "translate(-50%, -50%)" }}
              >
                <path
                  d="M16.25 4.375H14.0844L13.0195 2.77813C12.9625 2.69262 12.8852 2.6225 12.7946 2.57399C12.704 2.52548 12.6028 2.50006 12.5 2.5H7.5C7.39721 2.50006 7.29602 2.52548 7.2054 2.57399C7.11478 2.6225 7.03752 2.69262 6.98047 2.77813L5.91484 4.375H3.75C3.25272 4.375 2.77581 4.57254 2.42417 4.92417C2.07254 5.27581 1.875 5.75272 1.875 6.25V15C1.875 15.4973 2.07254 15.9742 2.42417 16.3258C2.77581 16.6775 3.25272 16.875 3.75 16.875H16.25C16.7473 16.875 17.2242 16.6775 17.5758 16.3258C17.9275 15.9742 18.125 15.4973 18.125 15V6.25C18.125 5.75272 17.9275 5.27581 17.5758 4.92417C17.2242 4.57254 16.7473 4.375 16.25 4.375ZM16.875 15C16.875 15.1658 16.8092 15.3247 16.6919 15.4419C16.5747 15.5592 16.4158 15.625 16.25 15.625H3.75C3.58424 15.625 3.42527 15.5592 3.30806 15.4419C3.19085 15.3247 3.125 15.1658 3.125 15V6.25C3.125 6.08424 3.19085 5.92527 3.30806 5.80806C3.42527 5.69085 3.58424 5.625 3.75 5.625H6.25C6.35292 5.62507 6.45427 5.59971 6.54504 5.5512C6.63581 5.50268 6.71319 5.43249 6.77031 5.34688L7.83437 3.75H12.1648L13.2297 5.34688C13.2868 5.43249 13.3642 5.50268 13.455 5.5512C13.5457 5.59971 13.6471 5.62507 13.75 5.625H16.25C16.4158 5.625 16.5747 5.69085 16.6919 5.80806C16.8092 5.92527 16.875 6.08424 16.875 6.25V15ZM10 6.875C9.32013 6.875 8.65552 7.07661 8.09023 7.45432C7.52493 7.83204 7.08434 8.3689 6.82416 8.99703C6.56399 9.62515 6.49591 10.3163 6.62855 10.9831C6.76119 11.6499 7.08858 12.2624 7.56932 12.7432C8.05006 13.2239 8.66257 13.5513 9.32938 13.6839C9.99619 13.8166 10.6874 13.7485 11.3155 13.4883C11.9436 13.2282 12.4805 12.7876 12.8582 12.2223C13.2359 11.657 13.4375 10.9924 13.4375 10.3125C13.4365 9.40114 13.074 8.52739 12.4295 7.88296C11.7851 7.23853 10.9114 6.87603 10 6.875ZM10 12.5C9.56735 12.5 9.14442 12.3717 8.78469 12.1313C8.42496 11.891 8.14458 11.5493 7.97901 11.1496C7.81345 10.7499 7.77013 10.3101 7.85453 9.88574C7.93894 9.46141 8.14728 9.07163 8.4532 8.7657C8.75913 8.45978 9.14891 8.25144 9.57324 8.16703C9.99757 8.08263 10.4374 8.12595 10.8371 8.29151C11.2368 8.45708 11.5785 8.73746 11.8188 9.09719C12.0592 9.45692 12.1875 9.87985 12.1875 10.3125C12.1875 10.8927 11.957 11.4491 11.5468 11.8593C11.1366 12.2695 10.5802 12.5 10 12.5Z"
                  fill="#638404"
                />
              </svg>
            </g>

            <defs>
              <filter
                id="filter0_d_62_3160"
                x="0"
                y="0"
                width="41"
                height="41"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="2.5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_62_3160"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_62_3160"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-[20px]">
          <label className="text-[14px] font-pretendard text-[#222224] mb-[5px] leading-[22px]">
            성함 <span className="text-[#638404]">*</span>
          </label>
          <Controller
            name="name"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <input
                {...field}
                placeholder="이름을 작성해주세요."
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
            한 줄 소개 (최대 30자) <span className="text-[#638404]">*</span>
          </label>
          <Controller
            name="shortIntro"
            control={control}
            rules={{ required: true, maxLength: 30 }}
            render={({ field }) => (
              <textarea
                {...field}
                placeholder="내용을 작성해주세요."
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
        <div className="mb-[20px]">
          <label className="text-[14px] font-pretendard text-[#222224] mb-[5px] leading-[22px]">
            상세 소개 (최대 200자)
          </label>
          <Controller
            name="detailedIntro"
            control={control}
            render={({ field }) => (
              <textarea
                {...field}
                placeholder="내용을 작성해주세요."
                className="w-[329px] h-[214px] rounded-[4px] border border-[#D1D6DB] bg-[#FFF] py-[8px] px-[16px] placeholder-[#707A87] text-[14px] font-pretendard text-[#000]"
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
            자격 등록 <span className="text-[#638404]">*</span>
          </label>
          <div className="flex items-center gap-[4px] w-[325px] h-[40px] flex-shrink-0 rounded-[4px] border border-[#DBE8B6] bg-[#F6F8FB]">
            <Controller
              name="qualification"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <>
                  <div
                    onClick={() => field.onChange("자격증 미보유")}
                    className={`flex justify-center items-center whitespace-nowrap rounded-[4px] cursor-pointer w-[161.994px] h-[40px] px-[52px] ${
                      field.value === "자격증 미보유"
                        ? "border border-[#638404] bg-[#FFF]"
                        : "border border-transparent"
                    }`}
                  >
                    <span className="text-[#000] font-Pretendard text-[12px] font-[400] leading-[160%]">
                      자격증 미보유
                    </span>
                  </div>
                  <div
                    onClick={() => field.onChange("자격증 보유")}
                    className={`flex justify-center items-center whitespace-nowrap rounded-[4px] cursor-pointer w-[161.994px] h-[40px] px-[52px] ${
                      field.value === "자격증 보유"
                        ? "border border-[#638404] bg-[#FFF]"
                        : "border border-transparent"
                    }`}
                  >
                    <span className="text-[#000] font-Pretendard text-[12px] font-[400] leading-[160%]">
                      자격증 보유
                    </span>
                  </div>
                </>
              )}
            />
          </div>
        </div>

        <div className="mb-[20px]">
          <label className="text-[14px] font-pretendard text-[#222224] mb-[5px] leading-[22px]">
            소속 설정 <span className="text-[#638404]">*</span>
          </label>
          <div className="flex items-center gap-[4px] w-[325px] h-[40px] flex-shrink-0 rounded-[4px] border border-[#DBE8B6] bg-[#F6F8FB]">
            <Controller
              name="affiliation"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <>
                  <div
                    onClick={() => field.onChange("니어 요리사")}
                    className={`flex justify-center items-center whitespace-nowrap rounded-[4px] cursor-pointer w-[161.994px] h-[40px] px-[52px] ${
                      field.value === "니어 요리사"
                        ? "border border-[#638404] bg-[#FFF]"
                        : "border border-transparent"
                    }`}
                  >
                    <span className="text-[#000] font-Pretendard text-[12px] font-[400] leading-[160%]">
                      자격증 미보유
                    </span>
                  </div>
                  <div
                    onClick={() => field.onChange("개인 요리사")}
                    className={`flex justify-center items-center whitespace-nowrap rounded-[4px] cursor-pointer w-[161.994px] h-[40px] px-[52px] ${
                      field.value === "개인 요리사"
                        ? "border border-[#638404] bg-[#FFF]"
                        : "border border-transparent"
                    }`}
                  >
                    <span className="text-[#000] font-Pretendard text-[12px] font-[400] leading-[160%]">
                      자격증 보유
                    </span>
                  </div>
                </>
              )}
            />
          </div>
        </div>
        <div className="mb-[20px]">
          <label className="text-[14px] font-pretendard text-[#222224] mb-[5px] leading-[22px]">
            경력 입력 <span className="text-[#638404]">*</span>
          </label>
          <div className="relative flex flex-col items-start gap-[8px]">
            <Controller
              name="experience"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <div
                  className="flex w-[321px] h-[40px] justify-between items-center rounded-[4px] border border-[#D1D6DB] bg-[#FFF] py-[8px] px-[16px] cursor-pointer"
                  onClick={toggleDropdown}
                >
                  <input
                    {...field}
                    value={selectedExperience}
                    readOnly
                    placeholder="경력을 입력해주세요."
                    className="flex-1 bg-transparent placeholder-[#707A87] text-[14px] font-pretendard text-[#000] border-none outline-none cursor-pointer"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className={`transform transition-transform ${
                      isDropdownOpen ? "rotate-180" : ""
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

            {isDropdownOpen && (
              <div className="flex flex-col w-[321px] border border-[#D1D6DB] rounded-[4px] bg-[#FFF] mt-[8px]">
                {["1년 이하", "1~3년", "3~5년", "5년 이상"].map(
                  (experience) => (
                    <div
                      key={experience}
                      onClick={() => handleExperienceSelect(experience)}
                      className={`flex items-center justify-between px-[16px] py-[8px] gap-[23px] text-[#707A87] text-[14px] font-pretendard leading-[22px] cursor-pointer ${
                        selectedExperience === experience
                          ? "bg-[#EEF3E2] text-[#333E4E]"
                          : ""
                      }`}
                    >
                      <span>{experience}</span>
                      {selectedExperience === experience ? (
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
                  )
                )}
              </div>
            )}
          </div>
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

export default ChefInfo;

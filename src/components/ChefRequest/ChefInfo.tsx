import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";

export interface ChefInfoFormData {
  name: string;
  shortIntro: string;
  detailedIntro: string;
  qualification: boolean;
  affiliation: string;
  experience: string;
  auth: string; // 경력 ID
}

export interface ChefInfoFormProps {
  nextStep: (data: ChefInfoFormData) => void;
}

const ChefInfo: React.FC<ChefInfoFormProps> = ({ nextStep }) => {
  const {
    handleSubmit,
    control,
    formState: { isValid },
    setValue,
    watch,
  } = useForm<ChefInfoFormData>({
    mode: "onChange",
    defaultValues: {
      name: "",
      shortIntro: "",
      detailedIntro: "",
      qualification: false,
      affiliation: "니어 요리사",
      experience: "",
      auth: "0L",
    },
  });

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState("");

  const determineAuthId = (experience: string) => {
    switch (experience) {
      case "1년 이하":
        return "1L";
      case "1~3년":
        return "2L";
      case "3~5년":
        return "3L";
      case "5년 이상":
        return "4L";
      default:
        return "0L";
    }
  };

  const onSubmit = (data: ChefInfoFormData) => {
    const authId = determineAuthId(data.experience);
    const updatedData = { ...data, auth: authId };

    if (updatedData.affiliation === "니어 요리사") {
      localStorage.setItem("chefInfo", JSON.stringify(updatedData));
    }
    nextStep(updatedData);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleExperienceSelect = (experience: string) => {
    setSelectedExperience(experience);
    setValue("experience", experience, { shouldValidate: true });
    setDropdownOpen(false);
  };

  const watchFields = watch([
    "name",
    "shortIntro",
    "affiliation",
    "experience",
  ]);

  const allFieldsFilled = watchFields.every((field) => field !== "");

  return (
    <div className="px-[23px] pb-[43px]">
      <div className="text-[20px] font-semibold mt-[39px]">요리사 정보</div>
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
                className="flex w-[325px] h-[40px] flex-col justify-center items-start rounded-[4px] border border-[#D1D6DB] bg-[#FFF] py-[8px] px-[16px] text-[14px] font-pretendard placeholder-[#707A87] text-[#000]"
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
              render={({ field }) => (
                <>
                  <div
                    onClick={() => field.onChange(false)}
                    className={`flex justify-center items-center whitespace-nowrap rounded-[4px] cursor-pointer w-[161.994px] h-[40px] px-[52px] ${
                      !field.value
                        ? "border border-[#638404] bg-[#FFF]"
                        : "border border-transparent"
                    }`}
                  >
                    <span className="text-[#000] font-Pretendard text-[12px] font-[400] leading-[160%]">
                      자격증 미보유
                    </span>
                  </div>
                  <div
                    onClick={() => field.onChange(true)}
                    className={`flex justify-center items-center whitespace-nowrap rounded-[4px] cursor-pointer w-[161.994px] h-[40px] px-[52px] ${
                      field.value
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
                      니어 요리사
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
                      개인 요리사
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
                            d="M12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22Z"
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
            allFieldsFilled && isValid ? "bg-[#638404]" : "bg-[#D1D6DB]"
          } text-white font-semibold leading-[28px]`}
          disabled={!allFieldsFilled || !isValid}
        >
          다음으로
        </button>
      </form>
    </div>
  );
};

export default ChefInfo;

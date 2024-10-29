import { useState, useEffect, FC } from "react";
import { useForm, Controller } from "react-hook-form";
import { axios } from "../../lib/axios";

export interface OrderInfoNearChefFormData {
  regionId1: string;
  regionId2: string;
  message: string;
}

interface OrderInfoWithStoreId extends OrderInfoNearChefFormData {
  storeId: string;
}

interface OrderInfoNearChefProps {
  nextStep: (data: OrderInfoWithStoreId) => void;
}

const regionOptions: string[] = [
  "서울여자대학교",
  // "니어키친 2(부산광역시 마마마 646)",
  // "니어키친 3(울산광역시 가가가 123)",
  // "니어키친 4(경기도 라라라 456)",
  // "니어키친 5(수원시 다다다 345)",
];

const determinePlaceId = (place: string): number => {
  switch (place) {
    case "서울여자대학교":
      return 6;
    // case "니어키친 2(부산광역시 마마마 646)":
    //   return 2;
    // case "니어키친 3(울산광역시 가가가 123)":
    //   return 3;
    // case "니어키친 4(경기도 라라라 456)":
    //   return 4;
    // case "니어키친 5(수원시 다다다 345)":
    //   return 5;
    default:
      return 0;
  }
};

const OrderInfoNearChef: FC<OrderInfoNearChefProps> = ({ nextStep }) => {
  const [isRegion1DropdownOpen, setRegion1DropdownOpen] = useState(false);
  const [selectedRegion1, setSelectedRegion1] = useState("");
  const [regionId2, setRegionId2] = useState("");

  const {
    handleSubmit,
    control,
    formState: { isValid },
    setValue,
  } = useForm<OrderInfoNearChefFormData>({
    mode: "onChange",
    defaultValues: {
      regionId1: "",
      regionId2: "",
      message: "",
    },
  });

  const [chefData, setChefData] = useState({
    name: "",
    shortIntro: "",
    detailedIntro: "",
    qualification: false,
    auth: 0,
  });

  useEffect(() => {
    const storedChefInfo = localStorage.getItem("chefInfo");

    if (storedChefInfo) {
      const parsedChefInfo = JSON.parse(storedChefInfo);
      setChefData({
        name: parsedChefInfo.name || "",
        shortIntro: parsedChefInfo.shortIntro || "",
        detailedIntro: parsedChefInfo.detailedIntro || "",
        qualification: parsedChefInfo.qualification || false,
        auth: parsedChefInfo.auth || 0,
      });
    }

    
  }, []);

  const letter = localStorage.getItem("letter");
  const letterFile = letter ? new File([letter], "letter.png", { type: "image/png" }) : null;

  // 주문가능지역
  const fetchRegionId = async (placeId: number) => {
    try {
      const response = await axios.get(`/stores/near-company/${placeId}`);
      if (response.data.isSuccess && response.data.result) {
        const regionId = response.data.result.regionId;
        localStorage.setItem("regionId", regionId.toString());

        const regionResponse = await axios.get(`/regions/${regionId}`);

        if (regionResponse.data.code === "2000") {
          const regionName = regionResponse.data.result.name;
          setRegionId2(regionName);
          setValue("regionId2", regionName, { shouldValidate: true });
        } else {
          console.error("Unexpected response code:", regionResponse.data.code);
        }
      } else {
        console.error("Error with region ID:", response.data.message);
      }
    } catch (error) {
      console.error("Region ID 가져오기 오류:", error);
    }
  };

  const onSubmit = async (data: OrderInfoNearChefFormData) => {
    const placeId = determinePlaceId(data.regionId1);
    const regionId = parseInt(localStorage.getItem("regionId") || "0");

    const formData = new FormData();
    formData.append("name", chefData.name);
    formData.append("shortDescription", chefData.shortIntro);
    formData.append("detailedDescription", chefData.detailedIntro);
    formData.append("qualification", chefData.qualification.toString());
    formData.append("auth", chefData.auth.toString());
    formData.append("placeId", placeId.toString());
    formData.append("regionId", regionId.toString());
    formData.append("message", data.message);
    if (letterFile) {
      formData.append("letter", letterFile);
    }

    // console.log("FormData 생성 완료");

    // formData.forEach((value, key) => {
    //   console.log(`${key}:`, value);
    // });

    // 니어요리사 신청
    try {
      const token = localStorage.getItem("accessToken");
      const response = await axios.post("/stores/near-company", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${token}`,
        },
      });

      if (response.data.isSuccess) {
        const storeId = response.data.result.storeId;
        localStorage.setItem("storeId", storeId.toString());
        nextStep({ ...data, storeId });
      } else {
        console.error("API 요청 실패:", response.data.message);
      }
    } catch (error) {
      console.error("API 요청 실패:", error);
    }
  };

  <button
    type="button"
    onClick={handleSubmit(onSubmit)}
    className={`flex w-[329px] h-[51px] mb-[43px] justify-center items-center gap-[4px] flex-shrink-0 rounded-[999px] ${
      isValid ? "bg-[#638404]" : "bg-[#D1D6DB]"
    } text-white font-semibold leading-[28px]`}
    disabled={!isValid}
  >
    다음으로
  </button>;

  const toggleRegion1Dropdown = () => {
    setRegion1DropdownOpen(!isRegion1DropdownOpen);
  };

  const handleRegion1Select = async (region: string) => {
    setSelectedRegion1(region);
    setValue("regionId1", region, { shouldValidate: true });
    setRegion1DropdownOpen(false);

    const placeId = determinePlaceId(region);
    await fetchRegionId(placeId);
  };


  return (
    <div className="px-[23px] pb-[43px] h-[765px] flex flex-col justify-between">
      <div>
        <div className="text-[20px] font-semibold mt-[44px] mb-[36px]">주문 정보</div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-[20px]">
            <label className="text-[14px] font-pretendard text-[#222224] mb-[5px] leading-[22px]">
              픽업지 정보<span className="text-[#638404]">*</span>
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
                      placeholder="근무중인 장소를 선택해주세요"
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
                  {regionOptions.map((region) => (
                    <div
                      key={region}
                      onClick={() => handleRegion1Select(region)}
                      className={`flex items-center justify-between px-[16px] py-[8px] gap-[23px] text-[#707A87] text-[14px] font-pretendard leading-[22px] cursor-pointer ${
                        selectedRegion1 === region ? "bg-[#EEF3E2] text-[#333E4E]" : ""
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
                            d="M12 17C13.3833 17 14.5625 16.5125 15.5375 15.5375C16.5125 14.5625 17 13.3833 17 12C17 10.6167 16.5125 9.4375 15.5375 8.4625C14.5625 7.4875 13.3833 7 12 7C10.6167 7 9.4375 7.4875 8.4625 8.4625C7.4875 9.4375 7 10.6167 7 12C7 13.3833 7.4875 14.5625 8.4625 15.5375C9.4375 16.5125 10.6167 17 12 17ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 13.3833 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z"
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
                            d="M12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 13.3833 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z"
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

          <div className="mb-[20px]">
            <label className="text-[14px] font-pretendard text-[#222224] mb-[5px] leading-[22px]">
              주문 가능 지역
            </label>
            <Controller
              name="regionId2"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  value={regionId2}
                  readOnly
                  className="flex font-pretendard leading-[22px] text-[14px] mb-[11px] w-[321px] h-[40px] flex-col justify-center items-start rounded-[4px] border border-[#D1D6DB] bg-[#FFF] py-[8px] px-[16px]"
                />
              )}
            />
          </div>

          <div className="mb-[190px]">
            <label className="text-[14px] font-pretendard text-[#222224] mb-[5px] leading-[22px]">
              주문 완료 시 고객에게 보여질 문구 (최대 30자)
              <span className="text-[#638404]">*</span>
            </label>
            <Controller
              name="message"
              control={control}
              rules={{ required: true }}
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
        </form>
      </div>
      <button
        type="button"
        onClick={() => {
          console.log("Button clicked");
          handleSubmit(onSubmit)();
        }}
        className={`flex w-[329px] h-[51px] mb-[43px] justify-center items-center gap-[4px] flex-shrink-0 rounded-[999px] ${
          isValid ? "bg-[#638404]" : "bg-[#D1D6DB]"
        } text-white font-semibold leading-[28px]`}
        disabled={!isValid}
      >
        다음으로
      </button>
    </div>
  );
};

export default OrderInfoNearChef;

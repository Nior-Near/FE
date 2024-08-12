import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
interface FormData {
  menuName: string;
  menuOneServing: number | null;
  menuIntroduction: string;
  menuImage: File | null;
}

interface MenuRegistrationProps {
  affiliation: string;
  onSubmit: (data: FormData) => void;
  handleCompleteMenuRegistration: () => void;
  storeId: string;
}

const registerMenu = async (
  storeId: string,
  formDataList: FormData[]
) => {
  const body = new FormData();
  formDataList.forEach((formData, index) => {
    body.append(`menus[${index}].menuName`, formData.menuName);
    body.append(`menus[${index}].menuOneServing`, formData.menuOneServing?.toString() || "0");
    body.append(`menus[${index}].menuIntroduction`, formData.menuIntroduction);
    if (formData.menuImage) {
      body.append(`menus[${index}].menuImage`, formData.menuImage);
    }
  });

  try {
    const response = await axios.post(`http://13.124.232.198/stores/${storeId}/menu`, body, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    console.log("메뉴 등록 성공");
    return response.data;
  } catch (error) {
    console.error("메뉴 등록 실패", error);
    throw error;
  }
};

const MenuRegistration: React.FC<MenuRegistrationProps> = ({
  affiliation,
  onSubmit,
  handleCompleteMenuRegistration,
  storeId,
}) => {
  const [fileName, setFileName] = useState("파일 선택");
  const [menuCount, setMenuCount] = useState(0);
  const [menuList, setMenuList] = useState<FormData[]>([]);
  const {
    handleSubmit,
    control,
    reset,
    formState: { isValid },
  } = useForm<FormData>({
    mode: "onChange",
    defaultValues: {
      menuName: "",
      menuOneServing: undefined,
      menuIntroduction: "",
      menuImage: null,
    },
  });

  const submitHandler = (data: FormData) => {
    if (affiliation === "니어 요리사") {
      console.log("니어 요리사 메뉴 등록:", data);
    } else if (affiliation === "개인 요리사") {
      console.log("개인 요리사 메뉴 등록:", data);
    }

    setMenuList((prevList) => [...prevList, data]);
    setMenuCount((prevCount) => prevCount + 1);

    reset({
      menuName: "",
      menuOneServing: null,
      menuIntroduction: "",
      menuImage: null,
    });
    setFileName("파일 선택");
  };

  const handleRegisterMenus = async () => {
    try {
      await registerMenu(storeId, menuList);
      handleCompleteMenuRegistration();
    } catch (error) {
      console.error("Error:", error);
      alert("메뉴 등록 중 오류가 발생했습니다.");
    }
  };

  return (
    <div className="px-[23px] pb-[43px]">
      <div className="text-[20px] font-semibold mt-[44px] mb-[36px]">
        메뉴 등록
      </div>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div className="mb-[20px]">
          <label className="text-[14px] font-pretendard text-[#222224] mb-[5px] leading-[22px]">
            메뉴명 <span className="text-[#638404]">*</span>
          </label>
          <Controller
            name="menuName"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <input
                {...field}
                placeholder="메뉴명을 입력해주세요."
                className="w-[329px] h-[40px] rounded-[4px] border border-[#D1D6DB] py-[8px] px-[16px] text-[12px]"
              />
            )}
          />
        </div>

        <div className="mb-[20px]">
          <label className="text-[14px] font-pretendard text-[#222224] mb-[5px] leading-[22px]">
            메뉴 가격(고정) <span className="text-[#F00]">*</span>
          </label>
          <div className="flex items-center w-[329px] h-[40px] rounded-[4px] border border-[#D1D6DB] py-[8px] px-[16px] text-[12px]">
            니어니어의 1인분 메뉴 가격은 모두 1,000원 입니다.
          </div>
        </div>

        <div className="mb-[20px]">
          <label className="text-[14px] font-pretendard text-[#222224] mb-[5px] leading-[22px]">
            1,000원 당 g수 <span className="text-[#638404]">*</span>
          </label>

          <Controller
            name="menuOneServing"
            control={control}
            rules={{ required: true, min: 1 }}
            render={({ field }) => (
              <input
                {...field}
                value={field.value || ""}
                type="number"
                placeholder="1인분 당 g수를 입력해주세요."
                className="w-[329px] h-[40px] rounded-[4px] border border-[#D1D6DB] py-[8px] px-[16px] text-[12px]"
              />
            )}
          />
        </div>

        <div className="mb-[20px]">
          <label className="text-[14px] font-pretendard text-[#222224] mb-[5px] leading-[22px]">
            메뉴 설명 (최대 30자) <span className="text-[#638404]">*</span>
          </label>
          <Controller
            name="menuIntroduction"
            control={control}
            rules={{ required: true, min: 1 }}
            render={({ field }) => (
              <input
                {...field}
                type="string"
                placeholder="메뉴 설명을 입력해주세요."
                className="w-[329px] h-[40px] rounded-[4px] border border-[#D1D6DB] py-[8px] px-[16px] text-[12px]"
              />
            )}
          />
        </div>

        <div className="mb-[20px]">
          <label className="text-[14px] font-pretendard text-[#222224] mb-[5px] leading-[22px]">
            메뉴 사진 <span className="text-[#638404]">*</span>
          </label>
          <Controller
            name="menuImage"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <label className="block w-[329px] h-[40px] rounded-[4px] border border-[#D1D6DB] py-[8px] px-[16px] text-[12px] cursor-pointer">
                {fileName}
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    const files = e.target.files;
                    if (files && files.length > 0) {
                      setFileName(files[0].name);
                      field.onChange(files[0]);
                    }
                  }}
                />
              </label>
            )}
          />
        </div>

        <button
          type="submit"
          className={`${
            isValid
              ? "bg-[#DBE8B6] text-[#354800]"
              : "bg-[#D1D6DB] text-[#333E4E]"
          } mb-[160px] w-[321px] h-[42px] rounded-[4px] text-[14px] font-semibold font-pretendard`}
          disabled={!isValid}
        >
          위 메뉴 등록하기
        </button>

        <button
          type="button"
          className={`flex w-[329px] h-[51px] mt-[2px] justify-center items-center gap-[4px] flex-shrink-0 rounded-[999px] ${
            menuCount > 0 ? "bg-[#638404]" : "bg-[#D1D6DB]"
          } text-white font-semibold leading-[28px]`}
          disabled={menuCount === 0}
          onClick={handleRegisterMenus}
        >
          총 {menuCount}개 등록하기
        </button>
      </form>
    </div>
  );
};

export default MenuRegistration;

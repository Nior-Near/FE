import { FC, useState } from "react";
import { useForm, Controller } from "react-hook-form";

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

const MenuRegistration: FC<MenuRegistrationProps> = ({
  affiliation,
  onSubmit,
  handleCompleteMenuRegistration,
}) => {
  const [fileName, setFileName] = useState("파일 선택");

  const {
    handleSubmit,
    control,
    reset,
    formState: { isValid },
  } = useForm<FormData>({
    mode: "onChange",
    defaultValues: {
      menuName: "",
      menuOneServing: null,
      menuIntroduction: "",
      menuImage: null,
    },
  });

  const submitHandler = (data: FormData) => {
    onSubmit(data);
    resetForm();
  };

  const resetForm = () => {
    reset({
      menuName: "",
      menuOneServing: null,
      menuIntroduction: "",
      menuImage: null,
    });
    setFileName("파일 선택");
  };

  return (
    <div className="px-[23px] pb-[43px] h-[765px] flex flex-col justify-between">
      <div className="text-[20px] font-semibold mt-[44px] mb-[33px]">메뉴 등록</div>

      <form onSubmit={handleSubmit(submitHandler)} className="flex-grow">
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
                placeholder="음식의 g수를 적어주세요."
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
            rules={{ required: true }}
            render={({ field }) => (
              <textarea
                {...field}
                placeholder="내용을 작성해주세요."
                className="w-[329px] h-[60px] rounded-[4px] border border-[#D1D6DB] bg-[#FFF] py-[8px] px-[16px] text-[14px] font-pretendard placeholder-[#707A87] text-[#000]"
              />
            )}
          />
        </div>

        <div className="mb-[6px] flex items-center justify-between">
          <label className="text-[14px] font-pretendard text-[#222224] leading-[22px]">
            메뉴 사진 <span className="text-[#638404]">*</span>
          </label>
          <Controller
            name="menuImage"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  id="fileInput"
                  onChange={(e) => {
                    const files = e.target.files;
                    if (files && files.length > 0) {
                      setFileName(files[0].name);
                      field.onChange(files[0]);
                    }
                  }}
                />
                <label
                  htmlFor="fileInput"
                  className="cursor-pointer flex items-center whitespace-nowrap px-[12px] py-[8px] justify-center w-[90px] h-[33px] bg-[#97B544] font-semibold text-[12px] text-white rounded-[100px]"
                >
                  사진 첨부하기
                </label>
              </>
            )}
          />
        </div>

        <div className="mb-[6px]">
          <div className="block w-[325px] h-[40px] rounded-[4px] border border-[#D1D6DB] py-[8px] px-[16px] font-pretendard text-[14px] text-[#707A87] bg-white">
            {fileName}
          </div>
        </div>
        <div className="text-[#A8B1B9] text-[12px] font-pretendard leading-[19.2px] mb-[68px]">
          jpg, png 형식의 파일만 첨부 가능합니다.
        </div>

        <button
          type="submit"
          className={`flex w-[329px] h-[51px] mb-[43px] justify-center items-center gap-[4px] flex-shrink-0 rounded-[999px] ${
            isValid ? "bg-[#638404]" : "bg-[#D1D6DB]"
          } text-white font-semibold leading-[28px]`}
          disabled={!isValid}
        >
          이 메뉴 추가하기
        </button>
      </form>
    </div>
  );
};

export default MenuRegistration;

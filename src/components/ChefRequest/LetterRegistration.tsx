import { FC, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Image from "next/image";
import letterImg from "../../assets/letter.png";

interface LetterFormData {
  letterImage: File | null;
}

interface LetterRegistrationProps {
  onSubmit: (data: LetterFormData) => void;
}

const LetterRegistration: FC<LetterRegistrationProps> = ({ onSubmit }) => {
  const [fileName, setFileName] = useState("사진을 첨부해주세요.");
  const {
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm<LetterFormData>({
    mode: "onChange",
    defaultValues: {
      letterImage: null,
    },
  });
  const submitHandler = (data: LetterFormData) => {
    if (data.letterImage) {
      const reader = new FileReader();
      reader.onload = function (event) {
        const fileContent = event.target?.result;
        if (typeof fileContent === "string") {
          localStorage.setItem("letter", fileContent);
        }
      };
      reader.readAsDataURL(data.letterImage);
    }
    onSubmit(data);
  };

  return (
    <div className="px-[23px] pb-[40px] h-[765px] overflow-y-auto">
      <div className="text-[20px] font-semibold mt-[44px] mb-[10px]">편지를 등록해주세요</div>
      <div className="text-[12px] font-pretendard leading-[19.2px] mb-[20px]">
        모든 사람이 읽어도 불편함 없는 내용으로 작성하여야 하며,
        <br />
        배경이 없는 종이에 손글씨로 작성한 뒤
        <br />
        사진 촬영하여 첨부해주세요.
      </div>
      <div
        className="relative w-[327px] h-[207px] mb-[4px]"
        style={{ boxShadow: "0px 0px 5px 0px rgba(0, 0, 0, 0.25)" }}
      >
        <Image src={letterImg} alt="편지 예시" layout="fill" objectFit="cover" />
      </div>
      <div className="text-[#A8B1B9] text-[12px] leading-[19.2px] mb-[44px] text-center">
        손편지 예시 사진입니다.
      </div>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div className="mb-[6px] flex items-center justify-between">
          <label className="text-[14px] font-pretendard text-[#222224] leading-[22px]">
            손편지 <span className="text-[#638404]">*</span>
          </label>
          <Controller
            name="letterImage"
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
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "var(--G--40, #97B544)",
                  }}
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
          className={`flex w-[329px] h-[51px] justify-center items-center gap-[4px] flex-shrink-0 rounded-[999px] ${
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

export default LetterRegistration;

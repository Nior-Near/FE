import React from "react";
import { useForm, Controller } from "react-hook-form";

interface FormData {
  name: string;
  area1: string;
  area2: string;
  area3: string;
  msg: string;
}

const OrderInfoNearChef = () => {
  const {
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm<FormData>({
    mode: "onChange",
    defaultValues: {
      name: "",
      area1: "",
      area2: "",
      area3: "",
      msg: "",
    },
  });

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
    console.log(data);
  };
  return (
    <div className="px-[27px] pb-[43px]">
      <div className="text-[20px] font-semibold mt-[44px] mb-[62px]">
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
                className="flex mb-[11px] w-[321px] h-[40px] flex-col justify-center items-start rounded-[4px] border border-[#D1D6DB] bg-[#FFF] py-[8px] px-[16px]"
              />
            )}
          />
          
        </div>

        <div className="mb-[20px]">
          <label className="text-[14px] mb-[5px] leading-[22px]">
            주문 가능 지역 (최대) <span className="text-[#638404]">*</span>
          </label>
          <Controller
            name="area1"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <input
                {...field}
                className="flex mb-[11px] w-[321px] h-[40px] flex-col justify-center items-start rounded-[4px] border border-[#D1D6DB] bg-[#FFF] py-[8px] px-[16px]"
              />
            )}
          />
          <Controller
            name="area2"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <input
                {...field}
                className="flex mb-[11px] w-[321px] h-[40px] flex-col justify-center items-start rounded-[4px] border border-[#D1D6DB] bg-[#FFF] py-[8px] px-[16px]"
              />
            )}
          />
          <Controller
            name="area3"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <input
                {...field}
                className="flex w-[321px] h-[40px] flex-col justify-center items-start rounded-[4px] border border-[#D1D6DB] bg-[#FFF] py-[8px] px-[16px]"
              />
            )}
          />
        </div>
        <div className="mb-[190px]">
          <label className="text-[14px] mb-[5px] leading-[22px]">
            주문 완료 시 고객에게 보여질 문구 (최대 30자){" "}
            <span className="text-[#638404]">*</span>
          </label>
          <Controller
            name="msg"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <input
                {...field}
                className="flex w-[321px] h-[40px] flex-col justify-center items-start rounded-[4px] border border-[#D1D6DB] bg-[#FFF] py-[8px] px-[16px]"
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

export default OrderInfoNearChef;

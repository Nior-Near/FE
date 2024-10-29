import NavigateDown from "@/src/assets/navigate_down.svg";
import Map from "@/src/assets/map.svg";
import RadioButtonUnchecked from "@/src/assets/radio_button_unchecked.svg";
import RadioButtonChecked from "@/src/assets/radio_button_checked.svg";
import { useRouter } from "next/router";
import ReactSelect, { StylesConfig, OptionProps } from "react-select";
import { Controller, useForm } from "react-hook-form";
import { FC, useEffect, useState } from "react";
import { axios } from "@/src/lib/axios";
import Order_Done from "@/src/components/Order/Done";
import Order_Failed from "@/src/components/Order/Failed";
import Order_Process from "./process";
import Title from "@/src/components/Title";
import Navbar from "@/src/components/Navbar";
import { Done } from "@/src/components/Order/interface";

interface DecodedOrders {
  [key: number]: { name: string; price: number; quantity: number };
}

interface DecodedStore {
  storeId: number;
  storePhone: string;
  placeName: string;
}

export default function Order() {
  const [index, setIndex] = useState("process");

  const router = useRouter();

  const { storeId, orders, store } = router.query;

  const [decodedOrders, setDecodedOrders] = useState<DecodedOrders | null>(null);
  const [decodedStore, setDecodedStore] = useState<DecodedStore | null>(null);

  useEffect(() => {
    try {
      setDecodedOrders(JSON.parse(Buffer.from(orders as string, "base64").toString()));
      setDecodedStore(JSON.parse(Buffer.from(store as string, "base64").toString()));
    } catch (err) {
      if (!!storeId) router.replace(`/stores/${storeId}`);
      else router.replace("/home");
    }
  }, [router.query]);

  interface OptionType {
    value: string;
    label: string;
  }

  const options = [
    {
      value: "집에서 가져온 용기에 담아갈게요",
      label: "집에서 가져온 용기에 담아갈게요",
    },
    {
      value: "일회용 젓가락, 숟가락 필요해요",
      label: "일회용 젓가락, 숟가락 필요해요",
    },
    {
      value: "픽업 준비 완료되면 전화주세요",
      label: "픽업 준비 완료되면 전화주세요",
    },
    {
      value: "others",
      label: "직접 입력",
    },
  ];

  const customStyles: StylesConfig<OptionType, false> = {
    control: (provided) => ({
      ...provided,
      width: "327px",
      height: "40px",
      border: "1px solid #d1d6db",
      borderRadius: "4px",
      backgroundColor: "white",
      boxShadow: "none",
      fontFamily: "var(--font-pretendard)",
      "&:hover": {
        border: "1px solid #d1d6db",
      },
    }),
    menu: (provided) => ({
      ...provided,
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      border: "1px solid #d1d6db",
      borderRadius: "4px",
      padding: "0",
      fontFamily: "var(--font-pretendard)",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#f0f0f0" : "white",
      color: "#333",
      padding: "12px 16px",
      display: "flex",
      alignItems: "center",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "#f0f0f0",
      },
      fontFamily: "var(--font-pretendard)",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#333",
      fontSize: "14px",
      fontFamily: "var(--font-pretendard)",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#707a87",
      fontSize: "14px",
      fontFamily: "var(--font-pretendard)",
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: "#A8B1B9",
    }),
  };

  const CustomDropdownIndicator = () => <NavigateDown className="*:fill-[#A8B1B9] mr-[10px]" />;

  const CustomOption: FC<OptionProps<OptionType, false>> = ({ innerProps, label, isSelected }) => (
    <div
      {...innerProps}
      className={`py-[9px] px-[16px] flex flex-row items-center justify-between ${
        isSelected && "bg-[#eef3e2]"
      }`}
    >
      <span className="font-pretendard text-[14px] font-[400] leading-[22.4px] text[#707a87]">
        {label}
      </span>
      {isSelected ? <RadioButtonChecked /> : <RadioButtonUnchecked />}
    </div>
  );

  const { control, register, handleSubmit } = useForm({
    defaultValues: {
      requestMessage: "없음.",
      memberName: "",
      memberPhone: "",
    },
  });

  const onSubmit = async (data: any) => {
    const menus =
      decodedOrders &&
      Object.keys(decodedOrders).map((key) => ({
        menuId: parseInt(key),
        quantity: decodedOrders?.[parseInt(key)]?.quantity,
      }));

    const storeId = decodedStore?.storeId;

    const formData = new FormData();

    formData.append("storeId", storeId!.toString());
    formData.append("requestMessage", data?.requestMessage);
    formData.append("memberName", data?.memberName);
    formData.append("memberPhone", data?.memberName);
    formData.append("memberName", data?.memberName);

    menus?.forEach((menu, index) => {
      formData.append(`menus[${index}].menuId`, menu.menuId.toString());
      formData.append(`menus[${index}].quantity`, menu.quantity.toString());
    });

    const response = await axios.post("/orders", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    if (response.data?.isSuccess === true) setPaymentDonePayload(response.data?.result);
    setIndex("pending");
  };

  const [PaymentDonePayload, setPaymentDonePayload] = useState<Done | null>(null);

  switch (index) {
    case "process":
      return (
        <>
          <Title route="주문 및 결제" />
          <Navbar title="주문 및 결제" />
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="w-full p-[24px] pb-0">
              <div className="h-[328px] flex-col justify-start items-start gap-[12px] inline-flex">
                <div className="text-[#222224] font-pretendard leading-[28.8px] text-[18px] font-[600]">
                  픽업 장소
                </div>
                <div className="flex-col justify-start items-start gap-[4px] flex">
                  <div className="text-[#222224] font-pretendard text-[14px] font-[400] leading-[22.4px]">
                    {decodedStore?.placeName}
                  </div>
                  <div className="text-[#707a87] font-pretendard text-[12px] font-[400] leading-[19.2px]">
                    {decodedStore?.storePhone}
                  </div>
                </div>
                <Map width={327} h={178} className="rounded-[9px] shadow" />
                <Controller
                  name="requestMessage"
                  control={control}
                  render={({ field: { onChange, value, ref } }) => (
                    <ReactSelect<OptionType>
                      styles={customStyles}
                      placeholder="배송 시 요청사항을 선택해주세요"
                      components={{
                        Option: CustomOption,
                        DropdownIndicator: CustomDropdownIndicator,
                      }}
                      options={options}
                      isSearchable={false}
                      value={options.find((option) => option.value === value) || null}
                      onChange={(newValue) => {
                        onChange(newValue?.value);
                      }}
                      ref={ref}
                    />
                  )}
                />
              </div>
            </div>
            <div className="w-full px-[27px] py-[40px]">
              <div className="h-[164px] flex-col justify-start items-start gap-3 inline-flex">
                <div className="text-[#222224] font-pretendard text-[18px] font-[600] leading-[28.8px]">
                  주문자 정보
                </div>
                <div className="self-stretch h-[19px] flex-col justify-start items-start gap-1 flex">
                  <div className="text-[#222224] font-pretendard text-[12px] font-[400] leading-[19.2px]">
                    상품 전달을 위한 정보이며, 픽업 이후 자체 폐기됩니다.
                  </div>
                </div>
                <input
                  className="px-4 py-2 w-[321px] h-[40px] border-[#d1d6db] border-[1px] rounded-[4px] bg-white placeholder:text-[#707a87] placeholder:font-pretendard placeholder:text-[14px] placeholder:font-[400] placeholder:leading-[22.4px]"
                  placeholder="이름을 입력해주세요."
                  autoComplete="off"
                  {...register("memberName", { required: true })}
                />
                <input
                  className="px-4 py-2 w-[321px] h-[40px] border-[#d1d6db] border-[1px] rounded-[4px] bg-white placeholder:text-[#707a87] placeholder:font-pretendard placeholder:text-[14px] placeholder:font-[400] placeholder:leading-[22.4px]"
                  placeholder="전화번호를 입력해주세요."
                  autoComplete="off"
                  {...register("memberPhone", { required: true })}
                />
              </div>
            </div>
            {decodedOrders && (
              <div className="w-full py-4 bg-[#f0f2f5] border-dashed border-[1px] border-[#d1d6db] flex-col justify-start items-start gap-1 inline-flex">
                <div className="self-stretch px-6 flex-col justify-start items-start gap-3 flex">
                  <div className="self-stretch text-[#222224] text-[18px] font-semibold font-pretendard leading-[28.80px]">
                    주문 상품 총 {Object.keys(decodedOrders).length}개
                  </div>
                  {Object.keys(decodedOrders)?.map((key, index) => (
                    <div key={key} className="self-stretch justify-between items-start inline-flex">
                      <div className="text-[#333e4e] text-sm font-normal font-pretendard leading-snug">
                        {decodedOrders[parseInt(key)]?.name}
                      </div>
                      <div className="w-[207px] text-right text-[#333e4e] text-sm font-semibold font-pretendard">
                        {decodedOrders[parseInt(key)]?.price} *{" "}
                        {decodedOrders[parseInt(key)]?.quantity}
                      </div>
                    </div>
                  ))}

                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="327"
                      height="2"
                      viewBox="0 0 375 2"
                      fill="none"
                    >
                      <path d="M-8 1H384" stroke="black" strokeOpacity="0.1" />
                    </svg>
                  </div>
                  <div className="w-[326px] justify-between items-center inline-flex">
                    <div className="w-[79px] text-[#333e4e] text-base font-normal font-pretendard leading-relaxed">
                      총 결제금액
                    </div>
                    <div className="w-[79px] text-right text-[#638404] text-xl font-semibold font-pretendard leading-loose">
                      {Object.keys(decodedOrders)
                        .reduce((sum, key, index) => {
                          return (
                            sum +
                            decodedOrders?.[parseInt(key)].price *
                              decodedOrders[parseInt(key)]?.quantity
                          );
                        }, 0)
                        .toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div className="w-full py-[40px] px-[23px]">
              <button
                type="submit"
                className="bg-[#638404] w-[329px] h-[51px] py-[16px] px-[32px] flex flex-col items-center self-stretch rounded-[100px] font-inter text-center text-[16px] font-[600] text-white leading-[normal]"
              >
                결제하기
              </button>
            </div>
          </form>
        </>
      );
    case "pending":
      return <Order_Process orderId={PaymentDonePayload?.orderId} setIndex={setIndex} />;
    case "done":
      return <Order_Done data={PaymentDonePayload} />;
    case "failed":
      return <Order_Failed />;
  }
}

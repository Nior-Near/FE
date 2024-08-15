import ArrowRight from "@/src/assets/arrow_right.svg";
import CheckCircle from "@/src/assets/check_circle.svg";
import Script from "next/script";
import { useEffect } from "react";
import { RequestPayParams, RequestPayResponse } from "iamport-typings";
import { axios } from "@/src/lib/axios";

export default function Order_Process({ orderId }: { orderId: number | undefined }) {
  const readyPayment = async () => {
    const response = await axios.post(`/payment/${orderId}`);

    pay(response.data?.result);
  };

  const pay = (payload: any) => {
    const { IMP } = window;
    if (IMP) {
      IMP.init(process.env.NEXT_PUBLIC_IMP_UID!);

      IMP.request_pay(
        {
          pg: "html5_inicis.INIpayTest",
          pay_method: "card",
          merchant_uid: payload?.merchantUid,
          name: payload?.name,
          amount: payload?.amount,
          buyer_email: payload?.buyerEmail,
          buyer_name: payload?.buyerName,
          buyer_tel: payload?.buyerTel,
        },
        (response: RequestPayResponse) => {
          console.log(response);
        }
      );
    }
  };

  useEffect(() => {
    readyPayment();
  }, []);

  return (
    <>
      <Script src="https://code.jquery.com/jquery-1.12.4.min.js" strategy="beforeInteractive" />
      <Script
        src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        strategy="beforeInteractive"
      />
      <div className="h-dvh">
        <nav className="w-full py-[16px] flex flex-row items-center justify-center relative">
          <ArrowRight width="24" height="24" className="ml-[27px] mr-auto" />
          <span className="absolute font-pretendard text-[16px] font-[600] leading-[25.6px]">
            주문/결제
          </span>
        </nav>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="375"
          height="2"
          viewBox="0 0 375 2"
          fill="none"
        >
          <path d="M-8 1H384" stroke="black" strokeOpacity="0.1" />
        </svg>
        <div className="pt-[53px] px-[24px] flex flex-col gap-[10px]">
          <span className="font-pretendard text-[24px] font-[600] leading-[38.4px]">
            결제 화면으로 이동합니다.
          </span>
          <span className="w-[255px] font-pretendard text-[12px] font-[400] leading-[19.2px]">
            재시도를 하시거나 계속해서 오류가 발생할 경우
            <br />
            니어니어 고객센터로 문의 주시기 바랍니다.
          </span>
        </div>
        <div className="pt-[95px] pb-[204px] flex flex-col items-center">
          <CheckCircle />
        </div>
        <button className="mx-auto flex items-center justify-center w-[329px] h-[51px] p-[4px] rounded-full bg-[#638404] font-pretendard text-[18px] font-[600] leading-[28.8px] text-center text-white">
          결제를 완료했어요.
        </button>
      </div>
    </>
  );
}

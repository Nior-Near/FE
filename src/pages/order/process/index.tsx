import CheckCircle from "@/src/assets/check_circle.svg";
import Script from "next/script";
import { useEffect } from "react";
import { RequestPayResponse } from "iamport-typings";
import { axios } from "@/src/lib/axios";
import Title from "@/src/components/Title";
import Navbar from "@/src/components/Navbar";
import { nanoid } from "nanoid";

export default function Order_Process({
  orderId,
  setIndex,
}: {
  orderId: number | undefined;
  setIndex: any;
}) {
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
          merchant_uid: nanoid(),
          name: payload?.name,
          amount: payload?.amount,
          buyer_email: payload?.buyerEmail,
          buyer_name: payload?.buyerName,
          buyer_tel: payload?.buyerTel,
        },
        (response: RequestPayResponse) => {
          console.log(response);

          // if(response.success === true) {
          //   setIndex("done")
          // } else {
          //   setIndex("failed")
          // }

          setIndex("done");
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
        <Title route="결제" />
        <Navbar title="주문 및 결제" />
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

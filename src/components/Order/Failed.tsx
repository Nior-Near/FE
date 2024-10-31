import Arrow from "@/src/assets/arrow.svg";
import ErrorCircle from "@/src/assets/error_circle.svg";
import Navbar from "../Navbar";
import Link from "next/link";

export default function Order_Failed({
  storeId,
  store,
  orders,
}: {
  storeId: string;
  store: string;
  orders: string;
}) {
  return (
    <div className="h-dvh">
      <Navbar title="주문 실패" destination="/" />
      <div className="pt-[53px] px-[24px] flex flex-col gap-[10px]">
        <span className="font-pretendard text-[24px] font-[600] leading-[38.4px]">
          주문처리에 실패하여
          <br />
          주문을 완료하지 못했습니다.
        </span>
        <span className="w-[255px] font-pretendard text-[12px] font-[400] leading-[19.2px]">
          재시도를 하시거나 계속해서 오류가 발생할 경우
          <br />
          니어니어 고객센터로 문의 주시기 바랍니다.
        </span>
      </div>
      <div className="pt-[95px] pb-[158px] flex flex-col items-center gap-[21px]">
        <ErrorCircle />
        <Link
          href="http://pf.kakao.com/_qxgcgG/chat"
          className="font-pretendard text-[12px] font-[600] leading-[19.2px] underline text-[#707a87] text-center"
        >
          니어니어 고객센터 바로가기
        </Link>
      </div>
      <div className="flex flex-row items-center justify-center gap-[20px]">
        <Link
          href="/home"
          className="h-[40px] rounded-[100px] px-[24px] py-[10px] flex items-center justify-center self-stretch bg-[#97b544] font-pretendard text-[16px] font-[600] leading-[25.6px] text-center text-white"
        >
          니어니어 홈으로
        </Link>
        <Link
          href={{
            pathname: "/order",
            query: {
              storeId,
              store,
              orders,
            },
          }}
          className="h-[40px] rounded-[100px] px-[24px] py-[10px] flex items-center justify-center self-stretch bg-[#638404] font-pretendard text-[16px] font-[600] leading-[25.6px] text-center text-white"
        >
          다시 주문하기
        </Link>
      </div>
    </div>
  );
}

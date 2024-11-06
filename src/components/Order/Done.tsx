import Image from "next/image";
import Link from "next/link";
import Title from "../Title";
import Navbar from "../Navbar";
import { Done } from "./interface";
import { copyToClipboard } from "@/src/lib/copyToClipboard";
import toast, { Toaster } from "react-hot-toast";

export default function Order_Done({ data }: { data: Done | null }) {
  return (
    <div className="relative z-0">
      <Toaster position="bottom-center" />
      <Title route="주문 완료" />
      <svg
        width="375"
        height="327"
        viewBox="0 0 375 327"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-[-47px] z-[-9]"
      >
        <circle cx="187" cy="-210" r="537" fill="#486300" />
      </svg>
      <Navbar title="주문 완료" contrast />
      <div className="pt-[41px] flex flex-col items-center gap-[16px]">
        <span className="font-pretendard text-[20px] font-[600] leading-[32px] text-white">
          음식 주문이 완료되었습니다
        </span>
        <span className="font-pretendard font-[400] text-[12px] leading-[19.2px] text-white text-center">
          아래 계좌로 주문 금액을 입금해주시면
          <br />
          주문이 확정됩니다.
        </span>
      </div>
      <div className="pb-[47px] mt-[27px] mx-auto w-[204px] flex flex-col items-center gap-[8px]">
        <div className="w-[120px] h-[120px] rounded-full bg-white text-center shadow-[0px_0px_5px_rgba(0,0,0,0.25)] overflow-hidden">
          <Image src={data?.profileImage!} width={120} height={120} alt="" />
        </div>
        <div className="flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="8"
            viewBox="0 0 16 8"
            fill="none"
          >
            <path d="M8 0L0 8H16L8 0Z" fill="#DBE8B6" />
          </svg>
          <div className="w-[204px] bg-[#dbe8b6] rounded-[12px] px-[21.5px] py-[8px]">
            <p className="font-pretendard text-[16px] font-[400] leading-[25.6px] text-center text-[#222224]">
              {data?.message}
            </p>
          </div>
        </div>
      </div>
      <div className="w-full py-4 bg-[#f0f2f5] border-dashed border-[1px] border-[#d1d6db] flex-col justify-start items-start gap-1 inline-flex">
        <div className="px-6 flex-col justify-start items-start gap-3 flex">
          <span className="text-[#222224] text-[18px] font-semibold font-pretendard leading-[28.80px]">
            주문 상품 총 2개
          </span>
          {data?.orderMenus?.map((menu, index) => (
            <div
              key={menu?.menuName}
              className="self-stretch justify-between items-start inline-flex"
            >
              <div className="text-[#333e4e] text-sm font-normal font-pretendard leading-snug">
                {menu?.menuName}
              </div>
              <div className="w-[207px] text-right text-[#333e4e] text-sm font-semibold font-pretendard">
                {menu?.menuPrice} * {menu?.quantity}
              </div>
            </div>
          ))}

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="327"
            height="2"
            viewBox="0 0 375 2"
            fill="none"
          >
            <path d="M-8 1H384" stroke="black" strokeOpacity="0.1" />
          </svg>

          <div className="w-[326px] justify-between items-center inline-flex">
            <span className="w-[79px] text-[#333e4e] text-base font-normal font-pretendard leading-relaxed">
              총 결제금액
            </span>
            <div className="w-[79px] text-right text-[#638404] text-xl font-semibold font-pretendard leading-loose">
              {data?.totalPrice?.toLocaleString()}
            </div>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="327"
            height="2"
            viewBox="0 0 375 2"
            fill="none"
          >
            <path d="M-8 1H384" stroke="black" strokeOpacity="0.1" />
          </svg>

          <span className="text-[#222224] text-[18px] font-semibold font-pretendard leading-[28.80px]">
            입금 계좌
          </span>
          <div className="w-full flex flex-row items-center justify-between">
            <span className="font-pretendard text-[16px] font-[400] text-[#333E4E]">
              토스뱅크 1001-5426-4716
            </span>
            <span
              className="font-pretendard text-[20px] font-[600] text-[#638404] select-none cursor-pointer"
              onClick={() =>
                copyToClipboard("토스뱅크 1001-5426-4716", {
                  onSuccess() {
                    toast("계좌번호를 복사하였습니다.", {
                      style: {
                        padding: "8px 24px 8px 24px",
                        borderRadius: "18px",
                        background: "#3b3b53",
                        fontFamily: "var(--font-pretendard), sans-serif",
                        fontSize: "14px",
                        fontStyle: "normal",
                        fontWeight: 600,
                        lineHeight: "normal",
                        textAlign: "center",
                        color: "#fff",
                      },
                    });
                  },
                  onError(error) {
                    toast("계좌번호를 복사하지 못하였습니다.", {
                      style: {
                        padding: "8px 24px 8px 24px",
                        borderRadius: "18px",
                        background: "#bf3434",
                        fontFamily: "var(--font-pretendard), sans-serif",
                        fontSize: "14px",
                        fontStyle: "normal",
                        fontWeight: 600,
                        lineHeight: "normal",
                        textAlign: "center",
                        color: "#fff",
                      },
                    });
                  },
                })
              }
            >
              복사하기
            </span>
          </div>
          <span className="font-pretendard text-[16px] font-[400] text-[#707A87]">
            예금주명: 조예원 (모임통장)
          </span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="327"
            height="2"
            viewBox="0 0 375 2"
            fill="none"
          >
            <path d="M-8 1H384" stroke="black" strokeOpacity="0.1" />
          </svg>

          <span className="font-pretendard text-[18px] font-[600] text-[#222224]">안내사항</span>

          <div className="font-pretendard text-[16px] font-[400] text-[#707A87]">
            <ol type="1">
              <li>입금자명과 주문자명은 반드시 일치해야 합니다.</li>
              <li>
                입금이 완료되면 주문은 자동으로 확정이 되며, 실시간 주문 현황은 니어니어
                마이페이지에서 확인하실 수 있습니다.
              </li>
              <li>
                입금 완료 이후에는 환불이 어려우며, 주문에 문제가 있거나 잘못 주문하셨다면 니어니어
                고객센터로 문의해 주시길 바랍니다.
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div className="my-[40px] w-full inline-flex items-center gap-[20px] justify-center">
        <Link
          href="/home"
          className="px-[24px] py-[10px] flex items-center justify-center h-[40px] rounded-full bg-[#97b544] font-pretendard font-[600] text-[16px] leading-[25.6px] text-white text-center"
        >
          니어니어 홈으로
        </Link>
        <Link
          href={`/order/history/${data?.orderId}`}
          className="px-[24px] py-[10px] flex items-center justify-center h-[40px] rounded-full bg-[#638404] font-pretendard font-[600] text-[16px] leading-[25.6px] text-white text-center"
        >
          주문내역 보러가기
        </Link>
      </div>
    </div>
  );
}

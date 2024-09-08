import ErrorCircle from "@/src/assets/error_circle.svg";
import Navbar from "../components/Navbar";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-dvh flex flex-col">
      <Navbar title="404" />
      <div className="flex-1 flex flex-col items-center justify-center">
        <ErrorCircle />
        <span className="text-[18px] font-pretendard font-[500] leading-[38.4px]">
          페이지를 찾을 수 없습니다.
        </span>
        <span className="text-[14px] font-pretendard font-[400]">
          주소를 올바르게 입력하였는지 확인해보세요.
        </span>
        <Link
          href="http://pf.kakao.com/_qxgcgG/chat"
          className="mt-8 font-pretendard text-[12px] font-[600] leading-[19.2px] underline text-[#707a87] text-center"
        >
          니어니어 고객센터 바로가기
        </Link>
      </div>
      <div className="px-[23px] pb-[40px]">
        <Link
          href="/"
          className="h-[51px] p-[4px] flex items-center justify-center gap-[4px] self-stretch rounded-full bg-[#638404] font-pretendard font-[600] text-[18px] leading-[28.8px] text-center text-white"
        >
          홈으로 돌아가기
        </Link>
      </div>
    </div>
  );
}

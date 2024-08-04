import LoginModal from "@/src/components/LoginModal";
import bgImg from "../../assets/loginbg.png";

export default function Home() {
  return (
    <div
      className="min-h-screen flex flex-col relative "
      style={{
        backgroundImage: `url(${bgImg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="pt-[74px] pl-[37px]">
        <p className="text-[32px] font-inter text-white leading-[41px] font-normal">
          노년의 정,
          <br />
          인생이 담긴
          <br />
          <span className="font-bold">깊은 위로와 밥 한끼</span>
        </p>
      </div>
      <p className="text-white font-inter text-[14px] pl-[37px] underline mt-[27px]">
        니어니어에 요리사로 참여하고 싶으신가요?
      </p>
      <button className="flex justify-center items-center whitespace-nowrap self-end py-[10px] px-[24px] bg-[#EEF3E2] rounded-full text-[#638404] font-pretendard text-[14px] font-medium leading-[20px] mt-[127px] mr-[12px]">
        니어니어 알아보기
      </button>
      <LoginModal isLoginRequired={false} />
    </div>
  );
}

import { useRouter } from "next/router";

interface HeaderProps {
  step: number;
}

const Header: React.FC<HeaderProps> = ({ step }) => {
  const router = useRouter();

  const progressBarStyles: Record<number, { width: string; height: string }> = {
    1: { width: "43px", height: "3px" },
    2: { width: "165px", height: "3px" },
    3: { width: "274px", height: "3px" },
    4: { width: "336px", height: "3px" },
  };

  return (
    <header className="relative flex items-center justify-center h-[76px] p-4">
      <div
        onClick={() => router.back()}
        className="absolute left-[27px] cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="w-[24px] h-[24px]"
        >
          <path
            d="M4 12L3.29289 12.7071L2.58579 12L3.29289 11.2929L4 12ZM19 11C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13V11ZM9.29289 18.7071L3.29289 12.7071L4.70711 11.2929L10.7071 17.2929L9.29289 18.7071ZM3.29289 11.2929L9.29289 5.29289L10.7071 6.70711L4.70711 12.7071L3.29289 11.2929ZM4 11H19V13H4V11Z"
            fill="#222224"
          />
        </svg>
      </div>
      <h1 className="text-[16px] font-pretendard text-[#3B3B53] font-semibold">
        요리사 신청하기
      </h1>
      <div
        className="absolute bottom-0 w-[100%] h-0 border-t"
        style={{
          borderColor: "rgba(0, 0, 0, 0.10)",
          borderWidth: "1px",
          opacity: "var(--sds-size-stroke-border)",
        }}
      ></div>
      <div
        className="absolute bottom-[-1px] left-0"
        style={{
          ...progressBarStyles[step],
          backgroundColor: "var(--G--40, #97B544)",
          borderRadius: " 0 1.5px 1.5px 0",
        }}
      ></div>
    </header>
  );
};

export default Header;

import Link from "next/link";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow">
      <Link href="/" legacyBehavior>
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
      </Link>
      <h1 className="text-[16px] font-pretendard text-[#3B3B53] font-semibold mx-auto">
        요리사 신청하기
      </h1>
      <div className="w-[24px] h-[24px]" /> {/* Right side empty space */}
    </header>
  );
};

export default Header;

export default function LoginModal() {
  return (
    <div className="bg-white h-[307px] w-full pt-[46px] px-[23px] pb-[53px] text-center rounded-t-[16px] absolute bottom-0 left-0">
      {/* 로그인 유무에 따라 멘트 수정할 예정 */}
      <div className="text-[20px] font-inter font-medium mb-[20px]">
        SNS로 빠르게 니어니어 로그인
      </div>
      <div className="text-[#707A87] font-inter text-[14px] font-medium mb-[36px]">
        네이버로 3초만에 간편하게 로그인하고
        <br />
        니어니어의 음식을 즐겨보세요!
      </div>
      <button className="flex items-center justify-center gap-[12px] bg-[#57BC63] text-white font-inter py-[16px] px-[32px] rounded-full text-[16px] font-semibold w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="27"
          viewBox="0 0 28 27"
          fill="none"
        >
          <path
            d="M17.0906 5.0625V13.643L10.9096 5.0625H4.27637V21.9375H10.9096V13.5L17.0906 21.9375H23.7238V5.0625H17.0906Z"
            fill="white"
          />
        </svg>
        네이버 로그인
      </button>
      <p className="text-[#5DB075] font-pretendard text-[16px] font-semibold mt-[16px]">
        로그인 없이 둘러보기
      </p>
    </div>
  );
}

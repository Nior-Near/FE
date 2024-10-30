import { useRouter } from "next/router";
import Link from "next/link";
interface LoginModalProps {
  isLoginRequired?: boolean;
  dimmed?: boolean;
}

export default function LoginModal({
  isLoginRequired,
  dimmed,
}: LoginModalProps) {
  const router = useRouter();

  const handleNaverLogin = () => {
    const redirectUri = `${process.env.NEXT_PUBLIC_BASE_URL}/auth/oauth-response`;

    const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL;


    const naverLoginUrl = `${apiBaseUrl}/api/v1/auth/oauth2/naver?redirect_uri=${encodeURIComponent(
      redirectUri
    )}`;

    console.log("Navigating to:", naverLoginUrl);
    window.location.href = naverLoginUrl;
  };

  return (
    <div
      className={`fixed z-50 ${
        dimmed
          ? "h-dvh fixed z-50 top-0 flex flex-col items-center justify-end bg-[rgba(0,0,0,0.5)]"
          : "bottom-0"
      }`}
    >
      <div className="bg-white h-[307px] w-[375px] pt-[46px] px-[23px] pb-[53px] text-center rounded-t-[16px]">
        <div className="text-[20px] font-inter font-medium mb-[20px]">
          {isLoginRequired
            ? "이 기능은 로그인이 필요해요"
            : "SNS로 빠르게 니어니어 로그인"}
        </div>
        <div className="text-[#707A87] font-inter text-[14px] font-medium mb-[36px]">
          네이버로 3초만에 간편하게 로그인하고
          <br />
          니어니어의 음식을 즐겨보세요!
        </div>

        <button
          className="flex items-center justify-center gap-[12px] bg-[#57BC63] text-white font-inter py-[16px] px-[32px] rounded-full text-[15px] font-semibold w-full"
          onClick={handleNaverLogin}
        >
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

        <Link href="/home">
          <p className="text-[#5DB075] font-pretendard text-[16px] font-semibold mt-[16px]">
            로그인 없이 둘러보기
          </p>
        </Link>
      </div>
    </div>
  );
}

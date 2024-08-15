import ArrowRight from "@/src/assets/arrow_right.svg";
import NavigateNext from "@/src/assets/navigate_next.svg";
import Envelope from "@/src/assets/envelope.svg";
import { useState } from "react";
import LoginModal from "@/src/components/LoginModal";

export default function My() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div>
      <div className="w-full h-dvh relative bg-[#638404]">
        <div className="w-full h-[calc(100%_-_187px)] left-0 top-[187px] absolute bg-white rounded-tl-[28px] rounded-tr-[28px]" />
        <div className="p-1 left-[24px] top-[59px] absolute bg-white rounded-[999px] shadow justify-start items-center gap-1 inline-flex">
          <ArrowRight className="w-6 h-6" />
        </div>
        <div className="text-nowrap left-[173px] top-[101px] absolute text-white/30 text-[20px] font-[600] font-pretendard leading-[32px]">
          시니어 요리사가 당신 곁에
        </div>
        <div className="flex flex-col justify-center items-center text-nowrap h-[76px] left-[99px] top-[117px] absolute text-white/30 text-[64px] font-[600] font-pretendard">
          Nior Near
        </div>
        <div className="top-[151px] absolute flex-col justify-start items-end gap-[29px] inline-flex">
          <div className="px-[24px] w-full self-stretch justify-center items-end gap-[40px] inline-flex">
            <div className="justify-start items-end gap-[13px] flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="88"
                height="88"
                viewBox="0 0 104 104"
                fill="none"
              >
                <g filter="url(#filter0_d_194_3587)">
                  <rect x="8" y="8" width="88" height="88" rx="44" fill="#DBE8B6" />
                  <rect
                    x="6.5"
                    y="6.5"
                    width="91"
                    height="91"
                    rx="45.5"
                    stroke="white"
                    strokeWidth="3"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M65.2005 43.2C65.2005 50.4902 59.2907 56.4 52.0005 56.4C44.7104 56.4 38.8005 50.4902 38.8005 43.2C38.8005 35.9098 44.7104 30 52.0005 30C59.2907 30 65.2005 35.9098 65.2005 43.2ZM60.8005 43.2C60.8005 48.0601 56.8606 52 52.0005 52C47.1404 52 43.2005 48.0601 43.2005 43.2C43.2005 38.3399 47.1404 34.4 52.0005 34.4C56.8606 34.4 60.8005 38.3399 60.8005 43.2Z"
                    fill="#638404"
                  />
                  <path
                    d="M52.0005 63C37.7569 63 25.6209 71.4225 20.998 83.2225C22.1242 84.3408 23.3106 85.3985 24.5518 86.3905C27.9942 75.5569 38.7933 67.4 52.0005 67.4C65.2078 67.4 76.0069 75.5569 79.4493 86.3906C80.6905 85.3986 81.8769 84.3408 83.003 83.2225C78.3802 71.4225 66.2442 63 52.0005 63Z"
                    fill="#638404"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_194_3587"
                    x="0"
                    y="0"
                    width="104"
                    height="104"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="2.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_194_3587"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_194_3587"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
              <div className="text-[#707a87] text-[16px] font-[400] font-pretendard leading-[25.6px]">
                로그인해주세요.
              </div>
            </div>
            <div className="w-[85px] py-[5px] flex-col justify-start items-start gap-1 inline-flex">
              <div className="self-stretch px-1 bg-[#96b444] justify-center items-center gap-1 inline-flex">
                <button
                  className="h-[19px] text-[#f0f2f5] text-[12px] font-pretendard leading-[19.2px]"
                  onClick={() => setShowLogin(true)}
                >
                  로그인/회원가입
                </button>
              </div>
            </div>
          </div>
          {showLogin && <LoginModal dimmed />}

          <div className="w-[375px] px-[24px] flex flex-col gap-[40px] bg-white">
            <div className="h-[94px] px-[24px] py-[16px] bg-[#638404] rounded-[14px] flex-col justify-start items-start gap-[9px] flex">
              <div className="justify-start items-start gap-[160px] inline-flex">
                <div className="text-nowrap text-white text-[12px] font-pretendard leading-[19.2px]">
                  니어니어 포인트
                </div>
                <div className="justify-center items-center gap-1 flex">
                  <div className="justify-center items-center gap-1 flex">
                    <div className="text-nowrap text-white text-[14px] font-[600] font-pretendard leading-none">
                      충전하기
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-white text-[28px] font-[600] font-pretendard leading-none">
                0p
              </div>
            </div>

            <div className="flex-col justify-start items-start gap-[18px] inline-flex bg-white mb-[65px]">
              <div className="self-stretch flex-col justify-start items-center gap-[18px] flex">
                <div className="relative h-[35px]">
                  <div className="flex flex-row justify-between items-center gap-[10px] mb-[9px]">
                    <div className="w-[293px] text-[#333e4e] text-[16px] font-pretendard leading-[25.6px]">
                      편지함
                    </div>
                    <NavigateNext width="24" height="24" />
                  </div>
                  <svg
                    className="absolute -left-[24px] bottom-0 w-[375px]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="327"
                    height="2"
                    viewBox="0 0 373 2"
                    fill="none"
                  >
                    <path d="M0.5 1L372.5 1.00003" stroke="#A8B1B9" strokeWidth="0.5" />
                  </svg>
                </div>
                <div className="flex flex-row items-center gap-[7px] self-stretch">
                  {[0, 1, 2].map((value, index) => (
                    <div
                      key={value}
                      className="w-[105px] h-[130px] flex flex-col items-center gap-2"
                    >
                      <Envelope />
                      <div>
                        <div className="text-[#707A87] text-center font-pretendard text-[14px] font-[600] leading-none">
                          이영자 요리사
                        </div>
                        <div className="text-[#707A87] text-center font-pretendard text-[12px] font-[400] leading-[19.2px]">
                          2024.08.02
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="self-stretch h-[35px] flex-col justify-start items-center gap-[9px] flex">
                <div className="relative h-[35px]">
                  <div className="flex flex-row justify-between items-center gap-[10px] mb-[9px]">
                    <div className="w-[293px] text-[#333e4e] text-[16px] font-pretendard leading-[25.6px]">
                      주문내역
                    </div>
                    <NavigateNext width="24" height="24" />
                  </div>
                  <svg
                    className="absolute -left-[24px] bottom-0 w-[375px]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="327"
                    height="2"
                    viewBox="0 0 373 2"
                    fill="none"
                  >
                    <path d="M0.5 1L372.5 1.00003" stroke="#A8B1B9" strokeWidth="0.5" />
                  </svg>
                </div>
              </div>

              <div className="self-stretch h-[35px] flex-col justify-start items-center gap-[9px] flex">
                <div className="relative h-[35px]">
                  <div className="flex flex-row justify-between items-center gap-[10px] mb-[9px]">
                    <div className="w-[293px] text-[#333e4e] text-[16px] font-pretendard leading-[25.6px]">
                      요리사 신청하기
                    </div>
                    <NavigateNext width="24" height="24" />
                  </div>
                  <svg
                    className="absolute -left-[24px] bottom-0 w-[375px]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="327"
                    height="2"
                    viewBox="0 0 373 2"
                    fill="none"
                  >
                    <path d="M0.5 1L372.5 1.00003" stroke="#A8B1B9" strokeWidth="0.5" />
                  </svg>
                </div>
              </div>
              <div className="self-stretch h-[35px] flex-col justify-start items-center gap-[9px] flex">
                <div className="relative h-[35px]">
                  <div className="flex flex-row justify-between items-center gap-[10px] mb-[9px]">
                    <div className="w-[293px] text-[#333e4e] text-[16px] font-pretendard leading-[25.6px]">
                      고객 센터
                    </div>
                    <NavigateNext width="24" height="24" />
                  </div>
                  <svg
                    className="absolute -left-[24px] bottom-0 w-[375px]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="327"
                    height="2"
                    viewBox="0 0 373 2"
                    fill="none"
                  >
                    <path d="M0.5 1L372.5 1.00003" stroke="#A8B1B9" strokeWidth="0.5" />
                  </svg>
                </div>
              </div>
              <div className="self-stretch h-[35px] flex-col justify-start items-center gap-[9px] flex">
                <div className="relative h-[35px]">
                  <div className="flex flex-row justify-between items-center gap-[10px] mb-[9px]">
                    <div className="w-[293px] text-[#333e4e] text-[16px] font-pretendard leading-[25.6px]">
                      이용 가이드
                    </div>
                    <NavigateNext width="24" height="24" />
                  </div>
                  <svg
                    className="absolute -left-[24px] bottom-0 w-[375px]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="327"
                    height="2"
                    viewBox="0 0 373 2"
                    fill="none"
                  >
                    <path d="M0.5 1L372.5 1.00003" stroke="#A8B1B9" strokeWidth="0.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

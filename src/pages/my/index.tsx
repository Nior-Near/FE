import Arrow from "@/src/assets/arrow.svg";
import NavigateNext from "@/src/assets/navigate_next.svg";
import LetterRead from "@/src/assets/letter_read.svg";
import LetterUnread from "@/src/assets/letter_unread.svg";
import Avatar from "@/src/assets/avatar_default.svg";
import { useEffect, useState } from "react";
import LoginModal from "@/src/components/LoginModal";
import { axios } from "@/src/lib/axios";
import { GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import Title from "@/src/components/Title";
import dayjs from "dayjs";
import { Letter } from "@/src/components/Letters/ViewLetter";
import { useQuery } from "@tanstack/react-query";

interface Data {
  memberId: number;
  nickname: string;
  point: number;
  imageUrl: string;
  letterResponseDtos: Letter[];
}

export default function My() {
  const [showLogin, setShowLogin] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const router = useRouter();

  const { data, isSuccess } = useQuery<Data>({
    queryFn: () => axios.get("/members").then((response) => response.data?.result),
    queryKey: ["my"],
  });

  useEffect(() => {
    if (router.query.showAlert === "true") {
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 5000); // 5초 후에 자동으로 사라지게 설정
    }
  }, [router.query]);

  return (
    <div>
      <Title route="마이 페이지" />
      <div className="w-full h-dvh relative bg-[#638404]">
        <div className="w-full h-[calc(100%_-_187px)] left-0 top-[187px] absolute bg-white rounded-tl-[28px] rounded-tr-[28px]" />
        <div className="p-1 left-[24px] top-[59px] absolute bg-white rounded-[999px] shadow justify-start items-center gap-1 inline-flex">
          <Arrow className="w-6 h-6 cursor-pointer" onClick={() => router.push("/home")} />
        </div>
        <div className="text-nowrap left-[173px] top-[101px] absolute text-white/30 text-[20px] font-[600] font-pretendard leading-[32px]">
          시니어 요리사가 당신 곁에
        </div>
        <div className="flex flex-col justify-center items-center text-nowrap h-[76px] left-[99px] top-[117px] absolute text-white/30 text-[64px] font-[600] font-pretendard">
          Nior Near
        </div>
        <div className="top-[151px] absolute flex-col justify-start items-end gap-[29px] inline-flex">
          <div className="px-[24px] w-full self-stretch justify-between items-end gap-[40px] inline-flex">
            <div className="justify-start items-end gap-[13px] flex">
              {!!data?.imageUrl ? (
                <img src={data?.imageUrl} width={88} height={88} className="rounded-full" />
              ) : (
                <Avatar />
              )}
              <div className="text-[#707a87] text-[16px] font-[400] font-pretendard leading-[25.6px]">
                {data ? data?.nickname : "로그인해주세요."}
              </div>
            </div>
          </div>
          {showLogin && <LoginModal dimmed />}

          <div className="w-[375px] px-[24px] flex flex-col gap-[40px] bg-white">
            <div className="flex-col justify-start items-start gap-[18px] inline-flex bg-white">
              <div className="self-stretch flex-col justify-start items-center gap-[18px] flex">
                <Link href={isSuccess ? "/my/letters" : "/"} className="relative h-[35px]">
                  <div className="flex flex-row justify-between items-center gap-[10px] mb-[9px]">
                    <div className="w-[293px] text-[#333e4e] text-[16px] font-pretendard leading-[25.6px]">
                      편지함
                    </div>
                    <NavigateNext width="24" height="24" className="[&_path]:fill-[#222224]" />
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
                </Link>
                {data?.letterResponseDtos && data.letterResponseDtos.length > 0 && (
                  <Link
                    href={isSuccess ? "/my/letters" : "/"}
                    className="flex flex-row items-center gap-[7px] self-stretch"
                  >
                    {data?.letterResponseDtos?.map((letter, index) => (
                      <div
                        key={letter?.letterId}
                        className="w-[105px] h-[130px] flex flex-col items-center gap-2"
                      >
                        {letter?.status === "열람 완료" ? <LetterRead /> : <LetterUnread />}
                        <div>
                          <div className="text-[#707A87] text-center font-pretendard text-[14px] font-[600] leading-none">
                            {letter?.senderName}
                          </div>
                          <div className="text-[#707A87] text-center font-pretendard text-[12px] font-[400] leading-[19.2px]">
                            {dayjs(letter?.createAt).format("YYYY년 M월 D일")}
                          </div>
                        </div>
                      </div>
                    ))}
                  </Link>
                )}
              </div>
              <div className="self-stretch h-[35px] flex-col justify-start items-center gap-[9px] flex">
                <div className="relative h-[35px]">
                  <Link
                    href={isSuccess ? "/my/orders" : "/"}
                    className="flex flex-row justify-between items-center gap-[10px] mb-[9px]"
                  >
                    <div className="w-[293px] text-[#333e4e] text-[16px] font-pretendard leading-[25.6px]">
                      주문내역
                    </div>
                    <NavigateNext width="24" height="24" className="[&_path]:fill-[#222224]" />
                  </Link>
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
                  <Link
                    href={isSuccess ? "/chefrequest" : "/"}
                    className="flex flex-row justify-between items-center gap-[10px] mb-[9px]"
                  >
                    <div className="w-[293px] text-[#333e4e] text-[16px] font-pretendard leading-[25.6px]">
                      요리사 신청하기
                    </div>
                    <NavigateNext width="24" height="24" className="[&_path]:fill-[#222224]" />
                  </Link>
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
                  <Link
                    href="http://pf.kakao.com/_qxgcgG/chat"
                    className="flex flex-row justify-between items-center gap-[10px] mb-[9px]"
                  >
                    <div className="w-[293px] text-[#333e4e] text-[16px] font-pretendard leading-[25.6px]">
                      고객 센터
                    </div>
                    <NavigateNext width="24" height="24" className="[&_path]:fill-[#222224]" />
                  </Link>
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
                  <Link
                    href="https://bit.ly/3YJ6OXG"
                    className="flex flex-row justify-between items-center gap-[10px] mb-[9px]"
                  >
                    <div className="w-[293px] text-[#333e4e] text-[16px] font-pretendard leading-[25.6px]">
                      이용 가이드
                    </div>
                    <NavigateNext width="24" height="24" className="[&_path]:fill-[#222224]" />
                  </Link>
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
      {showNotification && (
        <div className="fixed bottom-[40px] left-1/2 transform -translate-x-1/2 py-[8px] px-[24px] bg-[#3B3B53] text-white text-center rounded-[10px]">
          신청이 완료되었습니다.
          <br />
          심사 후 판매까지 3~4일 소요될 수 있습니다.
        </div>
      )}
    </div>
  );
}

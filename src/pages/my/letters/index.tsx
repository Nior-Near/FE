import LetterRead from "@/src/assets/letter_read.svg";
import LetterUnread from "@/src/assets/letter_unread.svg";
import ViewLetter, { Letter } from "@/src/components/Letters/ViewLetter";
import Navbar from "@/src/components/Navbar";
import Title from "@/src/components/Title";
import { axios } from "@/src/lib/axios";
import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
import { GetServerSidePropsContext } from "next";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

interface Data {
  letterDTOs: Letter[];
}

export default function Letters() {
  const { data } = useQuery<Data["letterDTOs"]>({
    queryFn: () => axios.get("/letters").then((response) => response.data?.result),
    queryKey: ["letters"],
  });

  const [letter, setLetter] = useState<Letter | "sent" | null>(null);

  useEffect(() => {
    if (letter === "sent")
      toast("소중한 의견이 요리사님께 전달되었습니다", {
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
  }, [letter]);

  if (letter !== "sent" && letter !== null)
    return <ViewLetter data={letter} setLetter={setLetter} />;

  return (
    <>
      <Toaster position="bottom-center" />
      <Title route="편지함" />
      <div className="h-dvh">
        <Navbar title="편지함" />
        <div className="pt-[31px] px-[23px]">
          <div className="flex flex-col gap-[8px]">
            <span className="font-pretendard font-[600] leading-[38.4px] text-[24px]">
              따듯한 편지가 도착했어요!
            </span>
            <span className="font-pretendard text-[12px] font-[400] leading-[19.2px]">
              노인 요리사분들이 보내주신 편지를 읽고, 답장을 보내보세요!
            </span>
          </div>
          <div className="pt-[42px] grid grid-cols-3 gap-x-[7px] gap-y-[24px]">
            {data?.map((letter, index) => (
              <div
                key={letter?.letterId}
                className="w-[105px] h-[130px] flex flex-col items-center gap-[8px]"
                onClick={() => setLetter(letter)}
              >
                {letter?.status === "열람 완료" ? <LetterRead /> : <LetterUnread />}
                <div className="flex flex-col items-center">
                  <span className="text-[#1E2530] font-pretendard font-[600] text-[14px] leading-none">
                    {letter?.senderName}
                  </span>
                  <div className="text-[#707A87] text-center font-pretendard text-[12px] font-[400] leading-[19.2px]">
                    {dayjs(letter?.createAt).format("YYYY년 M월 D일")}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

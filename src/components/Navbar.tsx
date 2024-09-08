import Arrow from "@/src/assets/arrow.svg";
import { useRouter } from "next/router";
export default function Navbar({
  title,
  destination,
  onClick,
}: {
  title: string;
  destination?: string;
  onClick?: () => void;
}) {
  const router = useRouter();

  return (
    <>
      <nav className="w-full py-[16px] flex flex-row items-center justify-center relative">
        <Arrow
          width="24"
          height="24"
          className="ml-[27px] mr-auto cursor-pointer"
          onClick={
            onClick
              ? () => onClick()
              : () => (destination ? router.push(destination) : router.back())
          }
        />
        <span className="absolute font-pretendard text-[16px] font-[600] leading-[25.6px]">
          {title}
        </span>
      </nav>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="375"
        height="2"
        viewBox="0 0 375 2"
        fill="none"
      >
        <path d="M-8 1H384" stroke="black" strokeOpacity="0.1" />
      </svg>
    </>
  );
}

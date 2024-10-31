import Avatar from "../assets/avatar.svg";
import { axios } from "../lib/axios";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

export default function Header({
  isLoggedIn,
  selectedRegion,
  onRegionSelect,
}: {
  isLoggedIn: boolean;
  selectedRegion: string | null;
  onRegionSelect: () => void;
}) {
  const { data, isSuccess } = useQuery({
    queryKey: ["userProfile"],
    queryFn: async () => {
      const token = localStorage.getItem("accessToken");
      const response = await axios.get("/members", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.result; 
    },
    enabled: isLoggedIn,
  });

  const handleProfileClick = () => {
    window.location.href = "/my";
  };

  return (
    <header className="bg-white flex justify-between items-center py-[9px] relative">
      <Logo />
      <div className="flex items-center">
        {isLoggedIn ? (
          <button
            onClick={onRegionSelect}
            className="text-[#638404] font-pretendard leading-[22px]"
          >
            {selectedRegion ? selectedRegion : "지역 선택"}
          </button>
        ) : (
          <button
            onClick={onRegionSelect}
            className="text-[#638404] font-pretendard leading-[22px]"
            disabled
          >
            지역 선택
          </button>
        )}
        <ProfileIcon 
          onClick={handleProfileClick} 
          imageUrl={isSuccess && data?.imageUrl ? data.imageUrl : null} 
        />
      </div>
    </header>
  );
}

const Logo = () => (
  <div className="flex items-center justify-center ml-[26px] text-[#638404] text-[24px] mt-[5px] font-jalnan">
    니어니어
  </div>
);

const ProfileIcon = ({
  onClick,
  imageUrl,
}: {
  onClick: () => void;
  imageUrl: string | null;
}) => (
  <div className="ml-[21px] mr-[19px] cursor-pointer" onClick={onClick}>
    {imageUrl ? (
      <Image
        src={imageUrl}
        alt="Profile"
        width={40}
        height={40}
        className="rounded-full"
      />
    ) : (
      <Avatar className="h-[40px] w-[40px] rounded-full" />
    )}
  </div>
);

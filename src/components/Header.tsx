import Avatar from "../assets/avatar.svg";
import { axios } from "../lib/axios";
import { useEffect, useState } from "react";

interface HeaderProps {
  isLoggedIn: boolean;
  selectedRegion: string | null;
  onRegionSelect: () => void;
}

export default function Header({
  isLoggedIn,
  selectedRegion,
  onRegionSelect,
}: HeaderProps) {
  const [profileImage, setProfileImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfileImage = async () => {
      try {
        const response = await axios.get("/users");
        const data = response.data;

        if (data.isSuccess && data.result?.image_url) {
          setProfileImage(data.result.image_url);
        }
      } catch (error) {
        console.error("프로필 이미지 로드 실패:", error);
      }
    };

    if (isLoggedIn) {
      fetchProfileImage();
    }
  }, [isLoggedIn]);

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
        <ProfileIcon onClick={handleProfileClick} imageUrl={profileImage} />
        </div>
    </header>
  );
}

const Logo = () => (
  <div className="flex items-center justify-center ml-[26px] text-[#638404] text-[24px] mt-[5px] font-jalnan">
    니어니어
  </div>
);

interface ProfileIconProps {
  onClick: () => void;
  imageUrl: string | null;
}

const ProfileIcon = ({ onClick, imageUrl }: ProfileIconProps) => (
  <div className="ml-[21px] mr-[19px] cursor-pointer" onClick={onClick}>
    {imageUrl ? (
      <img src={imageUrl} alt="Profile" className="h-[40px] w-[40px] rounded-full" />
    ) : (
      <Avatar className="h-[40px] w-[40px] rounded-full" />
    )}
  </div>
);

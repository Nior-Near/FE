import Avatar from "../assets/avatar.svg";

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
  const handleProfileClick = () => {
    window.location.href = "/my";
  };

  return (
    <header className="bg-white flex justify-between items-center py-[9px] relative">
      <div className="flex items-center justify-center ml-[26px] text-[#638404] text-[24px] mt-[5px] font-jalnan">
        니어니어
      </div>
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
        <div
          className="ml-[21px] mr-[19px] cursor-pointer"
          onClick={handleProfileClick}
        >
          <Avatar className="h-[40px] w-[40px] rounded-full" />
        </div>
      </div>
    </header>
  );
}

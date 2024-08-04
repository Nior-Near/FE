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
  return (
    <header className="bg-white flex justify-between items-center py-[9px]">
      <div className="flex flex-row items-center ml-[26px]">
        <div className="text-green-700 text-2xl font-reenie font-medium mr-[11px]">
          Nior
        </div>
        <div className="text-green-700 text-2xl font-reenie font-medium">
          Near
        </div>
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
        <div className="ml-[21px] mr-[19px]">
          <img
            src="/profile.png"
            alt="Profile"
            className="h-[40px] w-[40px] rounded-full"
          />
        </div>
      </div>
    </header>
  );
}

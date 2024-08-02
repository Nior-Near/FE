export default function Header() {
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
        <button className="text-[#638404] font-normal">지역 선택</button>
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

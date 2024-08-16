import React from "react";
import { useRouter } from "next/router";

interface FormData {
  menuName: string;
  menuOneServing: number | null;
  menuIntroduction: string;
  menuImage: File | null;
}

interface MenuListProps {
  menus: FormData[];
  onBoxClick: () => void;
}

const MenuList: React.FC<MenuListProps> = ({ menus, onBoxClick }) => {
  
  const router = useRouter();

  const handleRegisterClick = () => {
    if (menus.length > 0) {
      // 마이페이지에서 알림 떠야함
      router.push({
        pathname: "/my",
        query: { showAlert: "true" },
      });
    }
  };
  
  return (
    <div className="px-[23px] h-[765px] flex flex-col justify-between">
      <div>
        <div className="text-[20px] font-semibold mt-[44px]">메뉴 등록</div>

        {menus.length === 0 && (
          <div className="mt-[20px] flex flex-col items-center">
            <div
              onClick={onBoxClick}
              className="flex flex-col justify-center items-center w-[345px] h-[99px] rounded-[10px] gap-[14px] py-[16px] px-[12px] cursor-pointer"
              style={{ boxShadow: "0px 0px 5px 0px rgba(0, 0, 0, 0.25)" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fill="none"
              >
                <rect width="31" height="31" rx="15.5" fill="#DBE8B6" />
                <path
                  d="M14.207 16.7923H6.45703V14.209H14.207V6.45898H16.7904V14.209H24.5404V16.7923H16.7904V24.5423H14.207V16.7923Z"
                  fill="#638404"
                />
              </svg>
              <div className="text-[14px] text-[#707A87] font-pretendard leading-[22.4px]">
                판매할 음식의 정보를 추가해주세요
              </div>
            </div>
          </div>
        )}

        {menus.length > 0 && (
          <div className="mt-[20px] flex flex-col items-center">
            {menus.map((menu, index) => (
              <div
                key={index}
                className="flex items-center w-[345px] mb-[18px] p-[8px] rounded-[10px] bg-white"
                style={{ boxShadow: "0px 0px 5px 0px rgba(0, 0, 0, 0.25)" }}
              >
                {menu.menuImage ? (
                  <img
                    src={URL.createObjectURL(menu.menuImage)}
                    alt={menu.menuName}
                    className="w-[168px] h-[143px] object-cover rounded-[4px] flex-shrink-0"
                  />
                ) : (
                  <div className="w-[168px] h-[143px] bg-gray-200 rounded-[4px] flex-shrink-0"></div>
                )}
                <div className="ml-[13px]">
                  <div className="text-[16px] mb-[12px] leading-[25px] font-pretendard font-semibold">
                    {menu.menuName}
                  </div>
                  <div className="text-[14px] mb-[12px] font-pretendard text-[#1E2530]">
                    {menu.menuIntroduction}
                  </div>
                  <div className="text-[12px] leading-[19.2px] font-pretendard text-[#707A87]">
                    1,000원당 약 {menu.menuOneServing}g
                  </div>
                </div>
              </div>
            ))}

            <div
              onClick={onBoxClick}
              className="flex flex-col justify-center items-center w-[345px] h-[99px] rounded-[10px] gap-[14px] py-[16px] px-[12px] cursor-pointer"
              style={{ boxShadow: "0px 0px 5px 0px rgba(0, 0, 0, 0.25)" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fill="none"
              >
                <rect width="31" height="31" rx="15.5" fill="#DBE8B6" />
                <path
                  d="M14.207 16.7923H6.45703V14.209H14.207V6.45898H16.7904V14.209H24.5404V16.7923H16.7904V24.5423H14.207V16.7923Z"
                  fill="#638404"
                />
              </svg>
              <div className="text-[14px] text-[#707A87] font-pretendard leading-[22.4px]">
                판매할 음식의 정보를 추가해주세요
              </div>
            </div>
          </div>
        )}
      </div>

      <button
        type="button"
        onClick={handleRegisterClick}
        className={`flex w-[329px] h-[51px] justify-center items-center gap-[4px] flex-shrink-0 rounded-[999px] mb-[43px] ${
          menus.length > 0 ? "bg-[#638404]" : "bg-[#D1D6DB]"
        } text-white font-semibold leading-[28px]`}
      >
        총 {menus.length}개 등록하기
      </button>
    </div>
  );
};

export default MenuList;

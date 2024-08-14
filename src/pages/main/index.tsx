import { useState, useEffect } from "react";
import { axios } from "../../lib/axios";
import Header from "@/src/components/Header";
import Banner from "@/src/components/Banner";
import ChefCard from "@/src/components/ChefCard";
import RegionSelect from "@/src/components/RegionSelect";
import Kakao from "../../assets/kakao.svg";

interface Chef {
  profileImage: string;
  name: string;
}

interface Store {
  profileImage: string;
  name: string;
  tags: string[];
  introduction: string;
  temperature: number;
  reviewCount: number;
}

const fetchHomeData = async (regionId: number | null) => {
  try {
    const response = await axios.get("/home", {
      params: { region: regionId },
    });
    return response.data.result;
  } catch (error) {
    console.error("Failed to fetch home data:", error);
    return { chefs: [], stores: [] };
  }
};

// 검색
const searchChefsAndStores = async (keyword: string) => {
  try {
    const response = await axios.get("/home/search", {
      params: { keyword }, 
    });
    return response.data.result;
  } catch (error) {
    console.error("Failed to fetch search results:", error);
    return { stores: [] };
  }
};

export default function Main() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [selectedRegion, setSelectedRegion] = useState<number | null>(null);
  const [isRegionSelectOpen, setIsRegionSelectOpen] = useState(false);
  const [chefs, setChefs] = useState<Chef[]>([]);
  const [stores, setStores] = useState<Store[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchHomeData(selectedRegion);
        if (data) {
          setChefs(data.chefs || []);
          setStores(data.stores || []);
        }
      } catch (error) {
        console.error(error);
      }
    };

    getData();
  }, [selectedRegion]);

  const handleSearch = async () => {
    try {
      if (searchTerm.trim() === "") {
        const defaultData = await fetchHomeData(selectedRegion);
        setStores(defaultData.stores || []);
        setChefs(defaultData.chefs || []);
      } else {
        const data = await searchChefsAndStores(searchTerm);
        setStores(data.stores || []);

        setChefs(data.chefs || []);
      }
    } catch (error) {
      console.error("검색 결과를 가져오는 데 실패했습니다:", error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleRegionSelectClose = () => {
    setIsRegionSelectOpen(false);
  };

  const handleSetSelectedRegion = (regionId: number | null) => {
    setSelectedRegion(regionId);
  };

  const handleKakaoClick = () => {
    window.location.href = "http://pf.kakao.com/_qxgcgG/chat";
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        isLoggedIn={isLoggedIn}
        selectedRegion={selectedRegion?.toString() || "지역 선택"}
        onRegionSelect={() => setIsRegionSelectOpen(true)}
      />
      <Banner />

      <div className="flex justify-center">
        <div className="flex items-center my-[30px] w-[334px] gap-[12px] pl-[26px] pr-[12px] py-[4px] rounded-full border border-[#E4E8EB] bg-[#F0F2F5]">
          <input
            type="text"
            placeholder="요리사 성함, 메뉴명, 지역명을 검색하세요."
            className="flex-1 border-none outline-none bg-[#F0F2F5] text-gray-600 text-sm placeholder-gray-500 font-roboto"
            onChange={handleInputChange}
          />
          <svg
            onClick={handleSearch}
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
          >
            <path
              d="M17.5655 19.0529L12.123 13.6104C11.6911 13.956 11.1944 14.2296 10.6328 14.4311C10.0713 14.6327 9.47379 14.7335 8.84027 14.7335C7.27087 14.7335 5.94264 14.19 4.85558 13.1029C3.76852 12.0158 3.22499 10.6876 3.22499 9.11821C3.22499 7.54881 3.76852 6.22058 4.85558 5.13352C5.94264 4.04646 7.27087 3.50293 8.84027 3.50293C10.4097 3.50293 11.7379 4.04646 12.825 5.13352C13.912 6.22058 14.4555 7.54881 14.4555 9.11821C14.4555 9.75173 14.3548 10.3492 14.1532 10.9108C13.9516 11.4723 13.678 11.969 13.3325 12.401L18.775 17.8435L17.5655 19.0529ZM8.84027 13.0057C9.92013 13.0057 10.838 12.6278 11.5939 11.8719C12.3498 11.116 12.7278 10.1981 12.7278 9.11821C12.7278 8.03835 12.3498 7.12046 11.5939 6.36456C10.838 5.60866 9.92013 5.23071 8.84027 5.23071C7.76041 5.23071 6.84253 5.60866 6.08662 6.36456C5.33072 7.12046 4.95277 8.03835 4.95277 9.11821C4.95277 10.1981 5.33072 11.116 6.08662 11.8719C6.84253 12.6278 7.76041 13.0057 8.84027 13.0057Z"
              fill="#333E4E"
            />
          </svg>
        </div>
      </div>

      <div className="flex flex-col px-[24px]">
        <div className="text-[20px] text-[#222224] font-semibold leading-[32px] font-pretendard">
          니어니어와 함께하는 요리사
        </div>
        <div className="text-[12px] text-[#333E4E] font-pretendard leading-[19px]">
          긍정적인 편지를 작성해주시는 요리사를 소개합니다.
        </div>
      </div>

      <div className="flex overflow-x-scroll scrollbar-hide px-[24px] mt-[16px] mb-[60px] space-x-[15px]">
        {chefs &&
          chefs.map((chef, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-[90px] h-[90px] rounded-full bg-[#D9D9D9] flex items-center justify-center overflow-hidden border-4 border-white shadow-md">
                <img
                  src={chef.profileImage}
                  alt={chef.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-[8px] text-center font-pretendard text-[12px] leading-[19px]">
                {chef.name} 요리사
              </div>
            </div>
          ))}
      </div>

      <div className="flex flex-col px-[24px] mb-[16px]">
        <div className="text-[20px] text-[#222224] font-semibold leading-[32px] font-pretendard">
          단돈 천 원으로 밥 한끼 시키러 가기
        </div>
        <div className="text-[12px] text-[#333E4E] font-pretendard leading-[19px]">
          1,000원 단위로 먹고싶은 만큼만 음식을 주문하세요
        </div>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 gap-[16px] justify-items-center">
          {stores && stores.length > 0 ? (
            stores.map((store, index) => (
              <ChefCard
                key={index}
                name={store.name}
                tags={store.tags}
                description={store.introduction}
                temperature={store.temperature.toString()}
                reviews={store.reviewCount.toString()}
                imageUrl={store.profileImage}
              />
            ))
          ) : (
            <div className="text-center text-gray-500">
              해당하는 정보가 없습니다.
            </div>
          )}
        </div>
      </div>

      {isRegionSelectOpen && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
          <RegionSelect
            setSelectedRegion={handleSetSelectedRegion}
            onClose={handleRegionSelectClose}
          />
        </div>
      )}
      <div className="fixed bottom-[5%] right-[8px] cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="44"
          height="44"
          viewBox="0 0 44 44"
          fill="none"
        >
          <circle cx="22" cy="22" r="22" fill="white" fillOpacity="0.5" />
        </svg>
        <Kakao
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[32px] h-[31px]"
          onClick={handleKakaoClick}
        />
      </div>
    </div>
  );
}

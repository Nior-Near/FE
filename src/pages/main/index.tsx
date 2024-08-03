import Header from "@/src/components/Header";
import Banner from "@/src/components/Banner";
import ChefCard from "@/src/components/ChefCard";

export default function Main() {
  const chefs = [
    {
      name: "이영자",
      certification: "경력인증",
      kitchen: "니어키친",
      image: "/chef1.jpg",
    },
    {
      name: "김춘자",
      certification: "경력인증",
      kitchen: "니어키친",
      image: "/chef2.jpg",
    },
    {
      name: "박철배",
      certification: "경력인증",
      kitchen: "니어키친",
      image: "/chef3.jpg",
    },
    {
      name: "박철배",
      certification: "경력인증",
      kitchen: "니어키친",
      image: "/chef3.jpg",
    },
    {
      name: "박철배",
      certification: "경력인증",
      kitchen: "니어키친",
      image: "/chef3.jpg",
    },
    {
      name: "박철배",
      certification: "경력인증",
      kitchen: "니어키친",
      image: "/chef3.jpg",
    },
  ];

  return (
    <div>
      <Header />
      <Banner />

      <div className="flex justify-center">
        <div className="flex items-center my-[30px] w-[334px] gap-[12px] pl-[26px] pr-[12px] py-[4px] rounded-full border border-[#E4E8EB] bg-[#F0F2F5]">
          <input
            type="text"
            placeholder="요리사 성함, 메뉴명, 지역명을 검색하세요."
            className="flex-1 border-none outline-none bg-[#F0F2F5] text-gray-600 text-sm placeholder-gray-500 font-roboto"
          />
          <svg
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
        {chefs.map((chef, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-[90px] h-[90px] rounded-full bg-[#D9D9D9] flex items-center justify-center overflow-hidden border-4 border-white shadow-md">
              <img src={chef.image} alt={chef.name} className="w-full h-full object-cover" />
            </div>
            <div className="mt-[8px] text-center font-pretendard text-[12px] leading-[19px]">
              {chef.name} 요리사
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col px-[24px] mb-[16px]">
        <div className="text-[20px] text-[#222224] font-semibold leading-[32px] font-pretendard">
          밥 한끼 시키러 가기
        </div>
        <div className="text-[12px] text-[#333E4E] font-pretendard leading-[19px]">
          좋은 가게들의 단골이 되어보세요.
        </div>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 gap-[16px] justify-items-center">
          {chefs.map((chef, index) => (
            <ChefCard
              key={index}
              chef={chef}
              title="똥강아지들 밥 한끼 든든하게 먹고 다니고있..."
              price="9,900"
              temperature="36.5"
              reviews="14"
              imageUrl="/food.jpg"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

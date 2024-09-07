import ArrowRight from "@/src/assets/arrow_right.svg";
import { axios } from "@/src/lib/axios";
import { GetServerSidePropsContext } from "next";
import { useState } from "react";
import Map from "@/src/assets/map.svg";
import Title from "@/src/components/Title";

interface Data {
  orderStatus: "CONFIRM" | "COOKING" | "PICKUP"; //TODO "DONE" 추가
  placeAddress: string;
  storePhone: string;
  requestMessage: string;
  totalPrice: number;
  orderMenus: {
    menuName: string;
    menuPrice: number;
    quantity: number;
  }[];
}

export default function Order_History({ data }: { data: Data }) {
  const list = [
    {
      name: "주문접수",
      message: "주문을 접수했어요",
      description: "요리사님께서 주문을 수락하면 상품 제작에 들어가요.",
      barWidth: "83px",
    },
    {
      name: "상품제작",
      message: "상품 제작을 시작했어요",
      description: "요리와 편지를 정성스럽게 만들고 있습니다.",
      barWidth: "163px",
    },
    {
      name: "픽업",
      message: "상품을 픽업해주세요",
      description: "픽업 장소에서 요리와 편지를 받아주세요.",
      barWidth: "301px",
    },
    {
      name: "픽업",
      message: "맛있게 드세요 :)",
      description: "맛있는 하루 세끼 잘 챙겨드세요!",
      barWidth: "327px",
    },
  ];

  const [status, setStatus] = useState<number>(
    { CONFIRM: 0, COOKING: 1, PICKUP: 2 }?.[data?.orderStatus]
  );

  return (
    <div>
      <Title route="주문내역 상세보기" />
      <nav className="w-full py-[16px] flex flex-row items-center justify-center relative">
        <ArrowRight width="24" height="24" className="ml-[27px] mr-auto" />
        <span className="absolute font-pretendard text-[16px] font-[600] leading-[25.6px]">
          주문내역
        </span>
      </nav>
      <div className="w-[375px] h-[163px] p-6 bg-[#638404] flex-col justify-start items-start gap-5 inline-flex">
        <div className="self-stretch h-[52px] flex-col justify-start items-start gap-1 flex">
          <div className="self-stretch text-white text-lg font-semibold font-pretendard leading-[28.80px]">
            {list[status]?.message}
          </div>
          <div className="self-stretch text-white text-[12px] font-[400] font-pretendard leading-[19.2px]">
            {list[status]?.description}
          </div>
        </div>
        <div className="h-[43px] flex-col justify-start items-center gap-2 flex">
          <div className="self-stretch justify-start items-center gap-[88px] inline-flex">
            {[0, 1, 2].map((value, index) => (
              <div key={value} className="w-[50px] flex-col justify-start items-center inline-flex">
                <div
                  className="self-stretch px-1 py-0.5 rounded justify-center items-center gap-1 inline-flex transition-all duration-500"
                  style={{
                    background:
                      value === status || (status === 3 && value === 2) ? "white" : "#486300",
                  }}
                >
                  <div
                    className="text-[12px] font-[400] font-pretendard leading-[19.2px] transition-all duration-500"
                    style={{
                      color:
                        value === status || (status === 3 && value === 2) ? "#354800" : "#638404",
                    }}
                  >
                    {list[value]?.name}
                  </div>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="4"
                  viewBox="0 0 6 4"
                  fill="none"
                >
                  <path
                    d="M6 0H0L3 4L6 0Z"
                    fill={value === status || (status === 3 && value === 2) ? "white" : "#486300"}
                    className="transition-all duration-500"
                  />
                </svg>
              </div>
            ))}
          </div>
          <div className="w-[327px] h-2 relative">
            <div className="w-[327px] h-2 left-0 top-0 absolute bg-[#486200] rounded-[999px]" />
            <div
              className="h-2 left-0 top-0 absolute bg-[#eef3e2] rounded-[999px] transition-all duration-500"
              style={{ width: list[status]?.barWidth || 0 }}
            />
          </div>
        </div>
      </div>
      <div className="py-[40px]">
        <div className="w-[375px] h-[328px] flex-col justify-start items-center gap-3 inline-flex">
          <div className="self-stretch px-6 flex-col justify-start items-start gap-3 flex">
            <div className="self-stretch text-[#222224] text-[18px] font-semibold font-pretendard leading-[28.80px]">
              픽업 장소
            </div>
            <div className="flex-col justify-start items-start gap-1 flex">
              <div className="w-[174px] text-[#222224] text-[14px] font-[400] font-pretendard leading-[22.4px]">
                {data?.placeAddress}
              </div>
              <div className="w-[207px] text-[#707a87] text-[12px] font-[400] font-pretendard leading-[19.2px]">
                {data?.storePhone}
              </div>
            </div>
          </div>
          <div className="self-stretch h-[178px] px-6 flex-col justify-start items-start gap-1 flex">
            <Map width={326} height={178} />
          </div>
          <div className="bg-white flex-col justify-start items-start flex">
            <div className="w-[321px] h-10 bg-white rounded border border-[#d1d6db] flex-col justify-center items-start flex">
              <div className="self-stretch px-4 py-2 justify-start items-center gap-[11px] inline-flex">
                <div
                  className="w-[254px] h-[22px] text-[#222224] text-[14px] font-[400] font-pretendard leading-[22.4px] overflow-hidden text-ellipsis"
                  title={data?.requestMessage}
                >
                  {data?.requestMessage}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[185px] py-4 mb-[91px] bg-[#f0f2f5] border-dashed border-[1px] border-[#d1d6db] flex-col justify-start items-start gap-1 inline-flex">
        <div className="self-stretch h-[153px] px-6 flex-col justify-start items-start gap-3 flex">
          <div className="self-stretch text-[#222224] text-[18px] font-semibold font-pretendard leading-[28.80px]">
            주문 상품 총 {data?.orderMenus?.reduce((prev, menu) => prev + menu?.quantity, 0)}개
          </div>

          {data?.orderMenus?.map((menu, index) => (
            <div
              key={menu?.menuName}
              className="self-stretch justify-between items-start gap-[89px] inline-flex"
            >
              <div className="text-[#333e4e] text-sm font-normal font-pretendard leading-snug">
                {menu?.menuName}
              </div>
              <div className="text-right text-[#333e4e] text-sm font-semibold font-pretendard">
                {menu?.menuPrice} * {menu?.quantity}
              </div>
            </div>
          ))}

          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="327"
              height="2"
              viewBox="0 0 375 2"
              fill="none"
            >
              <path d="M-8 1H384" stroke="black" strokeOpacity="0.1" />
            </svg>
          </div>
          <div className="w-[326px] justify-between items-center inline-flex">
            <div className="text-[#333e4e] text-base font-normal font-pretendard leading-relaxed">
              총 결제금액
            </div>
            <div className="text-right text-[#638404] text-xl font-semibold font-pretendard leading-loose">
              {data?.totalPrice?.toLocaleString()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { id } = context.query;

  const response = await axios.get(`/orders/${id}`);

  return { props: { data: response.data?.result } };
}

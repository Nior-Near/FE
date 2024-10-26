import Navbar from "@/src/components/Navbar";
import Title from "@/src/components/Title";
import { axios } from "@/src/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { GetServerSidePropsContext } from "next";
import Image from "next/image";
import Link from "next/link";

interface Data {
  storeId: number;
  storeName: string;
  storeProfileImage: string;
  orderId: number;
  totalPrice: number;
  orderMenuList: { menuQuantity: number; menuName: string }[];
}

export default function Orders() {
  const { data } = useQuery<Data[]>({
    queryFn: () => axios.get("/members/payments").then((response) => response.data?.result),
    queryKey: ["orders"],
  });

  return (
    <div className="min-h-dvh">
      <Title route="주문내역" />
      <Navbar title="주문내역" destination="/my" />
      <div className="p-[26px] pt-[22px] flex flex-col items-center gap-5">
        {data &&
          (data?.length > 0 ? (
            data?.map((order, index) => (
              <div
                key={order?.storeName + order?.orderId}
                className="self-stretch h-[251.77px] flex-col justify-start items-start gap-5 flex"
              >
                <div className="self-stretch h-full rounded-[5px] shadow-[0px_0px_5px_0px_rgba(0,0,0,0.25)] flex-col justify-start items-start flex">
                  <div className="self-stretch h-[92px] py-3 bg-white rounded-tl-[5px] rounded-tr-[5px] flex-col justify-start items-center gap-1 flex">
                    <div className="self-stretch grow shrink basis-0 justify-center items-center gap-3 inline-flex">
                      <Image
                        alt=""
                        src={order?.storeProfileImage}
                        className="bg-neutral-100 rounded-full text-center"
                        width={68}
                        height={68}
                      />

                      <div className="w-24 flex-col justify-start items-start gap-1 inline-flex">
                        <div className="self-stretch text-[#486200] text-sm font-semibold font-pretendard">
                          {order?.storeName} 요리사님
                        </div>
                        <div className="justify-start items-center inline-flex">
                          <Link
                            href={`/stores/${order?.storeId}`}
                            className="text-[#707a87] text-xs font-normal font-pretendard leading-tight"
                          >
                            가게 페이지
                          </Link>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            fill="none"
                          >
                            <path
                              d="M7.49413 7.49999L4.82129 4.82715L5.63476 4.01367L9.12108 7.49999L5.63476 10.9863L4.82129 10.1728L7.49413 7.49999Z"
                              fill="#707A87"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="h-[33px] bg-[#638404] rounded-[100px] flex-col justify-center items-center inline-flex">
                        <div className="self-stretch h-[33px] px-3 py-2 justify-center items-center gap-2 inline-flex">
                          <Link
                            href={`/order/history/${order?.orderId}`}
                            className="text-center text-white text-xs font-semibold font-pretendard leading-tight"
                          >
                            주문내역 보러가기
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-[159.77px] py-[13.75px] bg-[#f0f2f5] rounded-bl-[5px] rounded-br-[5px] border-[0.86px] border-dashed border-[#d1d6db] flex-col justify-start items-start gap-[3.44px] flex">
                    <div className="self-stretch h-[132.26px] px-[20.63px] flex-col justify-start items-start gap-[10.32px] flex">
                      <div className="self-stretch text-[#222224] text-base font-semibold font-pretendard leading-normal">
                        주문 상품 총 {order?.orderMenuList?.length}개
                      </div>

                      {order?.orderMenuList?.map((menu, index) => (
                        <div
                          key={order?.storeName + order?.orderId + menu?.menuName}
                          className="self-stretch justify-between items-start gap-[76.50px] inline-flex"
                        >
                          <div className="text-[#333e4e] text-xs font-normal font-pretendard leading-tight">
                            {menu?.menuName}
                          </div>
                          <div className="text-right text-[#333e4e] text-xs font-semibold font-pretendard">
                            1,000 * {menu?.menuQuantity}
                          </div>
                        </div>
                      ))}
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="2"
                          viewBox="0 0 375 2"
                          fill="none"
                          className="w-full"
                        >
                          <path d="M-8 1H384" stroke="black" strokeOpacity="0.1" />
                        </svg>
                      </div>

                      <div className="items- w-full justify-between items-center inline-flex">
                        <div className="text-[#333e4e] text-sm font-normal font-pretendard leading-snug">
                          총 결제금액
                        </div>
                        <div className="text-right text-[#638404] text-[17.19px] font-semibold font-pretendard leading-7">
                          {order?.totalPrice?.toLocaleString()}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <span>주문 내역이 없습니다.</span>
          ))}
      </div>
    </div>
  );
}

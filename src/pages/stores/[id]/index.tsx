import Image from "next/image";
import NavigateBefore from "@/src/assets/navigate_before.svg";
import NavigateNext from "@/src/assets/navigate_next.svg";
import Arrow from "@/src/assets/arrow.svg";
import { axios } from "@/src/lib/axios";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Title from "@/src/components/Title";
import { useQuery } from "@tanstack/react-query";

export interface Data {
  storeId: number;
  profileImage: string;
  name: string;
  storePhone: string;
  title: string;
  introduction: string;
  possibleRegion: string[];
  placeId: number;
  placeName: string;
  auths: string[];
  temperature: number;
  menus: Menu[];
}
interface Menu {
  menuId: number;
  menuName: string;
  menuImage: string;
  menuIntroduction: string;
  menuPrice: number;
  menuGram: number;
  orderable: boolean;
}

export default function Store() {
  const router = useRouter();

  const { data } = useQuery<Data>({
    queryKey: ["store"],
    queryFn: () =>
      axios.get(`/stores/${router.query?.id}`).then((response) => response.data?.result),
    enabled: !!router.query?.id,
    gcTime: 0,
    staleTime: Infinity,
  });

  const [foodBannerImage, setFoodBannerImage] = useState(data?.menus?.[0]?.menuImage);

  const [orders, setOrders] = useState<{
    [key: number]: { name: string; price: number; quantity: number };
  }>({});

  return (
    <div>
      <Title route="요리사" />
      <div className="absolute top-[59px] left-[29px] w-[32px] h-[32px] p-[4px] z-[999] rounded-full bg-white cursor-pointer">
        <Arrow
          className="[&_path]:fill-black"
          width={24}
          height={24}
          onClick={() => router.push("/home")}
        />
      </div>
      <div className="w-[375px] h-[291px] relative">
        <img
          src={foodBannerImage}
          width={375}
          height={291}
          alt=""
          className="w-full h-full object-cover"
        />
        <div
          className={`absolute w-full px-[36.5px] max-w-[${
            data ? data?.menus?.length * 90 + (data?.menus?.length + 1) * 16 : 0
          }px] overflow-x-auto bottom-[-15px] flex flex-row items-center flex-nowrap shrink-0 gap-[16px] scrollbar-hide`}
        >
          {data?.menus &&
            data?.menus?.map((menu, index) => (
              <div
                key={menu?.menuId}
                className="mx-auto shrink-0 w-[90px] h-[66px] rounded-[5px] cursor-pointer overflow-hidden"
                onClick={() => setFoodBannerImage(menu?.menuImage)}
                style={{
                  boxShadow:
                    menu?.menuImage === foodBannerImage ? "0px 0px 5px 0px #638404" : undefined,
                  border:
                    menu?.menuImage === foodBannerImage ? "2px solid #97b544" : "2px solid #ffffff",
                }}
              >
                <img
                  src={menu?.menuImage}
                  width={90}
                  height={66}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
        </div>
      </div>
      <div className="pt-[33px] pb-[24px] px-[24px]">
        <div className="flex flex-row items-center gap-[15px]">
          <div className="w-[90px] h-[90px] rounded-full border text-center overflow-hidden">
            {data ? <Image src={data?.profileImage} alt="" width={90} height={90} /> : undefined}
          </div>
          <span className="font-pretendard text-[24px] font-[600] leading-[13.268px] text-[#222224]">
            {data?.name} 요리사님
          </span>
        </div>
      </div>
      <div className="px-[24px] flex flex-col gap-[10px]">
        <span className="font-pretendard text-[16px] font-[600] leading-[13.268px] text-[#222224]">
          {data?.title}
        </span>
        <span className="font-pretendard text-[14px] font-[400] leading-none text-[#333e4e]">
          {data?.introduction}
        </span>
      </div>
      <div className="px-[24px] py-[40px] flex flex-col items-start gap-[20px]">
        <div className="flex flex-row items-center gap-[18px]">
          <span className="font-pretendard text-[14px] font-[700] leading-none text-[#222224]">
            주문 가능 지역
          </span>
          <span className="font-pretendard text-[14px] font-[400] leading-none text-[#1e2530]">
            {typeof data?.possibleRegion === "object"
              ? data?.possibleRegion?.map((region) => `${region}, `)
              : data?.possibleRegion}
          </span>
        </div>
        <div className="flex flex-row items-center gap-[18px]">
          <span className="font-pretendard text-[14px] font-[700] leading-none text-[#222224]">
            위치
          </span>
          <span className="font-pretendard text-[14px] font-[400] leading-none text-[#1e2530]">
            {data?.placeName}
          </span>
        </div>
        <div className="flex flex-row flex-wrap gap-[4px] items-center">
          {data?.auths?.map((auth) => (
            <div
              key={auth}
              className="px-[4px] flex items-center justify-center rounded-[2px] bg-[#eef3e2]"
            >
              <span className="font-pretendard text-[12px] font-[400] leading-[19.2px] text-[#638404]">
                {auth}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="py-[16px] px-[24px] bg-[#eef3e2]">
        <div className="w-[327px] flex flex-col gap-[10px]">
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-col items-start gap-[5px]">
              <span className="font-pretendard text-[14px] font-[700] leading-none text-[#1e2530]">
                요리사의 온기
              </span>
              <span className="font-pretendard text-[12px] font-[400] leading-[19.2px] text-[#1e2530]">
                요리사님의 요리를 구매한 사람들의 평가
              </span>
            </div>
            <span className="font-pretendard text-[24px] font-[600] leading-[38.4px] text-[#638404]">
              {data?.temperature}℃
            </span>
          </div>
          <div className="w-full h-[18px] rounded-full bg-[#d1d6db]">
            <div
              className="h-[18px] rounded-full transition-all duration-500"
              style={{
                width: `${327 * ((data?.temperature ?? 0) / 100)}px`,
                background: "linear-gradient(90deg, #97B544 0%, #486300 100%)",
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className="py-[40px] flex flex-col">
        <span className="px-[24px] font-pretendard text-[18px] font-[600] leading-[28.8px] text-[#222224]">
          주문
        </span>
        <div className="px-[24px] py-[12px] flex flex-row flex-nowrap items-center gap-[16px] overflow-x-auto">
          {data?.menus?.map((item, index) => (
            <div
              key={item?.menuId}
              className="w-[184px] h-[363px] flex flex-col p-[8px] gap-[23px] rounded-[8px] bg-white shadow-[0px_0px_5px_0px_rgba(0,0,0,0.25)]"
            >
              <div className="w-[168px] h-[143px] rounded-[4px] overflow-hidden">
                <img
                  src={item?.menuImage}
                  width={168}
                  height={143}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="px-[8px] flex flex-col gap-[12px]">
                <span className="font-pretendard text-[16px] font-[600] leading-[25.6px]">
                  {item?.menuName}
                </span>
                <span className="font-pretendard tet-[14px] font-[400] leading-none text-[#1e2530]">
                  {item?.menuIntroduction}
                </span>
                <span className="font-pretendard text-[12px] font-[400] leading-[19.2px] text-[#707a87]">
                  {item?.menuPrice}원당 약 {item?.menuGram}g
                </span>
              </div>
              <div className="flex flex-row items-center gap-[12px] self-center">
                <NavigateBefore
                  className="[&_path]:fill-[#222224] cursor-pointer"
                  onClick={() => {
                    if (
                      orders?.[item?.menuId] === undefined ||
                      orders?.[item?.menuId]?.quantity === 0
                    )
                      return;

                    if (orders?.[item?.menuId]?.quantity === 1) {
                      delete orders[item?.menuId];
                    } else {
                      orders[item?.menuId].quantity--;
                    }

                    setOrders({ ...orders });
                  }}
                />
                <div className="px-[16px] py-[8px] rounded-[4px] border border-[#e4e8eb] bg-white">
                  <span className="font-pretendard text-[14px] font-[400] leading-[22.4px] text-[#707a87] text-center">
                    {orders?.[item?.menuId]?.quantity === undefined
                      ? 0
                      : orders?.[item?.menuId]?.quantity}
                  </span>
                </div>
                <NavigateNext
                  className="[&_path]:fill-[#222224] cursor-pointer"
                  onClick={() => {
                    orders?.[item?.menuId]?.quantity === undefined
                      ? (orders[item?.menuId] = {
                          name: item?.menuName,
                          price: item?.menuPrice,
                          quantity: 1,
                        })
                      : orders[item?.menuId].quantity++;
                    setOrders({ ...orders });
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="pb-[40px]">
        <Link
          href={{
            pathname: "/order",
            query: {
              store: Buffer.from(
                JSON.stringify({
                  storeId: data?.storeId,
                  storePhone: data?.storePhone,
                  placeName: data?.placeName,
                })
              ).toString("base64"),
              orders: Buffer.from(JSON.stringify(orders)).toString("base64"),
            },
          }}
          style={{
            pointerEvents: Object.keys(orders).length === 0 ? "none" : undefined,
            background: Object.keys(orders).length === 0 ? "#ddd" : undefined,
          }}
          className="mx-auto px-[24px] py-[4px] w-[329px] h-[51px] flex items-center justify-center font-pretendard text-[18px] font-[600] leading-[28.8px] text-center rounded-full bg-[#638404] text-white"
        >
          총 {Object.values(orders).reduce((sum, obj) => sum + obj?.quantity, 0)}개{" "}
          {Object.keys(orders)
            .reduce((sum, key, index) => {
              return sum + orders?.[parseInt(key)].price * orders[parseInt(key)]?.quantity;
            }, 0)
            .toLocaleString()}
          원 주문하기
        </Link>
      </div>
    </div>
  );
}

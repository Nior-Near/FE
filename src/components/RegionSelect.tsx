import React, { useEffect, useState } from "react";
import { axios } from "../lib/axios";

interface RegionSelectProps {
  setSelectedRegion: (regionId: number | null, regionName: string | null) => void;
  onClose: () => void;
}

interface Region {
  id: number;
  name: string;
}

export default function RegionSelect({ setSelectedRegion, onClose }: RegionSelectProps) {
  const [upperRegions, setUpperRegions] = useState<Region[]>([]);
  const [detailRegions, setDetailRegions] = useState<Region[]>([]);
  const [selectedUpperRegion, setSelectedUpperRegion] = useState<Region | null>(null);
  const [selectedArea, setSelectedArea] = useState<string | null>(null);

  useEffect(() => {
    const fetchRegions = async () => {
      try {
        const response = await axios.get("/regions");
        const { upperRegions, detailRegions } = response.data.result;

        if (Array.isArray(upperRegions) && upperRegions.length > 0) {
          setUpperRegions(upperRegions);
          setSelectedUpperRegion(upperRegions[0]);
        } else {
          setUpperRegions([]);
          setSelectedUpperRegion(null);
        }

        setDetailRegions(detailRegions || []);
      } catch (error) {
        console.error("Error fetching regions:", error);
      }
    };

    fetchRegions();
  }, []);

  const handleUpperRegionClick = async (region: Region) => {
    try {
      setSelectedUpperRegion(region);
      const response = await axios.get("/regions", {
        params: { upperId: region.id },
      });
      setDetailRegions(response.data.result.detailRegions);
      setSelectedArea(null);
    } catch (error) {
      console.error("Error fetching detail regions:", error);
    }
  };

  const handleAreaClick = (area: Region) => {
    setSelectedArea(area.name);
    setSelectedRegion(area.id, area.name);
    onClose();
  };

  return (
    <div className="mx-auto w-[375px] fixed inset-0 bg-white flex flex-col">
      <header className="bg-[#638404] h-[56px] pl-[28px] flex flex-row items-center text-white flex-shrink-0">
        <button onClick={onClose} className="mr-[30px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
          >
            <path
              d="M4 12.5L3.29289 13.2071L2.58579 12.5L3.29289 11.7929L4 12.5ZM19 11.5C19.5523 11.5 20 11.9477 20 12.5C20 13.0523 19.5523 13.5 19 13.5V11.5ZM9.29289 19.2071L3.29289 13.2071L4.70711 11.7929L10.7071 17.7929L9.29289 19.2071ZM3.29289 11.7929L9.29289 5.79289L10.7071 7.20711L4.70711 13.2071L3.29289 11.7929ZM4 11.5H19V13.5H4V11.5Z"
              fill="white"
            />
          </svg>
        </button>
        <h1 className="text-[18px] font-medium font-pretendard leading-[28px]">
          어느 지역에서 음식을 받을건가요?
        </h1>
      </header>
      <div className="flex flex-1 overflow-y-auto">
        <div className="bg-[#F0F2F5] w-[124px] flex justify-center pt-[31px] overflow-y-auto">
          <ul className="space-y-[21px]">
            {upperRegions.map((region) => (
              <li
                key={region.id}
                className={`cursor-pointer ${
                  selectedUpperRegion?.id === region.id
                    ? "text-[#638404] text-[18px] font-pretendard font-medium leading-[29px]"
                    : "text-[#333E4E] text-[18px] font-pretendard leading-[29px]"
                }`}
                onClick={() => handleUpperRegionClick(region)}
              >
                {region.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-[#E4E8EB] flex-1 pt-[31px] pl-[29px] overflow-y-auto">
          <ul className="space-y-[21px]">
            {detailRegions.map((area) => (
              <li
                key={area.id}
                className={`cursor-pointer ${
                  selectedArea === area.name
                    ? "text-[#638404] text-[16px] font-pretendard font-medium leading-[29px]"
                    : "text-[#333E4E] text-[16px] font-pretendard leading-[29px]"
                }`}
                onClick={() => handleAreaClick(area)}
              >
                {area.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

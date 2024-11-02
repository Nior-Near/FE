import { useEffect } from "react";

export default function NaverMapCard({
  width,
  height,
  lat,
  lng,
  center,
  zoom,
}: {
  width: any;
  height: any;
  lat: number;
  lng: number;
  center: [number, number];
  zoom?: number;
}) {
  useEffect(() => {
    if (!(window as any)?.navermap) {
      (window as any).navermap = new window.naver.maps.Map("map", {
        center: new window.naver.maps.LatLng(center[0], center[1]),
        zoom: zoom ?? 15,
        minZoom: 15,
      });
    }

    // marker
    new window.naver.maps.Marker({
      position: new naver.maps.LatLng(lat, lng),
      map: (window as any).navermap,
    });
  }, []);

  return (
    <div className="overflow-hidden rounded-[9px] shadow" style={{ width, height }}>
      <div id="map" style={{ width, height }}></div>
    </div>
  );
}

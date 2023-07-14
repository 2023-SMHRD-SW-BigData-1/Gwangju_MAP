import React, { useEffect } from "react";
const { kakao } = window;

export default function Kakaomap() {
  useEffect(() => {
    let mapContainer = document.getElementById('map');   // 지도 표시할 div

    // 지도의 옵션 설정
    let mapOption = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),  // 지도의 중심좌표
      level: 3  // 지도의 확대 레벨
    };

    // 지도를 표시할 div와 지도 옵션으로 지도를 생성
    var map = new kakao.maps.Map(mapContainer, mapOption);
  }, []);

  return (
    <div id="map" style={{ width: '100%', height: 500 }}></div>
  );
}
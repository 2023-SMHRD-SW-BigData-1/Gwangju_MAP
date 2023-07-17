import React, { useEffect } from "react";
const { kakao } = window;

export default function Kakaomap() {
  useEffect(() => {
    var mapContainer = document.getElementById('map'); // 지도를 표시할 div 
    var mapOption = { 
      center: new kakao.maps.LatLng(35.149893, 126.919810), // 지도의 중심좌표
      level: 3 // 지도의 확대 레벨
    };

    // 지도를 생성합니다
    var map = new kakao.maps.Map(mapContainer, mapOption);

    // 마커들의 위치와 내용을 가지고 있는 객체 배열입니다
    var markers = [
      {
        position: new kakao.maps.LatLng(35.149893, 126.919810),
        content: '마커 1'
      },
      {
        position: new kakao.maps.LatLng(35.145745, 126.921223),
        content: '마커 2'
      },
      // 추가적인 마커들...
    ];

    // 마커들을 담을 배열입니다
    var markerList = [];

    // 마커들을 생성하고 지도에 추가합니다
    for (var i = 0; i < markers.length; i++) {
      var marker = new kakao.maps.Marker({
        position: markers[i].position
      });

      marker.setMap(map);

      // 마커에 인포윈도우를 생성하여 내용을 표시합니다
      var infowindow = new kakao.maps.InfoWindow({
        content: markers[i].content
      });
      kakao.maps.event.addListener(marker, 'click', makeClickListener(map, marker, infowindow));

      markerList.push(marker);
    }

    // 마커 클릭 시 인포윈도우를 열기 위한 클로저를 생성하는 함수입니다
    function makeClickListener(map, marker, infowindow) {
      return function() {
        infowindow.open(map, marker);
      };
    }
  }, []);

  return (
    <div id="map" style={{ width: '100%', height: 600 }}></div>
  );
}
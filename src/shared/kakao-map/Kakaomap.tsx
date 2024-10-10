import { useEffect } from 'react';

interface KakaomapPropsType {
  width: string;
  height: string;
}
export default function Kakaomap({ width, height }: KakaomapPropsType) {
  useEffect(() => {
    const mapScript = document.createElement('script');
    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${import.meta.env.VITE_KAKAO_MAP_APP_KEY}&autoload=false`; // autoload를 false로 하고 완전히 api script가 로드 된 후 kakao.maps에 접근하도록 하기
    document.head.appendChild(mapScript);

    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        const mapContainer = document.querySelector('#map'); //지도를 담을 영역의 DOM 레퍼런스
        const mapOption = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
          level: 3, // 지도의 확대 레벨
        };
        const map = new window.kakao.maps.Map(mapContainer, mapOption);

        //마커가 표시 될 위치
        const markerPosition = new window.kakao.maps.LatLng(33.450701, 126.570667);
        // 마커 이미지 : 이미지 위치, 마커 사이즈, 마커 오프셋
        const markerImage = new window.kakao.maps.MarkerImage(
          '/png/marker.png',
          new window.kakao.maps.Size(34, 39),
          { offset: new window.kakao.maps.Point(0, 0) },
        );
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
          image: markerImage,
        });
        // 마커를 지도 위에 표시
        marker.setMap(map);
      });
    };
    mapScript.addEventListener('load', onLoadKakaoMap); // mapScript가 완전히 로드 된 이후 onLoadKakaoMap event가 발생함
  }, []);

  return (
    <div
      id="map"
      style={{
        width: width,
        height: height,
        flexShrink: 0,
      }}
    ></div>
  );
}

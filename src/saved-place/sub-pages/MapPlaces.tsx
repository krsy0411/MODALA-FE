// import { SharedPropsType } from '../types';

import GoBackButton from '../../shared/goback-button/GoBackButton';
import Kakaomap from '../../shared/kakao-map/Kakaomap';
import Marker from '../../shared/svg/Marker';
import * as Styled from '../style/map-places.styled';
import { MapPlacesType } from '../types';

export default function MapPlaces({ pagehandler, data }: MapPlacesType) {
  function navToText() {
    pagehandler('text'); // <저장한 장소 - 카카오맵 버전>으로 이동
  }

  return (
    <Styled.Container className="places-in-map__container">
      <Styled.TopWrapper className="top-wrapper">
        <GoBackButton extraHandler={navToText} navigateNumber={0} />
        <Styled.TopTitle>저장한 장소 - 지도</Styled.TopTitle>
      </Styled.TopWrapper>
      <Kakaomap width="100%" height="350px" location={{ latitude: Number(data.latitude), longitude: Number(data.longitude) }} />
      <div
        className="line"
        style={{
          display: 'block',
          height: '1px',
          background: '#000',
          margin: '35px 24px 18px',
        }}
      ></div>
      <Styled.BottomWrapper className="bottom-wrapper">
        <Styled.BottomTitle>저장한 장소</Styled.BottomTitle>
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            marginBottom: '30px',
          }}
        >
          <Styled.LocationBox>경주</Styled.LocationBox>
        </div>
        <Styled.DescriptionBox>
          <Marker
            style={{
              position: 'absolute',
              transform: 'translate(-41px, -42px)',
            }}
          />
          <Styled.DescriptionBoxTitle>{data.title}</Styled.DescriptionBoxTitle>
          <Styled.DescriptionBoxAddress>
            {data.address}
          </Styled.DescriptionBoxAddress>
        </Styled.DescriptionBox>
      </Styled.BottomWrapper>
    </Styled.Container>
  );
}

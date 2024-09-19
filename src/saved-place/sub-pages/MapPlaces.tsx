// import { SharedPropsType } from '../types';

import GoBackButton from '../../shared/goback-button/GoBackButton';
import Kakaomap from '../../shared/kakao-map/Kakaomap';
import Marker from '../../shared/svg/Marker';
import * as Styled from '../style/map-places.styled';
import { SharedPropsType } from '../types';

export default function MapPlaces({ handler }: SharedPropsType) {
  function navToText() {
    handler('text'); // <저장한 장소 - 카카오맵 버전>으로 이동
  }

  return (
    <Styled.Container className="places-in-map__container">
      <Styled.TopWrapper className="top-wrapper">
        <GoBackButton extraHandler={navToText} navigateNumber={0} />
        <Styled.TopTitle>저장한 장소 - 지도</Styled.TopTitle>
      </Styled.TopWrapper>
      <Kakaomap width="100%" height="350px" />
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
            marginBottom: '15px',
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
          <Styled.DescriptionBoxTitle>국립경주박물관</Styled.DescriptionBoxTitle>
          <Styled.DescriptionBoxAddress>
            경북 경주시 일정로 186 국립경주박물관
          </Styled.DescriptionBoxAddress>
          <Styled.DescriptionBoxTexts>
            경상북도 경주시에 있는 국립박물관으로 성덕대왕신종(국보)를 비롯한 신라시대의 유물을
            전시하고 있다.
          </Styled.DescriptionBoxTexts>
        </Styled.DescriptionBox>
      </Styled.BottomWrapper>
    </Styled.Container>
  );
}

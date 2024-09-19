import Kakaomap from '../../../shared/kakao-map/Kakaomap';
import Carousel from './components/Carousel';
import * as Styled from './style/attractions.styled';

export default function Attractions() {
  return (
    <div
      className="main-attractions-container"
      style={{
        bottom: '0',
        left: '0',
        width: '100%',
        height: 'auto',
        background: '#F6F6F6',
        filter: 'drop-shadow(0px 8px 35px rgba(0, 0, 0, 0.25))',
        borderRadius: '55px 55px 0 0',
      }}
    >
      <p
        className="main-attractions__title"
        style={{
          paddingTop: '27px',
          margin: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'var(--kakao-logo, #000)',
          fontFamily: 'Gmarket Sans TTF',
          fontSize: '18px',
          fontWeight: 700,
        }}
      >
        대표 명소
      </p>
      <p
        className="main-attractions__description"
        style={{
          color: 'var(--kakao-logo, #000)',
          fontFamily: 'Gmarket Sans TTF',
          fontSize: '12px',
          fontWeight: 300,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: 0,
          paddingTop: '11px',
        }}
      >
        대표 명소에서만 스탬프를 받을 수 있어요!
      </p>
      <Carousel />
      <Styled.Container className="kakao-map container">
        <div
          className="texts-wrapper"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingBottom: '5px',
          }}
        >
          <Styled.Title>석굴암</Styled.Title>
          <Styled.LocationDescription>내 위치에서 5.2km</Styled.LocationDescription>
        </div>
        <Kakaomap width="100%" height="200px" />
      </Styled.Container>
    </div>
  );
}

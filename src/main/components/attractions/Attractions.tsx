import { useContext, useEffect, useState } from 'react';
import Kakaomap from '../../../shared/kakao-map/Kakaomap';
import Carousel from './components/Carousel';
import * as Styled from './style/attractions.styled';
import { TourContext, TourDataType } from '../../../context/Tour';

type Status = 'initial' | 'pending' | 'fulfilled' | 'rejected';
interface StateType {
  status: Status;
  data: TourDataType[];
  error: Error | null;
}
export type SelectedLocationType = Pick<TourDataType, 'title' | 'latitude' | 'longitude'>;

export default function Attractions() {
  const { cachedData, isDataValid } = useContext(TourContext);
  const [state, setState] = useState<StateType>({
    status: 'initial',
    data: [],
    error: null,
  });
  const [currentKakaoMapLocation, setCurrentKakaoMapLocation] = useState<SelectedLocationType>({
    latitude: '33.450701',
    longitude: '126.570667',
    title: '카카오 본사',
  });

  useEffect(() => {
    let ignore = false;
    const cacheKey = 'representedTour';

    async function fetchData() {
      if (ignore) return;
      setState(state => ({ ...state, status: 'pending' }));

      try {
        const response = await fetch(`${import.meta.env.VITE_BE_URL}/tour?is_represent=1&page=1`);
        const data = await response.json();
        cachedData(cacheKey, data);
        setState(state => ({
          ...state,
          status: 'fulfilled',
          data: data
        }));
      } catch (error) {
        setState(state => ({
          ...state,
          status: 'rejected',
          error: error instanceof Error ? error : new Error(String(error))
        }))
      }
    }
    // 만약 상태가 초기인 경우, tour데이터가 있는지 체크해보고, 상태를 갱신
    if (state.status === 'initial') {
      if (isDataValid(cacheKey)) {
        setState(state => ({
          ...state,
          status: 'fulfilled',
          data: cachedData(cacheKey),
        }));
      } else {
        fetchData();
      }
    }

    return () => {
      ignore = true;
    }
  }, [cachedData, isDataValid, state.status]);

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
      <Carousel data={state.data} currentLocationHandler={setCurrentKakaoMapLocation} />
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
          <Styled.Title>{currentKakaoMapLocation.title}</Styled.Title>
          <Styled.LocationDescription>위치를 못 찾았어요 🥲</Styled.LocationDescription>
        </div>
        <Kakaomap width="100%" height="200px" location={{
          latitude: Number(currentKakaoMapLocation.latitude),
          longitude: Number(currentKakaoMapLocation.longitude)
        }} />
      </Styled.Container>
    </div>
  );
}

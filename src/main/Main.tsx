import { useContext, useEffect, useState } from 'react';
import TopAppBar from './components/TopAppBar';
import StateBox from './components/state-container/StateContainer';
import DateandAreaInfo from './components/DateAreaInfo';
import Map from './components/map/Map';
import * as Styled from './css/main.styled';
import MainCloudBackground from './components/MainCloudBackground';
import Attractions from './components/attractions/Attractions';
import BookmarkButton from './components/bookmark-button/BookmarkButton';
import { TourContext } from '../context/Tour';

type Status = 'initial' | 'pending' | 'fulfilled' | 'rejected';
interface StateType {
  status: Status;
  data: unknown;
  error: Error | null;
}
export default function Main() {
  const [state, setState] = useState<StateType>({
    status: 'initial',
    data: {},
    error: null,
  });
  const { cachedData, isDataValid } = useContext(TourContext);

  useEffect(() => {
    let ignore = false;

    async function fetchData() {
      if (ignore) return;
      setState(state => ({ ...state, status: 'pending' }));

      try {
        const response = await fetch(`${import.meta.env.VITE_BE_URL}/tour?is_represent=1&page=1`);
        const data = await response.json();
        cachedData('tour', data);
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
      if (isDataValid('tour')) {
        setState(state => ({
          ...state,
          status: 'fulfilled',
          data: cachedData('tour'),
        }));
      } else {
        fetchData();
      }
    }

    return () => {
      ignore = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    document.body.style.backgroundColor = '#D6EFAE';
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  console.log('Main');
  return (
    <Styled.MainContainer>
      <TopAppBar />
      <DateandAreaInfo />
      <StateBox />
      <Map />
      <BookmarkButton />
      <Attractions />
      <MainCloudBackground />
    </Styled.MainContainer>
  );
}

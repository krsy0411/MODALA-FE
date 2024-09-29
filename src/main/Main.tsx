import { useEffect } from 'react';
import TopAppBar from './components/TopAppBar';
import StateBox from './components/state-container/StateContainer';
import DateandAreaInfo from './components/DateAreaInfo';
import Map from './components/map/Map';
import * as Styled from './css/main.styled';
import MainCloudBackground from './components/MainCloudBackground';
import Attractions from './components/attractions/Attractions';
import BookmarkButton from './components/bookmark-button/BookmarkButton';

export default function Main() {
  useEffect(() => {
    document.body.style.backgroundColor = '#D6EFAE';
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);
  
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

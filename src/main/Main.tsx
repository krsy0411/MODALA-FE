import { useEffect } from 'react';
import TopAppBar from './components/TopAppBar';
import StateBox from './components/state-container/StateContainer';
import DateandAreaInfo from './components/DateAreaInfo';
import Map from './components/map/Map';
import * as Styled from './css/main.styled';
import MainCloudBackground from './components/MainCloudBackground';
import Attractions from './components/attractions/Attractions';
import BookmarkButton from './components/bookmark-button/BookmarkButton';
// import RegionBubble from './components/RegionBubble';

// interface Region {
//     region: string;
//     top: string;
//     left: string;
// }

export default function Main() {
  useEffect(() => {
    document.body.style.backgroundColor = '#D6EFAE';
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  // const regions: Region[] = [
  //     { region: '경주시내권', top: "335", left: "116" },
  //     { region: '불국사권', top: "389", left: "190" },
  //     { region: '북부권', top: "249", left: "126" },
  //     { region: '서부권', top: "376", left: "44" },
  //     { region: '동해권', top: "402", left: "273" },
  //     { region: '보문권', top: "335", left: "216" },
  //     { region: '남산권', top: "416", left: "133" },
  // ];

  return (
    <Styled.MainContainer>
      <TopAppBar />
      <DateandAreaInfo />
      <StateBox />
      {/* {regions.map((region) => (
                <RegionBubble 
                    key={region.region} 
                    region={region.region} 
                    style={{position:'absolute', top: `${region.top}px`, left: `${region.left}px`}}
                    isSvg={true}
                />
            ))} */}
      <Map />
      <BookmarkButton />
      <Attractions />
      <MainCloudBackground />
    </Styled.MainContainer>
  );
}

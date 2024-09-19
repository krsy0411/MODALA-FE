// import { useEffect } from 'react';
// import TopAppBar from './TopAppBar';
// import StateBox from './StateContainer/StateContainer';
// import DateandAreaInfo from './DateAreaInfo';
// import * as Styled from "../css/main.styled";
// import Downtown from './Map/Downtown';
// import Bulguksa from './Map/Bulguksa';

// interface RegionMainProps {
//     region: 'bulguksa' | 'downtown'; // props 타입 정의
// }

// export default function RegionMain({ region }: RegionMainProps) {
//     let MapComponent;

//     // props에 따라 로드할 컴포넌트 결정
//     if (region === 'bulguksa') {
//         MapComponent = Bulguksa;
//     } else if (region === 'downtown') {
//         MapComponent = Downtown;
//     } else {
//         MapComponent = null; // 기본값
//     }

//     return (
//         <Styled.MainContainer>
//             <TopAppBar />
//             <DateandAreaInfo />
//             <StateBox />
//             {MapComponent && <MapComponent />} {/* 조건부 렌더링 */}
//         </Styled.MainContainer>
//     );
// }

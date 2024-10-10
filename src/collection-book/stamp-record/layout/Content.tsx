import SiteBox from '../components/SiteBox';
import DateBox from '../components/DateBox';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../context/User';
import Line from './Line';

// TODO 1 : 용원이가 주는 데이터 형태 기반으로 좀 더 디자인에 알맞은 포맷으로 변경해야함 : time 포맷 맞추기, 데이터 구조 설정 같은거
// TODO 2 : 윤정님이 변경하는 Box component 디자인 형태로 Box 컴포넌트 레이아웃 변경해야함
type SpotType = {
  id: string;
  area: string;
  is_represent: string;
  title: string;
  image: string;
  address: string;
  latitude: string;
  longitude: string;
  created_at: string;
}
interface StampDataType {
  id: string;
  created_at: string;
  tourism_spot: SpotType;
}
export default function Content() {
  const userContext = useContext(UserContext);
  const [stamps, setStamps] = useState<StampDataType[]>([]);

  useEffect(() => {
    async function fetchStamps() {
      const response = await fetch(`${import.meta.env.VITE_BE_URL}/stamp`, {
        headers: {
          Authorization: `${userContext?.state.accessToken}`,
        },
      });
      const data = await response.json();
      if (data.length === 0) {
        return;
      }

      setStamps([...data]);
    }

    fetchStamps();
  }, [userContext?.state.accessToken]);



  return (
    <>
      {
        stamps.length > 0 ? (
          <div className="content-container">
            <Line />
            {stamps.map((stamp, index) => (
              <>
                <DateBox time={stamp.created_at} />
                <SiteBox name={stamp.tourism_spot.title} time={stamp.tourism_spot.created_at} successed={stamp.created_at ? true : false} key={index} />
              </>
            )
            )}
          </div>
        ) : (
          <h1 style={{
            color: 'white',
            fontSize: '2.5rem'
          }}>도장이 없습니다 🥲</h1>
        )
      }
    </>
  );
}

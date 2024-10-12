import { UserContext } from '../context/User';
import BottomSheet from '../shared/bottom-sheet/BottomSheet';
import Carousel from './components/Carousel';
import * as Styled from './css/collection.styled';
import Nothing from './Nothing';
import StampRecord from './stamp-record/StampRecord';
import { useContext, useEffect, useState } from 'react';

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
export interface StampDataType {
  id: string;
  created_at: string;
  tourism_spot: SpotType;
}
export default function CollectionBook() {
  const userContext = useContext(UserContext);
  const [stamps, setStamps] = useState<StampDataType[]>([]);

  useEffect(() => {
    async function fetchStamps() {
      try {
        const response = await fetch(`${import.meta.env.VITE_BE_URL}/stamp`, {
          headers: {
            Authorization: `Bearer ${userContext?.state.accessToken}`,
          },
        });
        const data = await response.json();

        if (data.length === 0) {
          return;
        }
        // 만약 데이터가 존재하면 상태 갱신
        setStamps(stamps => [...stamps, ...data]);
      } catch (error) {
        console.error(error);
      }
    }

    // 함수 호출
    fetchStamps();
  }, [userContext?.state.accessToken]);

  return (
    <>
      <div
        className="collection-container"
        style={{
          width: '100%',
          height: '100%',
          paddingTop: '75px',
        }}
      >
        <Styled.Title>컬렉션 북</Styled.Title>
        <Styled.Description>
          즐거운 여행을 한<br />
          당신의 기록
        </Styled.Description>
        {
          stamps.length > 0 ? (
            <>
              <Carousel stamps={stamps} />
              <Styled.StampCountText>{`현재까지 모은 스탬프 : ${stamps.length}개`}</Styled.StampCountText>
              <BottomSheet>
                <StampRecord stamps={stamps} />
              </BottomSheet>
            </>
          ) : (
            <Nothing />
          )
        }
      </div>
    </>
  );
}

import { useContext, useEffect, useState } from 'react';
import * as Styled from '../css/stamp.styled';
import { UserContext } from '../../context/User';

const IMG_SRC = '/src/my-page/svg/certificate.small-success.svg';
export default function Stamp() {
  const [stampCount, setStampCount] = useState(0);
  const userContext = useContext(UserContext);

  useEffect(() => {
    if (userContext && userContext.state) {
      fetch(`${import.meta.env.VITE_BE_URL}/stamp/count`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${userContext.state.accessToken}`,
        }
      })
        .then(response => response.json())
        .then(data => setStampCount(data.count))
        .catch(error => console.error('스탬프 개수 : ', error))
    } else {
      setStampCount(0);
    }
  }, [userContext]);

  return (
    <div
      className="mypage__stamp-container"
      style={{
        width: '100%',
      }}
    >
      <div className="stamp-currentCount--wrapper">
        <Styled.StampCurrentCountText>
          <strong>스탬프 현황</strong> {stampCount}개
        </Styled.StampCurrentCountText>
      </div>
      <div
        className="stamp-badge-wrapper"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingBottom: '25px',
        }}
      >
        {
          stampCount > 0 ? (
            <>
              {[...Array(stampCount)].map((_, idx) => (
                <object
                  key={idx}
                  type="image/svg+xml"
                  data={IMG_SRC}
                  style={{
                    width: '54px',
                    height: '54px',
                  }}
                />
              ))}
            </>
          ) : (
            <p style={{
              margin: 0
            }}>스탬프가 아직 없습니다</p>
          )
        }
      </div>
      <Styled.StampDescriptionDiv className="stamp-descriptionBox-wrapper">
        <Styled.StampDescriptionTitle>스탬프 이용 방법</Styled.StampDescriptionTitle>
        <Styled.StampDescriptionText>
          대표명소에 가서 인증샷을 찍은 후 업로드 하면 스탬프 획득!
          <br />
          5개의 스탬프를 모으시면 쇼핑하기 20% 할인 쿠폰을 드립니다.
        </Styled.StampDescriptionText>
      </Styled.StampDescriptionDiv>
    </div>
  );
}

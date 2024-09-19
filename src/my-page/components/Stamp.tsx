import * as Styled from '../css/stamp.styled';

export default function Stamp() {
  return (
    <div
      className="mypage__stamp-container"
      style={{
        width: '100%',
      }}
    >
      <div className="stamp-currentCount--wrapper">
        <Styled.StampCurrentCountText>
          <strong>스탬프 현황</strong> 5/5
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
        {[...Array(5)].map((_, idx) => (
          <object
            key={idx}
            type="image/svg+xml"
            data="/src/MyPage/svg/certificate.small-success.svg"
            style={{
              width: '54px',
              height: '54px',
            }}
          />
        ))}
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

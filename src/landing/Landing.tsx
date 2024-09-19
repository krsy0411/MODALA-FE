import CloudBackgroundImg from './components/Cloud.background-img';
import * as Styled from './css/landing.styled';

export default function Landing() {
  return (
    <>
      <Styled.Container className="landing-container">
        <Styled.ContentWrapper className="landing-content-wrapper">
          <Styled.TopSentenceWrapper className="top-sentence-wrapper">
            <Styled.TopSentence
              style={{
                paddingTop: '50px',
                paddingBottom: '15px',
              }}
            >
              <strong>홍길동</strong>님,
            </Styled.TopSentence>
            <Styled.TopSentence>여행 갈 준비 완료!</Styled.TopSentence>
          </Styled.TopSentenceWrapper>

          <Styled.MiddleSentence>함께 여행을 떠나봐요!</Styled.MiddleSentence>

          <Styled.Button>시작하기</Styled.Button>
        </Styled.ContentWrapper>
      </Styled.Container>
      <CloudBackgroundImg />
    </>
  );
}

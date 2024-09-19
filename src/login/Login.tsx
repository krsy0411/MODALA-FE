import SocialLoginButton from './components/SocialLoginButton';
import * as Styled from './css/page.styled';

export default function Login() {
  return (
    <>
      <div
        className="login-container"
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'start',
          padding: '24px',
          backgroundImage: 'url("/svg/logo/background.svg")',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '36% 80%',
        }}
      >
        <div
          className="top"
          style={{
            width: '100%',
            paddingTop: '20lvh',
          }}
        >
          <Styled.Title>
            반가워요! 지금부터
            <br />
            같이 여행을 떠나볼까요?
          </Styled.Title>
          <Styled.Description>각 지역의 스탬프들을 다 모다주세요!</Styled.Description>
        </div>

        <div
          className="middle"
          style={{
            width: '100%',
            height: '263px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div
            className="socialButtonContainer"
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <SocialLoginButton
              socialName="kakao"
              backgroundColor="#F9DF4A"
              message="카카오톡으로 3초만에 로그인"
            />
            <SocialLoginButton
              socialName="naver"
              backgroundColor="#51AF35"
              message="네이버로 로그인"
            />
            <SocialLoginButton
              socialName="google"
              backgroundColor="#FFF"
              message="Google로 로그인"
            />
          </div>

          <Styled.EmailOrIdContinueText>
            이메일 또는 아이디로 계속하기 &gt;
          </Styled.EmailOrIdContinueText>
        </div>

        <div
          className="bottom"
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Styled.MoreNeedHelpDiv>로그인에 어려움이 있나요?</Styled.MoreNeedHelpDiv>
        </div>
      </div>
    </>
  );
}

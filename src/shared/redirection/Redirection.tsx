import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/User';

// 로그인 페이지에서 토큰이 존재하지 않음을 확인하면, 이쪽 컴포넌트로 이동(= 로그인 기록이 없거나 만료되었다)
export default function Redirection() {
  const navigate = useNavigate();
  const userContext = useContext(UserContext);
  const BE_LINK = `${import.meta.env.VITE_BE_URL}/auth/kakao/login`;

  useEffect(() => {
    window.location.href = BE_LINK; // 카카오 리디렉션 페이지로 이동
    const expiration_time = Date.now() + 80000; // 1일 = 86400초 ---> 대략 4시간 이전이 만료시각
    // 토큰들을 URL에서 가져옴
    const access_token = new URL(document.location.toString()).searchParams.get('access_token');
    const refresh_token = new URL(document.location.toString()).searchParams.get('refresh_token');

    // 카카오서버로부터 받은 토큰은 있는데, 전역 상태 객체에는 토큰이 없다면
    if (access_token && !userContext?.state.accessToken) {
      userContext?.dispatch({
        type: 'SET_ACCESS_TOKEN',
        payload: {
          accessToken: access_token,
          refreshToken: refresh_token,
          expirationTime: String(expiration_time),
        },
      });
    } else if (typeof userContext?.state.expirationTime === 'string' && userContext.state.expirationTime < String(Date.now())) {
      // 전역 상태 객체에 토큰이 존재하는데, 만료시간이 다 된 경우라면 
      fetch(`${import.meta.env.VITE_BE_URL}/auth/refresh`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${userContext.state.refreshToken}`
        }
      }).then(response => response.json()).then(data => {
        userContext?.dispatch({
          type: 'SET_REFRESH_TOKEN',
          payload: {
            accessToken: data.access_token,
            refreshToken: data.refresh_token,
            expirationTime: String(expiration_time),
          }
        });
      })
    }
    // 최종적으로는 메인 페이지로 이동
    navigate('/');
  }, [BE_LINK, navigate, userContext]);

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      메인으로 이동중..
    </div>
  );
}

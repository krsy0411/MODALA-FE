import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/User';

// 로그인 페이지에서 토큰이 존재하지 않음을 확인하면, 이쪽 컴포넌트로 이동(= 로그인 기록이 없거나 만료되었다)
export default function Redirection() {
  const navigate = useNavigate();
  const userContext = useContext(UserContext);

  useEffect(() => {
    const link = `${import.meta.env.VITE_FE_URL}`;
    const expiration_time = Date.now() + 80000; // 1일 = 86400초 ---> 대략 4시간 이전이 만료시각
    const access_token = new URL(document.location.toString()).searchParams.get('access_token');
    const refresh_token = new URL(document.location.toString()).searchParams.get('refresh_token');

    if (access_token) {
      // 액세스 토큰이 존재하지 않는 경우 = 로그인 기록이 없다는 뜻
      if (!userContext?.state.accessToken) {
        // access_token, refresh_token을 쿼리파라미터로 받고, 받은 시점의 시각을 localStorage에 저장
        userContext?.dispatch({
          type: 'SET_ACCESS_TOKEN',
          payload: {
            accessToken: access_token,
            refreshToken: refresh_token,
            expirationTime: String(expiration_time),
          }
        });

        if (import.meta.env.MODE === 'development') {
          navigate('/');
        } else {
          window.location.href = link;
        }
      } else if (Number(userContext?.state.expirationTime) < expiration_time) {
        // 이때는, 로그인은 했었지만 갱신되어야하는경우
        fetch(`${import.meta.env.VITE_BE_URL}/auth/refresh`, {
          headers: {
            'Authorization': `${userContext?.state.refreshToken}`,
          },
        }).then(response => response.json()).then(data => {
          userContext?.dispatch({
            type: 'SET_ACCESS_TOKEN',
            payload: {
              accessToken: data.access_token,
              refreshToken: data.refresh_token,
              expirationTime: String(expiration_time),
            }
          });
        });

        if (import.meta.env.MODE === 'development') {
          navigate('/');
        } else {
          window.location.href = link;
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Redirection() {
  const navigate = useNavigate();

  useEffect(() => {
    const access_token = new URL(document.location.toString()).searchParams.get('access_token');
    const refresh_token = new URL(document.location.toString()).searchParams.get('refresh_token');

    if (access_token && refresh_token) {
      localStorage.setItem('access_token', access_token as string);
      localStorage.setItem('access_token', refresh_token as string);

      navigate('/');
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

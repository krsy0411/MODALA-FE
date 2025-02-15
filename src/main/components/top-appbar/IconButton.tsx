import { useNavigate } from 'react-router-dom';
import * as Styled from '../../../shared/bottom-navigationbar/css/icon.button.styled';
import { useContext } from 'react';
import { UserContext } from '../../../context/User';

export default function IconButton() {
  const navigate = useNavigate();
  const userContext = useContext(UserContext);

  function clickHandler() {
    // context 객체가 있고, state 객체가 존재하며, accessToken이 유효한 값인 경우
    if (userContext?.state?.accessToken) {
      navigate('/mypage');
    } else {
      navigate('/login');
    }
  }

  return (
    <Styled.IconButton
      onClick={clickHandler}
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 2.375C11.45 2.375 12.625 3.55 12.625 5C12.625 6.45 11.45 7.625 10 7.625C8.55 7.625 7.375 6.45 7.375 5C7.375 3.55 8.55 2.375 10 2.375ZM10 13.625C13.7125 13.625 17.625 15.45 17.625 16.25V17.625H2.375V16.25C2.375 15.45 6.2875 13.625 10 13.625ZM10 0C7.2375 0 5 2.2375 5 5C5 7.7625 7.2375 10 10 10C12.7625 10 15 7.7625 15 5C15 2.2375 12.7625 0 10 0ZM10 11.25C6.6625 11.25 0 12.925 0 16.25V20H20V16.25C20 12.925 13.3375 11.25 10 11.25Z"
        fill="#323232"
      />
    </Styled.IconButton>
  );
}

import GoBackButton from '../shared/goback-button/GoBackButton';
import Icons from './components/Icons';
import Information from './components/Information';
import Line from './components/Line';
import Profile from './components/Profile';
import Stamp from './components/Stamp';
import * as Styled from './css/mypage.styled';

export default function MyPage() {
  return (
    <div
      className="mypage-container"
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        padding: '50px 24px 30px',
      }}
    >
      <GoBackButton />
      <Styled.Title>마이 페이지</Styled.Title>
      <Profile />
      <Stamp />
      <Icons />
      <Line />
      <Information title="주문 정보" texts={['장바구니', '구매 내역']} />
      <Line />
      <Information title="결제 정보" texts={['결제 관리', '결제 정보']} />
    </div>
  );
}

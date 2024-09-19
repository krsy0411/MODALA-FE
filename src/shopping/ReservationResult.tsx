import ReservationLevel from './components/ReservationLevel';
import * as Styled from './css/page.styled';
import Back from '/svg/Shopping/Back.svg';
import BCheckCircle from '/svg/Shopping/BCheckCircle.svg';

export default function ReservationResult() {
  return (
    <>
      <div
        className="shopping-container"
        style={{
          // display: 'flex',
          // flexDirection: 'column',
          // alignItems: 'center',
          width: '100%',
          height: '100vh',
          minWidth: '390px',

          color: 'black',
          background: '#FFFFFF',
          overflow: 'auto',
        }}
      >
        <Styled.Top>
          <ul
            style={{
              listStyle: 'none',
              display: 'flex',
              margin: '0 10px',
              padding: '0',
              justifyContent: 'space-between',
              gap: '20px',
            }}
          >
            <li>
              <img src={Back} />
            </li>
          </ul>
        </Styled.Top>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            fontFamily: 'var(--Gmarket-Sans-Medium)',
          }}
        >
          <ReservationLevel />
          <p style={{ fontFamily: 'var(--Gmarket-Sans-Bold)', fontSize: '20pt' }}>
            예약이 완료되었습니다!
          </p>
          <p style={{ margin: '0', color: '#6C6D72' }}>
            세부정보는 마이페이지에서
            <br />
            확인하실 수 있습니다.
          </p>
        </div>
        <div style={{
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
        }}>
          <div
            style={{
              background: '#F5F6F8',
              borderRadius: '10pt',
              width: '90%',
              height: 'auto',
              marginTop:'20px',
            }}
          >
            <p style={{ textAlign: 'center', fontFamily:'var(--Gmarket-Sans-Bold)' }}>예약정보</p>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '70px 200px',
                justifyContent:'space-around',
                textAlign:'start',
                fontFamily:'var(--Gmarket-Sans-Medium)'
              }}
            >
              <Styled.GridText1>날짜</Styled.GridText1>
              <Styled.GridText1>9월 15일(토) - 9월 19(수)</Styled.GridText1>
              <Styled.GridText1>객실</Styled.GridText1>
              <Styled.GridText1>스파 룸 (최대 5인)</Styled.GridText1>
              <Styled.GridText1>인원수</Styled.GridText1>
              <Styled.GridText1>성인 2명 아동 2명</Styled.GridText1>
              <Styled.GridText1>입실시간</Styled.GridText1>
              <Styled.GridText1>오후 4시</Styled.GridText1>
              <Styled.GridText1>퇴실시간</Styled.GridText1>
              <Styled.GridText1>오전 10시</Styled.GridText1>
            </div>
            <p style={{
                marginLeft:'20px',
                color:'#3753F2',
                padding:'0',
                fontSize:'10pt'
            }}><img src={BCheckCircle} style={{marginRight:'5px'}}/>조식포함 금연객실</p>
          </div>
          <ul style={{
            padding:'0',
            textAlign:'center',
            fontFamily:'var(--Gmarket-Sans-Medium)',
            fontSize:'9pt',
            color:'#6C6D72',
          }}>
            <li>환불에 관련된 모든 사항은 모다라와 연관이 없습니다.</li>
          </ul>
        </div>
      </div>
    </>
  );
}

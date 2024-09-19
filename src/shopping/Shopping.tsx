import Category from './components/Category';
import ProgressState from './components/Progressbar';
import * as Styled from './css/page.styled';
import Search from '/svg/Shopping/Search.svg';
import Cart from '/svg/Shopping/Cart.svg';
import CouponGroup from '/svg/Shopping/CouponGroup.svg';

export default function Shopping() {
  return (
    <>
      <div
        className="shopping-container"
        style={{
          width: '100%',
          height: '100vh',

          color: 'black',
        }}
      >
        <Styled.Top>
          <ul
            style={{
              listStyle: 'none',
              display: 'flex',
              margin: '0 10px',
              justifyContent: 'flex-end',
              gap: '20px',
            }}
          >
            <li>
              <img src={Search} />
            </li>
            <li>
              <img src={Cart} />
            </li>
          </ul>
          <p style={{ margin: '0' }}>쇼핑하기</p>
        </Styled.Top>
        <div
          className="shopping-container-underTop"
          style={{
            width: '95%',
            marginLeft: '5%',
          }}
        >
          {/* 밑의 카테고리에 box-shadow가 안먹음 */}
          <Category kind="category" />
          <Styled.StampText>스탬프 현황</Styled.StampText>
          <ProgressState />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: '5%',
            }}
          >
            <Styled.CouponText style={{ marginTop: '20px' }}>컬렉션 북 완성 후</Styled.CouponText>
            <Styled.CouponText>20% 할인쿠폰 지급</Styled.CouponText>
            <img src={CouponGroup} />
          </div>
          {/* <Swipers type="shopping" /> */}
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Styled.ProductsText>추천 상품</Styled.ProductsText>
            <Styled.ProductsText
              style={{ marginRight: '5%', fontFamily: 'var(--Gmarket-Sans-Medium)' }}
            >
              전체보기
            </Styled.ProductsText>
          </div>
          <Category kind="recommend" />
          <Styled.ProductsText>Top 10</Styled.ProductsText>
          <Category kind="top10" />
          <div style={{ height: '100px' }}></div>
        </div>
      </div>
    </>
  );
}

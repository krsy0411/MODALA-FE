export default function Icons() {
  return (
    <div
      className="icons__container"
      style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 25px 0',
        marginBottom: '41px',
      }}
    >
      <div
        className="icon_wrapper coupon"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <object
          type="image/svg+xml"
          data="/src/MyPage/svg/coupon.svg"
          style={{
            width: '20px',
            height: '16px',
            marginBottom: '10px',
          }}
        />
        쿠폰함
      </div>
      <div
        className="icon_wrapper heart-zzim"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <object
          type="image/svg+xml"
          data="/src/MyPage/svg/heart.svg"
          style={{
            width: '20px',
            height: '16px',
            marginBottom: '10px',
          }}
        />
        찜
      </div>
      <div
        className="icon_wrapper review-pen"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <object
          type="image/svg+xml"
          data="/src/MyPage/svg/review-pen.svg"
          style={{
            width: '20px',
            height: '16px',
            marginBottom: '10px',
          }}
        />
        후기관리
      </div>
      <div
        className="icon_wrapper coupon"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <object
          type="image/svg+xml"
          data="/src/MyPage/svg/save.svg"
          style={{
            width: '20px',
            height: '16px',
            marginBottom: '10px',
          }}
        />
        저장
      </div>
    </div>
  );
}

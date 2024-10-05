import React, { useState } from "react";
import ReservationLevel from "./components/ReservationLevel";
import * as Styled from "./css/page.styled";
import Back from "/svg/Shopping/Back.svg";
import GCheckCircle from "/svg/Shopping/GCheckCircle.svg";
import BCheckCircle from "/svg/Shopping/BCheckCircle.svg";
import Content1 from "/svg/Shopping/ShoppingContent1.svg";
import Addperson from "/svg/Shopping/Addperson.svg";

export default function Reservation() {
  const [view, setView] = useState(false);
  const [isReserved, setIsReserved] = useState(false); // 예약 여부 상태

  const handleReservation = () => {
    setIsReserved(true); // 예약 상태 변경
  };

  return (
    <>
      <div
        className="shopping-container"
        style={{
          width: "100%",
          height: "100vh",
          minWidth: "390px",
          color: "black",
          background: "#F6F6F6",
          overflow: "auto",
        }}
      >
        <Styled.Top>
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              margin: "0 10px",
              padding: "0",
              justifyContent: "space-between",
              gap: "20px",
            }}
          >
            <li>
              <img src={Back} style={{ cursor: "pointer" }} />
            </li>
          </ul>
        </Styled.Top>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {isReserved ? ( // 예약 완료 UI
            <>
              <ReservationLevel end={true} />
              <div style={{ width: "90%", height: "auto" }}>
                <p style={{ textAlign: "center", fontWeight: "bold" }}>
                  예약이 완료되었습니다!
                </p>
                <p style={{ margin: "0", color: "#6C6D72" }}>
                  세부정보는 마이페이지에서 확인하실 수 있습니다.
                </p>
                <Styled.BoxDiv>
                  <div
                    style={{
                      background: "#F5F6F8",
                      borderRadius: "10pt",
                      width: "100%",
                      height: "auto",
                      marginTop: "20px",
                    }}
                  >
                    <p
                      style={{
                        textAlign: "center",
                        fontFamily: "var(--Gmarket-Sans-Bold)",
                      }}
                    >
                      예약정보
                    </p>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "70px 200px",
                        justifyContent: "space-around",
                        textAlign: "start",
                        fontFamily: "var(--Gmarket-Sans-Medium)",
                      }}
                    >
                      <Styled.GridText1>날짜</Styled.GridText1>
                      <Styled.GridText1>
                        9월 15일(토) - 9월 19일(수)
                      </Styled.GridText1>
                      <Styled.GridText1>객실</Styled.GridText1>
                      <Styled.GridText1>스파 룸 (최대 5인)</Styled.GridText1>
                      <Styled.GridText1>인원수</Styled.GridText1>
                      <Styled.GridText1>성인 2명 아동 2명</Styled.GridText1>
                      <Styled.GridText1>입실시간</Styled.GridText1>
                      <Styled.GridText1>오후 4시</Styled.GridText1>
                      <Styled.GridText1>퇴실시간</Styled.GridText1>
                      <Styled.GridText1>오전 10시</Styled.GridText1>
                    </div>
                    <p
                      style={{
                        marginLeft: "20px",
                        color: "#3753F2",
                        padding: "0",
                        fontSize: "10pt",
                      }}
                    >
                      <img src={BCheckCircle} style={{ marginRight: "5px" }} />
                      조식포함 금연객실
                    </p>
                  </div>
                  <ul
                    style={{
                      padding: "0",
                      textAlign: "center",
                      fontFamily: "var(--Gmarket-Sans-Medium)",
                      fontSize: "9pt",
                      color: "#6C6D72",
                    }}
                  >
                    <li>환불에 관련된 모든 사항은 모다라와 연관이 없습니다.</li>
                  </ul>
                </Styled.BoxDiv>
              </div>
            </>
          ) : (
            // 예약 정보 입력 UI
            <>
              <ReservationLevel end={false} />
              <div style={{ width: "90%", height: "220vh" }}>
                <p style={{ textAlign: "center", fontWeight: "bold" }}>
                  대표명소에서 스탬프를 획득한 후<br /> 20% 할인쿠폰 받아가세요!
                </p>
                <Styled.BoxDiv>
                  <img width="90%" height="200px" src={Content1}></img>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: "90%",
                      gap: "10px",
                      fontFamily: "var(--Gmarket-Sans-Medium)",
                      fontSize: "12pt",
                    }}
                  >
                    <p style={{ margin: "0", fontSize: "14pt" }}>
                      황리단길 포근한 숙소
                    </p>
                    <p
                      style={{
                        margin: "0",
                        fontFamily: "var(--Gmarket-Sans-Bold)",
                      }}
                    >
                      9월 15일(토) - 9월 19일(수) 4박
                    </p>
                    <p style={{ margin: "0", fontSize: "9pt" }}>
                      스파 룸 (최대 5인) 더블 침대 2개 조식 포함 금연객실
                    </p>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <p
                        style={{
                          display: "flex",
                          gap: "5px",
                          color: "#25B50E",
                          fontSize: "9pt",
                        }}
                      >
                        <img src={GCheckCircle} />
                        환불 언제든지 가능
                      </p>
                      <p
                        style={{
                          fontSize: "9pt",
                          fontFamily: "var(--Gmarket-Sans-Light)",
                        }}
                      >
                        객실 정보 {">"}
                      </p>
                    </div>
                  </div>
                </Styled.BoxDiv>
                <Styled.BoxDiv>
                  <div
                    style={{
                      width: "85%",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "var(--Gmarket-Sans-Bold)",
                        marginBottom: "0",
                      }}
                    >
                      투숙객 정보
                    </p>
                    <p style={{ textAlign: "end", margin: "0" }}>
                      <img src={Addperson} />
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--Gmarket-Sans-Medium)",
                        fontSize: "10pt",
                      }}
                    >
                      대표 투숙객
                    </p>
                    <div
                      style={{
                        display: "grid",
                        gap: "10px",
                      }}
                    >
                      <Styled.VisitorForm placeholder="성"></Styled.VisitorForm>
                      <Styled.VisitorForm placeholder="이름"></Styled.VisitorForm>
                      <Styled.VisitorForm placeholder="연락처"></Styled.VisitorForm>
                      <Styled.VisitorForm
                        placeholder="이메일"
                        style={{ marginBottom: "10px" }}
                      ></Styled.VisitorForm>
                    </div>
                  </div>
                </Styled.BoxDiv>
                <Styled.BoxDiv>
                  <div
                    style={{
                      width: "85%",
                      fontFamily: "var(--Gmarket-Sans-Medium)",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "var(--Gmarket-Sans-Bold)",
                        marginBottom: "0",
                      }}
                    >
                      요금 정보
                    </p>
                    <p
                      style={{
                        fontSize: "10pt",
                      }}
                    >
                      9월 15일(토) - 9월 19일(수) 4박
                    </p>
                    <p style={{ textAlign: "end" }}>
                      <p
                        style={{
                          display: "inline",
                          padding: "5px 10px",
                          fontSize: "10pt",
                          borderRadius: "20px",
                          color: "white",
                          background: "#3753F2",
                          fontFamily: "var(--Gmarket-Sans-Light)",
                        }}
                      >
                        쿠폰 적용 후
                      </p>{" "}
                      79,900/1박
                    </p>
                    <p style={{ textAlign: "end" }}>
                      <p
                        style={{
                          display: "inline",
                          fontFamily: "var(--Gmarket-Sans-Light)",
                          fontSize: "10pt",
                        }}
                      >
                        부가세 10% 포함
                      </p>{" "}
                      합계 319,600 원
                    </p>
                  </div>
                </Styled.BoxDiv>
                <Styled.BoxDiv>
                  <div
                    style={{
                      width: "85%",
                      fontFamily: "var(--Gmarket-Sans-Medium)",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "var(--Gmarket-Sans-Bold)",
                        marginBottom: "0",
                      }}
                    >
                      쿠폰
                    </p>
                    <ul
                      style={{
                        listStyle: "none",
                        width: "100%",
                        border: "1px solid #6a6a6a",
                        borderRadius: "5pt",
                        padding: "10px 20px",
                      }}
                      onClick={() => {
                        setView(!view);
                      }}
                    >
                      모다라 미션 성공 20% 할인 쿠폰 {view ? "⌃" : "⌄"}
                      {view && (
                        <>
                          <li>모다라 미션 성공 10% 할인 쿠폰</li>
                          <li>모다라 미션 성공 30% 할인 쿠폰</li>
                        </>
                      )}
                    </ul>
                  </div>
                </Styled.BoxDiv>
                <Styled.BoxDiv>
                  <div
                    style={{
                      width: "85%",
                      fontFamily: "var(--Gmarket-Sans-Medium)",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "var(--Gmarket-Sans-Bold)",
                        marginBottom: "0",
                      }}
                    >
                      결제수단
                    </p>
                    <ul
                      style={{
                        listStyle: "none",
                        color: "#3753F2",
                        padding: "0",
                        fontSize: "10pt",
                      }}
                    >
                      <li>
                        <img
                          src={BCheckCircle}
                          style={{ marginRight: "5px" }}
                        />
                        결제 후 7일내 100% 환불
                      </li>
                      <li>
                        <img
                          src={BCheckCircle}
                          style={{ marginRight: "5px" }}
                        />
                        고객님의 정보를 보호하고 있습니다.
                      </li>
                    </ul>
                    <div
                      style={{
                        display: "grid",
                        gap: "10px",
                      }}
                    >
                      <Styled.PayButton>신용카드 결제</Styled.PayButton>
                      <Styled.PayButton>간편 결제</Styled.PayButton>
                      <Styled.PayButton>휴대폰 결제</Styled.PayButton>
                      <Styled.PayButton style={{ marginBottom: "10px" }}>
                        다른 결제 수단
                      </Styled.PayButton>
                    </div>
                  </div>
                </Styled.BoxDiv>
                <Styled.BoxDiv>
                  <div
                    style={{
                      width: "85%",
                      fontFamily: "var(--Gmarket-Sans-Medium)",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "var(--Gmarket-Sans-Bold)",
                        marginBottom: "0",
                      }}
                    >
                      요약
                    </p>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "50px 100px 150px",
                        margin: "10px 0",
                      }}
                    >
                      <Styled.GridText>입실</Styled.GridText>
                      <Styled.GridText>9월 15일 (토)</Styled.GridText>
                      <Styled.GridText>오후 4시</Styled.GridText>
                      <Styled.GridText>퇴실</Styled.GridText>
                      <Styled.GridText>9월 19일 (수)</Styled.GridText>
                      <Styled.GridText>오전 10시</Styled.GridText>
                    </div>
                    <Styled.GridText
                      style={{ textAlign: "end", fontSize: "8pt" }}
                    >
                      투숙객 3명 / 4박
                    </Styled.GridText>
                  </div>
                </Styled.BoxDiv>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <button
                    style={{
                      border: "none",
                      background: "#3753F2",
                      fontFamily: "var(--Gmarket-Sans-Medium)",
                      color: "white",
                      width: "150px",
                      height: "50px",
                      borderRadius: "30px",
                      fontSize: "14pt",
                    }}
                    onClick={handleReservation} // 예약하기 버튼 클릭 시 호출
                  >
                    예약하기
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

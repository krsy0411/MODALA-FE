import { useState } from "react";
import Category from "./components/Category";
import Swipers from "./components/Swiper";
import ContentCategory from "./components/ContentCategory";
import Content1 from "/svg/Shopping/ShoppingContent1.svg";
import StarRating from "./components/Rating";
import ButtonGroup from "./components/ContentButton";
import Back from "/svg/Shopping/Back.svg";
import Cart from "/svg/Shopping/Cart.svg";
import More from "/svg/Shopping/More.svg";
import DatePicker from "./components/DatePicker";
import * as Styled from "./css/page.styled";
import Search from "/svg/Shopping/Search.svg";
import CouponGroup from "/svg/Shopping/CouponGroup.svg";
import { Link } from "react-router-dom";

export default function Shopping() {
  const [activeTab, setActiveTab] = useState("description");
  const [adultCount, setAdultCount] = useState(2);
  const [childCount, setChildCount] = useState(1);
  const [showAdultButtons, setShowAdultButtons] = useState(false);
  const [showChildButtons, setShowChildButtons] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null); // 선택된 상품 상태 추가

  const buttonStyle = {
    background: "white",
    border: "none",
    padding: "10px",
  };

  const handleAdultClick = () => {
    setShowAdultButtons(!showAdultButtons);
    setShowChildButtons(false);
  };

  const handleChildClick = () => {
    setShowChildButtons(!showChildButtons);
    setShowAdultButtons(false);
  };

  const renderButtons = (setCount) => (
    <div
      style={{
        position: "absolute",
        border: "1px solid #999",
        zIndex: 10,
        display: "flex",
        flexWrap: "wrap",
        width: "max-content",
        right: "0%",
      }}
    >
      {[...Array(10).keys()].map((num) => (
        <button key={num} onClick={() => setCount(num)} style={buttonStyle}>
          {num}
        </button>
      ))}
    </div>
  );

  const renderContent = () => {
    if (activeTab === "description") {
      return (
        <div>
          <div style={{ display: "flex", width: "100%", gap: "10px" }}>
            <div style={{ width: "50%" }}>
              <p
                style={{
                  fontFamily: "var(--Gmarket-Sans-Medium)",
                  fontSize: "12pt",
                }}
              >
                날짜
              </p>
              <DatePicker />
            </div>
            <div style={{ width: "50%" }}>
              <p
                style={{
                  fontFamily: "var(--Gmarket-Sans-Medium)",
                  fontSize: "12pt",
                }}
              >
                인원수
              </p>
              <div
                style={{
                  display: "flex",
                  border: "1px solid #999999",
                  borderRadius: "10px",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    borderRight: "1px solid #999999",
                    fontFamily: "var(--Gmarket-Sans-Medium)",
                    fontSize: "10pt",
                    textAlign: "center",
                    padding: "10px 5px",
                    cursor: "pointer",
                    width: "50%",
                  }}
                  onClick={handleAdultClick}
                >
                  성인 {adultCount}
                  {showAdultButtons && renderButtons(setAdultCount)}
                </div>
                <div
                  style={{
                    borderLeft: "1px solid #999999",
                    fontFamily: "var(--Gmarket-Sans-Medium)",
                    fontSize: "10pt",
                    textAlign: "center",
                    padding: "10px 5px",
                    cursor: "pointer",
                    width: "50%",
                  }}
                  onClick={handleChildClick}
                >
                  아동 {childCount}
                  {showChildButtons && renderButtons(setChildCount)}
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "10px",
              padding: "5px",
              boxShadow: "1px",
              border: "1px solid lightgray",
            }}
          >
            <img width="90%" height="200px" src={Content1} alt="Content" />
            <div style={{ display: "flex", width: "100%", gap: "10px" }}>
              <div
                style={{
                  width: "50%",
                  fontFamily: "var(--Gmarket-Sans-Medium)",
                  fontSize: "12pt",
                }}
              >
                <p
                  style={{
                    margin: "0",
                    fontFamily: "var(--Gmarket-Sans-Bold)",
                  }}
                >
                  스파 룸 (최대 5인)
                </p>
                <p style={{ margin: "0" }}>79,900원~/1박</p>
                <p style={{ margin: "0", fontSize: "10pt", color: "gray" }}>
                  상세보기 {">"}
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  width: "50%",
                  fontFamily: "var(--Gmarket-Sans-Medium)",
                  fontSize: "10pt",
                  textAlign: "end",
                  gap: "20px",
                  flexDirection: "column",
                  alignItems: "flex-end",
                }}
              >
                ★ 4.2(24)
                <Link to="/reservation">
                  <Styled.ReservationButton>예약하기</Styled.ReservationButton>
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (activeTab === "reviews") {
      return (
        <div style={{ height: "auto" }}>
          <div
            style={{
              display: "flex",
              fontFamily: "var(--Gmarket-Sans-Medium)",
              justifyContent: "space-between",
            }}
          >
            <p style={{ fontSize: "10pt" }}>총 n건</p>
            <ul
              style={{
                display: "flex",
                fontSize: "10pt",
                width: "150px",
                justifyContent: "space-between",
              }}
            >
              <li>최신순</li>
              <li>별점순</li>
            </ul>
          </div>
          <div
            style={{
              fontFamily: "var(--Gmarket-Sans-Medium)",
              padding: "20px 0",
              borderTop: "1px solid #d9d9d9",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ display: "flex", gap: "10px" }}>
                <img
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "100px",
                    backgroundColor: "#d9d9d9",
                  }}
                  alt="Profile"
                />
                <div style={{ fontWeight: "bold" }}>
                  <p style={{ margin: "0", fontSize: "12pt" }}>김현지</p>
                  <p
                    style={{ margin: "0", fontSize: "10pt", marginTop: "5px" }}
                  >
                    ⭐️10.0
                  </p>
                </div>
              </div>
              <div style={{ display: "flex", gap: "10px" }}>
                <p style={{ margin: "0", fontSize: "10pt", color: "gray" }}>
                  2024.08.14
                </p>
                <img src={More} style={{ height: "fit-content" }} alt="More" />
              </div>
            </div>
            <div style={{ marginTop: "10px", fontSize: "10pt" }}>
              경주 근처 최고의 숙소입니다. 주변에 유명한 맛집이나 볼거리가
              가득하며 직원들도 친절해서 행복한 시간을 보내고 왔습니다.
            </div>
          </div>
        </div>
      );
    }
  };

  const handleProductClick = (item) => {
    setSelectedItem(item); // 선택된 상품 설정
  };

  return (
    <>
      <div
        className="shopping-container"
        style={{
          width: "100%",
          height: "140vh",
          color: "black",
        }}
      >
        {!selectedItem ? ( // selectedItem이 없을 때만 기본 UI 표시
          <>
            <Styled.Top>
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  margin: "0 10px",
                  justifyContent: "flex-end",
                  gap: "20px",
                }}
              >
                <li>
                  <img src={Search} alt="Search" />
                </li>
                <li>
                  <img src={Cart} alt="Cart" />
                </li>
              </ul>
              <p style={{ margin: "0" }}>쇼핑하기</p>
            </Styled.Top>
            <div
              className="shopping-container-underTop"
              style={{
                width: "95%",
                marginLeft: "5%",
              }}
            >
              <Category kind="category" onProductClick={handleProductClick} />
              {/* <Styled.StampText>스탬프 현황</Styled.StampText>
              <ProgressState /> */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: "5%",
                }}
              >
                <Styled.CouponText style={{ marginTop: "20px" }}>
                  컬렉션 북 완성 후
                </Styled.CouponText>
                <Styled.CouponText>20% 할인쿠폰 지급</Styled.CouponText>
                <img src={CouponGroup} alt="Coupon" />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Styled.ProductsText>추천 상품</Styled.ProductsText>
                <Styled.ProductsText
                  style={{
                    marginRight: "5%",
                    fontFamily: "var(--Gmarket-Sans-Medium)",
                  }}
                >
                  전체보기
                </Styled.ProductsText>
              </div>
              <Category kind="recommend" onProductClick={handleProductClick} />
              <Styled.ProductsText>Top 10</Styled.ProductsText>
              <Category kind="top10" onProductClick={handleProductClick} />
            </div>
          </>
        ) : (
          // selectedItem이 있을 때 ShoppingContent 표시
          <div
            className="shopping-content"
            style={{
              width: "100%",
              height: "100vh",
              color: "black",
              position: "relative",
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
                  <img
                    src={Back}
                    alt="Back"
                    onClick={() => setSelectedItem(null)}
                    style={{ cursor: "pointer" }}
                  />
                </li>
                <li>
                  <img src={Cart} alt="Cart" />
                </li>
              </ul>
              <p style={{ margin: "0" }}>쇼핑하기</p>
            </Styled.Top>
            <div
              className="shopping-container-underTop"
              style={{
                width: "90%",
                margin: "0 5%",
              }}
            >
              <ContentCategory text="숙소" />
              <div
                className="place-tag"
                style={{
                  display: "flex",
                  gap: "10px",
                  fontWeight: "bolder",
                }}
              >
                <p># 경주 필수코스</p>
                <p># 경주 황리단길</p>
              </div>
              <Swipers type="shoppingContent" />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  borderBottom: "2px solid black",
                  paddingBottom: "10px",
                  fontWeight: "bolder",
                }}
              >
                경주 시내에서 nkm
                <div
                  style={{
                    display: "grid",
                    textAlign: "end",
                    fontSize: "10pt",
                    gap: "5px",
                  }}
                >
                  <p style={{ margin: "0", color: "#5653FF" }}>인기숙소</p>
                  <p
                    style={{
                      margin: "0",
                      color: "#FF4444",
                      borderRadius: "10px",
                      border: "1px solid #FF4444",
                      padding: "2px 6px",
                    }}
                  >
                    쿠폰적용가능
                  </p>
                </div>
              </div>
              <div
                className="information"
                style={{
                  fontSize: "24px",
                  fontWeight: "500",
                  marginTop: "20px",
                }}
              >
                <Styled.ProductsText
                  style={{ fontSize: "20pt", fontWeight: "100", margin: "0" }}
                >
                  {navItems.name}
                </Styled.ProductsText>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <StarRating score={4} />
                  <p
                    style={{
                      margin: "0",
                      fontFamily: "Gmarket Sans TTF",
                      fontSize: "12pt",
                    }}
                  >
                    4.7(89)
                  </p>
                </div>
                <p
                  style={{ textAlign: "right", fontSize: "16px", margin: "0" }}
                >
                  정가 {navItems.price}원
                </p>
                <p
                  style={{ textAlign: "right", fontSize: "16px", margin: "0" }}
                >
                  스탬프 사용 후{" "}
                  <span
                    style={{
                      fontSize: "26px",
                      fontWeight: "bold",
                      margin: "10px 0 0 10px",
                    }}
                  >
                    {(navItems.price * (100 - navItems.sales)) / 100}원
                  </span>
                </p>
                <div
                  className="like-reservation"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "end",
                    padding: "20px 0",
                    borderBottom: "1px solid #D9D9D9",
                  }}
                >
                  <p style={{ fontSize: "18px", margin: "0" }}>
                    ♥{navItems.like}
                  </p>
                </div>
                <div style={{ borderBottom: "2px solid rgb(217,217,217)" }}>
                  <ButtonGroup />
                </div>
                <div style={{ marginTop: "20px" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      borderBottom: "1px solid lightgray",
                    }}
                  >
                    <button
                      onClick={() => setActiveTab("description")}
                      style={{
                        flex: 1,
                        padding: "10px",
                        backgroundColor: "white",
                        borderBottom:
                          activeTab === "description"
                            ? "1px solid black"
                            : "1px solid lightgray",
                        border: "none",
                        cursor: "pointer",
                        fontFamily: "var(--Gmarket-Sans-Medium)",
                      }}
                    >
                      설명
                    </button>
                    <button
                      onClick={() => setActiveTab("reviews")}
                      style={{
                        flex: 1,
                        padding: "10px",
                        backgroundColor: "white",
                        borderBottom:
                          activeTab === "reviews"
                            ? "1px solid black"
                            : "1px solid lightgray",
                        border: "none",
                        cursor: "pointer",
                        fontFamily: "var(--Gmarket-Sans-Medium)",
                      }}
                    >
                      리뷰
                    </button>
                  </div>
                  <div>
                    {renderContent()} {/* 선택된 내용 렌더링 */}
                  </div>
                </div>
              </div>
              <div style={{ height: "100px" }}></div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

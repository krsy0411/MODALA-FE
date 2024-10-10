import styled from "styled-components";
import ImgFile from "/svg/Shopping/Img1.svg";
import ImgFile2 from "/svg/Shopping/Content1.svg";
import ImgFile3 from "/svg/Shopping/Img2.svg";
import Top1 from "/svg/Shopping/Top101.svg";
import Top2 from "/svg/Shopping/Top102.svg";
import Japan from "/png/japan.png";
import Mazatlan from "/png/mazatlan.png";
import Waterfall from "/png/waterfall.png";
import Rock from "/png/rocks.png";
import Sea from "/png/sea.png";
import Italy from "/png/italy.png";
import Brooklyn from "/png/brooklyn.png";

const navItems = {
  category: ["Top 10", "내 주변", "숙소", "교통", "기념품"],
  recommend: [
    {
      name: "황리단길 포근한 숙소",
      sales: "20%",
      price: "79,900",
      id: 1,
      img: ImgFile,
      distance: "1",
    },
    {
      name: "황리단길 포근한 숙소",
      sales: "10%",
      price: "60,900",
      id: 2,
      img: ImgFile2,
      distance: "3",
    },
    {
      name: "황리단길 포근한 숙소",
      sales: "20%",
      price: "79,900",
      id: 3,
      img: ImgFile3,
      distance: "1",
    },
    {
      name: "황리단길 포근한 숙소",
      sales: "10%",
      price: "60,900",
      id: 4,
      img: Japan,
      distance: "3",
    },
    {
      name: "황리단길 포근한 숙소",
      sales: "20%",
      price: "79,900",
      id: 5,
      img: Mazatlan,
      distance: "1",
    },
    {
      name: "황리단길 포근한 숙소",
      sales: "10%",
      price: "60,900",
      id: 6,
      img: Waterfall,
      distance: "3",
    },
  ],
  top10: [
    {
      name: "황리단길 포근한 숙소",
      sales: "20%",
      price: "79,900",
      id: 1,
      img: Top1,
      distance: "1",
    },
    {
      name: "황리단길 포근한 숙소",
      sales: "10%",
      price: "60,900",
      id: 2,
      img: Top2,
      distance: "3",
    },
    {
      name: "황리단길 포근한 숙소",
      sales: "20%",
      price: "79,900",
      id: 3,
      img: Rock,
      distance: "1",
    },
    {
      name: "황리단길 포근한 숙소",
      sales: "10%",
      price: "60,900",
      id: 4,
      img: Sea,
      distance: "3",
    },
    {
      name: "황리단길 포근한 숙소",
      sales: "20%",
      price: "79,900",
      id: 5,
      img: Italy,
      distance: "1",
    },
    {
      name: "황리단길 포근한 숙소",
      sales: "10%",
      price: "60,900",
      id: 6,
      img: Brooklyn,
      distance: "3",
    },
  ],
};

const Slider = styled.div<{ kind: CategoryKind }>`
  width: 100%;
  min-height: 30px;
  height: auto;
  border-radius: 5px;
  display: flex;
  flex-wrap: nowrap;
  box-sizing: border-box;
  overflow-x: scroll;
  gap: ${({ kind }) => (kind === "category" ? "20px" : "40px")};
  margin: 20px 0;
  user-select: none;
  outline: none;
  font-size: 14px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const SliderItem = styled.div<{ isCategory: boolean; kind: CategoryKind }>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: ${({ isCategory, kind }) =>
    isCategory ? "90px" : kind === "recommend" ? "234px" : "auto"};
  max-width: ${({ isCategory }) => (isCategory ? "90px" : "234px")};
  height: auto;
  width: auto;
  border-radius: 20px;
  background-color: white;
  box-shadow: 0px 14px 26px -16px rgba(0, 0, 0, 0.75);
  font-weight: bolder;
  cursor: pointer; // 클릭 가능하도록 커서 변경
`;

const Image = styled.img<{ kind: CategoryKind }>`
  width: ${({ kind }) => (kind === "recommend" ? "90%" : "100%")};
  height: ${({ kind }) => (kind === "recommend" ? "150px" : "100%")};
  object-fit: cover; // 비율 유지하며 채우기
  border-radius: 20px; // SliderItem과 동일한 모서리 반경 적용
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: center;
  align-items: flex-start;
  background-color: rgba(0, 0, 0, 0);
  color: white;
  text-align: center;
  font-size: 12px;
`;

type CategoryKind = "category" | "recommend" | "top10";
interface CategoryProps {
  kind: CategoryKind;
  onProductClick: (item: any) => void; // 클릭 핸들러 추가
}
export default function Category({ kind, onProductClick }: CategoryProps) {
  return (
    <Slider kind={kind}>
      {navItems[kind].map((item, index) => (
        <SliderItem
          key={index}
          isCategory={kind === "category"}
          kind={kind}
          onClick={() => onProductClick(item)} // 클릭 시 핸들러 호출
        >
          {kind === "category" ? (
            <div style={{ textAlign: "center" }}>{item}</div> // 카테고리 이름 표시
          ) : kind === "recommend" ? (
            <>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "100%",
                  height: "100%",
                  fontFamily: "var(--Gmarket-Sans-Medium)",
                }}
              >
                <Image src={item.img} alt={item.name} kind="recommend" />
              </div>
              <div
                style={{
                  fontFamily: "var(--Gmarket-Sans-Medium)",
                }}
              >
                <p
                  style={{
                    paddingLeft: "5%",
                    margin: "5px 5px 10px 5px",
                    textAlign: "start",
                  }}
                >
                  {item.name}
                </p>
                <div
                  style={{
                    display: "flex",
                    margin: "5px 20px",
                    justifyContent: "space-between",
                  }}
                >
                  <p style={{ margin: "0" }}>4.7(89)</p>
                  <p style={{ margin: "0" }}>{item.price}원~</p>
                </div>
              </div>
            </>
          ) : (
            <div
              style={{ position: "relative", width: "160px", height: "100%" }}
            >
              <Image src={item.img} alt={item.name} kind="top10" />
              <Overlay>
                <div
                  style={{
                    fontFamily: "var(--Gmarket-Sans-Bold)",
                    fontSize: "16pt",
                  }}
                >
                  액티비티
                </div>
                <p
                  style={{
                    margin: "15px 0 0",
                    fontFamily: "var(--Gmarket-Sans-Medium)",
                    fontSize: "12pt",
                  }}
                >
                  #레저
                </p>
                <p
                  style={{
                    margin: "5px 0 0",
                    fontFamily: "var(--Gmarket-Sans-Medium)",
                    fontSize: "12pt",
                  }}
                >
                  #물놀이
                </p>
                <p
                  style={{
                    margin: "5px 0 0",
                    fontFamily: "var(--Gmarket-Sans-Medium)",
                    fontSize: "12pt",
                  }}
                >
                  #데이트
                </p>
              </Overlay>
            </div>
          )}
        </SliderItem>
      ))}
    </Slider>
  );
}

import styled from 'styled-components';

export const Top = styled.div`
  width: 100%;
  height: 100px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  text-align: center;
  font-family: var(--Gmarket-Sans-Bold);
  font-size: 24px;
  font-style: normal;
  line-height: normal;

  // background-color: lightgray;

  //   min-width: 390px;
  // min-height: 120px;
`;

export const StampText = styled.p`
  padding: 0;
  margin: 0;
  font-family: 'Gmarket Sans TTF';
  font-family: var(--Gmarket-Sans-Bold);
  font-size: 16px;
  font-style: normal;
  font-weight: bolder;
  line-height: normal;
`;

export const ProductsText = styled.p`
  padding: 0;
  font-family: 'Gmarket Sans TTF';
  font-family: var(--Gmarket-Sans-Bold);
  font-size: 12pt;
  font-weight: bold;
  line-height: normal;
`;

export const CouponText = styled.p`
  margin: 0;
  font-family: 'Noto sans';
  color: black;
  font-weight: bold;
  font-size: 16pt;
`;

export const ReservationButton = styled.button`
  font-size: 12pt;
  padding: 4px;
  outline: none;
  border: none;
  width: 100px;
  border-radius: 40px;
  background-color: #3753f2;
  color: white;
`;

////////////////////////////////////////////////////// slider

export const AdSwiperItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 270px;
  border-radius: 20px;
  background-color: rgba(217, 217, 217, 1);

  font-weight: bolder;
`;

//////////////////////////////////////////////////////
export const StyledRoot = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

/////////////////////////////////
export const LevelBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 50px;
  height: 50px;
  border: 1px solid #6a6a6a;
  font-size: 18pt;

  border-radius: 100%;
`;

export const Line = styled.div`
  width: 75px;
  border: 1px solid black;
`;

export const LevelText = styled.p`
  width: max-content;
  font-weight: bolder;
  font-family: var(--Gmarket-Sans-Medium);
  font-size: 10pt;
`;

export const BoxDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0;
  padding: 5px;
  box-shadow: 1px;
  border: 1px solid lightgray;
  border-radius: 10pt;
  background-color: white;
`;

export const VisitorForm = styled.input`
  width: 100%;
  border: 1px solid #6a6a6a;
  border-radius: 5pt;
  padding: 10px 20px;
`;

export const PayButton = styled.button`
  width: 100%;
  border: 1px solid #6a6a6a;
  border-radius: 5pt;
  padding: 10px 20px;
  background: white;
  font-family: var(--Gmarket-Sans-Medium);
`;

export const GridText = styled.p`
  margin: 0;
  font-size: 10pt;
`;

export const GridText1 = styled.p`
  margin: 5px;
  font-size: 10pt;
`;
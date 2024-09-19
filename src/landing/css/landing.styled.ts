import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 60%;
  background-image: linear-gradient(180deg, #60b6e7, white);

  display: flex;
  justify-content: center;
`;

export const ContentWrapper = styled.div`
  padding-top: 260px;
  width: 200px;
  height: 580px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const TopSentenceWrapper = styled.div`
  z-index: 2;
`;

export const TopSentence = styled.p`
  color: var(--kakao-logo, #000);
  font-family: var(--Gmarket-Sans-Medium);
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  margin: 0;
`;

export const MiddleSentence = styled.p`
  color: var(--kakao-logo, #000);
  text-align: center;
  font-family: var(--Gmarket-Sans-Medium);
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;

  padding-top: 130px;
  padding: 130px 0 40px;
  margin: 0;
`;

export const Button = styled.button`
  width: 166px;
  height: 52px;
  flex-shrink: 0;

  border-radius: 999px;
  background: #d6efae;
  box-shadow: 6px 4px 12px 0px rgba(0, 0, 0, 0.25);
  border: none;
`;

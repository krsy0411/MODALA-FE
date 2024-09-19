import styled from 'styled-components';

export const Title = styled.p`
  color: var(--kakao-logo, #000);
  font-family: var(--Gmarket-Sans-Bold);
  font-size: 18px;
  font-style: normal;
  line-height: normal;
`;

export const Description = styled.p`
  color: var(--kakao-logo, #000);
  font-family: var(--Gmarket-Sans-Medium);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const EmailOrIdContinueText = styled.p`
  // 초기화
  padding: 0;
  color: var(--kakao-logo, #000);
  font-family: 'Gmarket Sans TTF';
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  text-align: center;
`;

export const MoreNeedHelpDiv = styled.div`
  width: 134px;
  height: 20px;
  flex-shrink: 0;
  border-radius: 99px;
  border: 0.5px solid #cbcbcb;

  color: #535353;
  font-family: var(--Gmarket-Sans-Light);
  font-size: 10px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  display: flex;
  justify-content: center;
  align-items: center;
`;

import styled from 'styled-components';

export const BoxContainer = styled.div`
  position: relative; // position 설정을 위한 기준점 잡기
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: end;
`;

export const UIcontainer = styled.div`
  width: 100%;
  padding: 10px 30px 10px 20px;

  position: absolute;
  transform: translate(12px, 20px);

  display: flex;
`;

export const SiteName = styled.span`
  color: var(--kakao-logo, #000);
  font-family: 'Noto Sans KR';
  font-size: 14px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
`;

export const Time = styled.p`
  color: var(--kakao-logo, #000);
  font-family: 'var(--Gmarket-Sans-Light)';
  font-size: 10px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

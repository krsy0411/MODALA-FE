import styled from 'styled-components';

export const DateBoxContainer = styled.div`
  width: 70px;
  height: 22px;
  flex-shrink: 0;
  border-radius: 19px;
  background: var(--kakao-logo, #000);
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);

  color: var(--naver-text, #fff);
  /* font-family: 'var(--Gmarket-Sans-Medium)'; */
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  // 중앙 배치
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateX(75px);

  margin-bottom: 28px;
`;

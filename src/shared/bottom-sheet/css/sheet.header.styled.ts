import styled from 'styled-components';

export const HeaderContainer = styled.div`
  height: 48px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  position: relative;
  padding-top: 16px;
  padding-bottom: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Handle = styled.div`
  width: 93px;
  height: 4px;
  flex-shrink: 0;
  border-radius: 77px;
  background: #505050;
  margin: auto;
`;

export const HeaderText = styled.p`
  color: var(--kakao-logo, #000);
  font-family: 'Gmarket Sans TTF';
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

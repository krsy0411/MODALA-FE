import styled from 'styled-components';

export const ButtonContainer = styled.button`
  width: 342px;
  height: 65px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid var(--kakao-logo, #000);
  background: #d6efae;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 23px;
`;
export const LocationName = styled.span`
  color: var(--kakao-logo, #000);
  font-family: 'Gmarket Sans TTF';
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

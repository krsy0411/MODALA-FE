import styled from 'styled-components';

interface StyledButtonProps {
  $backgroundcolor: string;
}
export const Button = styled.button<StyledButtonProps>`
  // 초기화
  padding: 16px;
  width: 100%;
  height: 50px;
  flex-shrink: 0;
  background-color: ${(props) => (props.$backgroundcolor ? props.$backgroundcolor : 'black')};
  border-radius: 10px;
  box-shadow: 0px 2px 10px 1px rgba(0, 0, 0, 0.15);
  border: none;

  display: flex;
  align-items: center;
  justify-content: start;
`;

export const LogoImg = styled.img`
  // 초기화
  padding: 0;
  width: auto;
  height: auto;
  position: relative;
`;

interface StyledLoginTextProps {
  $fontcolor: string;
}
export const LoginText = styled.span<StyledLoginTextProps>`
  color: ${(props) => (props.$fontcolor === 'naver' ? 'white' : 'black')};
  font-family: var(--Gmarket-Sans-Medium);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

import styled, { css } from 'styled-components';

interface ArrowBubbleProps {
  size: string; 
}

export const ArrowBubble = styled.div<ArrowBubbleProps>`
  ${({ size }) => {
      switch (size) {
        case '3':
          return css`width: 85px;`;
        case '4':
          return css`width: 100px;`;
        case '5':
          return css`width: 117px;`;
        default:
          return css`width: 100px;`;
      }
    }
  }

  height: 36px; /* 기본 높이 설정 */
  background: #D6EFAE; /* 기본 배경색 설정 */
  border: 1px solid #000000; /* 기본 테두리 설정 */
  border-radius: 5px; /* 기본 테두리 반경 설정 */
  box-shadow: 0px 4px 4px 0px #00000040;
  padding: 4px 0px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 18px; /* 기본 폰트 크기 설정 */
  white-space: nowrap; // 줄바꿈 방지

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 24px; /* 고정된 위치 설정 */
    right: calc(50% - 10px); /* 고정된 위치 설정 */
    width: 20px; /* 고정된 너비 설정 */
    height: 20px; /* 고정된 높이 설정 */
    background: #D6EFAE; /* 고정된 배경색 설정 */
    border-radius: 0px 0px 0px 5px; /* 고정된 테두리 반경 설정 */
    box-shadow: -4px 4px 4px 0px #00000040;
    border-left: 1px solid #000000; /* 고정된 왼쪽 테두리 설정 */
    border-bottom: 1px solid #000000; /* 고정된 아래쪽 테두리 설정 */
    transform: rotate(-45deg);
  }
`;

export const ArrowBubbleText = styled.div`
  z-index: 1;
  text-align: center;
  font-family: 'GmarketSansMedium';
  font-weight: 500;
`;
import styled, { css, keyframes } from 'styled-components';
import { CloudPropsType } from '../components/Cloud';

type CloudImgStyledPropsType = Pick<CloudPropsType, '$size' | '$posX' | '$posY'>;
type MoveXDirectionParamsType = Pick<CloudImgStyledPropsType, '$posX' | '$posY'>;

export const Img = styled.img<CloudImgStyledPropsType>`
  position: relative;
  width: ${({ $size }) => $size};
  height: ${({ $size }) => $size};
  animation: ${({ $posX, $posY }) => css`
    ${moveXDirection({ $posX, $posY })} 25s linear infinite
  `};
`;
const moveXDirection = ({ $posX, $posY }: MoveXDirectionParamsType) => keyframes`
    from {
        transform: translate(${$posX - 430}px, ${$posY}px);
    }
    to {
        transform: translate(${$posX + 420}px, ${$posY}px);
    }
`;

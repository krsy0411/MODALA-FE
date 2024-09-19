import * as Styled from '../css/cloud.styled';

export interface CloudPropsType {
  $cloudFileName: string;
  $size: string;
  $posX: number;
  $posY: number;
}

export default function Cloud({ $cloudFileName, $size, $posX, $posY }: CloudPropsType) {
  return (
    <Styled.Img
      src={`/png/cloud/${$cloudFileName}.png`}
      $size={$size}
      $posX={$posX}
      $posY={$posY}
    />
  );
}

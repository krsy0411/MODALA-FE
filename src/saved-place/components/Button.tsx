import Marker from '../../shared/svg/Marker';
import * as Styled from '../style/button.styled';
import RightDirection from '../svg/RightDirection';

interface ButtonPropsType {
  handler: () => void;
}
export default function Button({ handler }: ButtonPropsType) {
  return (
    <Styled.ButtonContainer onClick={handler}>
      <Marker />
      <Styled.LocationName>경주국립박물관</Styled.LocationName>
      <RightDirection />
    </Styled.ButtonContainer>
  );
}

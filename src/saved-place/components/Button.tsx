import Marker from '../../shared/svg/Marker';
import * as Styled from '../style/button.styled';
import RightDirection from '../svg/RightDirection';

interface ButtonPropsType {
  handler: () => void;
  name: string;
}
export default function Button({ handler, name }: ButtonPropsType) {
  return (
    <Styled.ButtonContainer onClick={handler}>
      <Marker />
      <Styled.LocationName>{name}</Styled.LocationName>
      <RightDirection />
    </Styled.ButtonContainer>
  );
}

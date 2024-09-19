import * as Styled from '../../../shared/bottom-navigationbar/css/icon.button.styled';
import sunny from '/png/sun.icon.png';
import stamp from '/png/stamp.icon.png';

// StateIconProps 타입 정의
type StateIconProps = {
  state: 'sunny' | 'stamp'; // 가능한 state 값 정의
};

const iconMap: { [key in StateIconProps['state']]: string } = {
  sunny: sunny,
  stamp: stamp,
};

export default function StateIcon({ state }: StateIconProps) {
  const iconSrc = iconMap[state] || null;

  return iconSrc ? <Styled.StateIcon src={iconSrc} /> : null;
}

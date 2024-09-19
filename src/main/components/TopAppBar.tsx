import IconButton from './top-appbar/IconButton';
import GoBackButton from '../../shared/goback-button/GoBackButton';
import * as Styled from '../css/top.app.bar.styled';

interface TopAppBarProps {
  region? : string;
}

export default function TopAppBar({ region }: TopAppBarProps) {
  return (
    <Styled.TopAppBarContainer justifyContent={region ? 'space-between' : 'flex-end'}>
      {region && <GoBackButton />}
      <IconButton /> {/* IconButton에 region props 전달 */}
    </Styled.TopAppBarContainer>
  );
}

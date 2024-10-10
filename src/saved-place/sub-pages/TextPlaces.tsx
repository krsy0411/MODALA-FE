import { TextPlacesType } from '../types';
import * as Styled from '../style/text-places.styled';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import X from '../../shared/svg/X';

export default function TextPlaces({ pagehandler, datahandler, data }: TextPlacesType) {
  const navigate = useNavigate();

  function navToMap(index: number) {
    pagehandler('map'); // <저장한 장소 - 카카오맵 버전>으로 이동
    datahandler(index)
  }
  function navToMain() {
    navigate('/'); // 메인 페이지로 이동
  }

  return (
    <Styled.TextPlacesContainer className="places-in-text__container">
      <X
        clickHandler={navToMain}
        style={{
          cursor: 'pointer',
        }}
      />
      <Styled.TextPlacesTitle>저장한 장소</Styled.TextPlacesTitle>
      <div
        className="contents-wrapper"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Styled.LocationName>경주</Styled.LocationName>
        <Styled.ButtonsWrapper>
          {data.map((onePlace, index) => (
            <Button handler={() => navToMap(index)} name={onePlace.title} key={index} />
          ))}
        </Styled.ButtonsWrapper>
      </div>
    </Styled.TextPlacesContainer>
  );
}

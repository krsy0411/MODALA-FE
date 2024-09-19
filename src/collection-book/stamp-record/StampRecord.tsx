import * as Styled from './css/stampRecord.styled';
import Line from './layout/Line';
import Content from './layout/Content';

export default function StampRecord() {
  return (
    <Styled.StampRecordCotainer>
      <Line />
      <Content />
    </Styled.StampRecordCotainer>
  );
}

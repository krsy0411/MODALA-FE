import { DateBoxContainer } from '../css/datebox.styled';
import { SiteDataTypes } from '../types/box';

type Time = Pick<SiteDataTypes, 'time'>;
export default function DateBox({ time }: Time) {
  // TODO : 들어오는 시간 데이터에 대해 string 추출 후 알맞은 포맷으로 만들 필요 있음
  return <DateBoxContainer>{time}</DateBoxContainer>;
}

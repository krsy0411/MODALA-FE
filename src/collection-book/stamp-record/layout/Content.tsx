import SiteBox from '../components/SiteBox';
import DateBox from '../components/DateBox';
import { siteArray } from '../data';

// TODO 1 : 용원이가 주는 데이터 형태 기반으로 좀 더 디자인에 알맞은 포맷으로 변경해야함 : time 포맷 맞추기, 데이터 구조 설정 같은거
// TODO 2 : 윤정님이 변경하는 Box component 디자인 형태로 Box 컴포넌트 레이아웃 변경해야함
export default function Content() {
  const array = siteArray;

  return (
    <div className="content-container">
      <DateBox time="06.15(목)" />
      {array.map((data, index) => (
        <SiteBox name={data.name} time={data.time} successed={data.successed} key={index} />
      ))}
    </div>
  );
}

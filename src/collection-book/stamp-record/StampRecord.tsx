import { Fragment } from 'react/jsx-runtime';
import { StampDataType } from '../Collection';
import DateBox from './components/DateBox';
import SiteBox from './components/SiteBox';
import * as Styled from './css/stampRecord.styled';
import Line from './layout/Line';

interface StampRecordComponentProps {
  stamps: StampDataType[];
}
export default function StampRecord({ stamps }: StampRecordComponentProps) {
  return (
    <Styled.StampRecordCotainer>
      {
        stamps.length > 0 ? (
          <div className="content-container">
            <Line />
            {stamps.map((stamp, index) => (
              <Fragment key={index}>
                <DateBox time={stamp.created_at} />
                <SiteBox name={stamp.tourism_spot.title} time={stamp.tourism_spot.created_at} successed={stamp.created_at ? true : false} />
              </Fragment>
            )
            )}
          </div>
        ) : (
          <h1 style={{
            color: 'white',
            fontSize: '2.5rem'
          }}>도장이 없습니다 🥲</h1>
        )
      }
    </Styled.StampRecordCotainer>
  );
}

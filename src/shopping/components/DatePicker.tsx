import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // 기본 스타일
import moment from 'moment';

const DatePicker = () => {
  const [dateRange, setDateRange] = useState([new Date(), new Date()]);
  const [showCalendar, setShowCalendar] = useState(false);

  const handleDateChange = (value) => {
    setDateRange(value);
    setShowCalendar(false);
  };

  const formatDate = (date) => {
    const options = { month: '2-digit', day: '2-digit' };
    return date.toLocaleDateString(undefined, options);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: '100%', position: 'relative' }}>
        <div
          style={{
            border: '1px solid #999999',
            borderRadius: '10px',
            fontFamily: 'var(--Gmarket-Sans-Medium)',
            fontSize: '10pt',
            textAlign: 'center',
            padding: '10px 5px',
            cursor: 'pointer',
          }}
          onClick={() => setShowCalendar(!showCalendar)}
        >
          {`${formatDate(dateRange[0])}~${formatDate(dateRange[1])}`}
        </div>

        {showCalendar && (
          <div
            style={{
              position: 'absolute',
              zIndex: 1000,
            }}
          >
            <Calendar
              selectRange={true}
              onChange={handleDateChange}
              value={dateRange}
              formatDay={(locale, date) => moment(date).format('DD')}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default DatePicker;

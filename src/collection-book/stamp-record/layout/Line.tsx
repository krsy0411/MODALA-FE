import Circle from '../components/Circle';

export default function Line() {
  return (
    <div
      className="line-container"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Circle name="small" marginBottom="25px" size="8px" />
      <Circle name="big" marginBottom="22px" size="10px" />
      <div
        className="dashed-line"
        style={{
          width: '1px',
          height: '91px',
          borderLeft: '1px dashed #000',
          marginBottom: '18px',
        }}
      ></div>
      <Circle name="big" marginBottom="17px" size="10px" />
      <div
        className="dashed-line"
        style={{
          width: '1px',
          height: '83px',
          borderLeft: '1px dashed #000',
          marginBottom: '34px',
        }}
      ></div>
      <Circle name="small" marginBottom="25px" size="8px" />
      <Circle name="big" marginBottom="6px" size="10px" />

      <div
        className="dashed-line"
        style={{
          width: '1px',
          height: '47px',
          borderLeft: '1px dashed #000',
          marginBottom: '6px',
        }}
      ></div>
      <Circle name="big" size="10px" />
    </div>
  );
}

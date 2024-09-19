interface InformationPropsType {
  title: string;
  texts: string[];
}
export default function Information({ title, texts }: InformationPropsType) {
  return (
    <div
      className="information-container"
      style={{
        width: '100%',
        padding: '20px 0 40px',
      }}
    >
      <p
        className="information-title"
        style={{
          fontWeight: '900',
          fontSize: '14px',
          marginBottom: '20px',
        }}
      >
        <strong>{title}</strong>
      </p>
      <div
        style={{
          display: 'flex',
          paddingLeft: '14px',
        }}
      >
        {texts.map((text, index) => (
          <span
            className="information-text"
            style={{
              flex: '1',
              fontSize: '14px',
              fontStyle: 'normal',
              fontWeight: 500,
              lineHeight: 'normal',
            }}
            key={index}
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}

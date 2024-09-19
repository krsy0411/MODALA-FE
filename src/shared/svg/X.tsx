export default function X({
  style,
  clickHandler,
}: {
  style?: React.CSSProperties;
  clickHandler?: () => void;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      style={style}
      onClick={clickHandler}
    >
      <path d="M13 13L37 37" stroke="black" stroke-width="2" stroke-linecap="round" />
      <path d="M13 37L37 13" stroke="black" stroke-width="2" stroke-linecap="round" />
    </svg>
  );
}

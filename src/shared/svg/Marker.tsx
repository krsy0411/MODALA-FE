export default function Marker({ style }: { style?: React.CSSProperties }) {
  return (
    <svg
      width="34"
      height="44"
      viewBox="0 0 34 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <g id="Layer_1">
        <g id="Vector" filter="url(#filter0_d_1109_308)">
          <path
            d="M30 13.6862C30 21.1521 21.1866 31.5531 18.0734 35.4719C17.5142 36.1759 16.4858 36.1759 15.9266 35.4719C12.8134 31.5531 4 21.0575 4 13.6862C4 6.31479 9.82046 0 17 0C24.1795 0 30 6.12741 30 13.6862Z"
            fill="#FBED6C"
          />
        </g>
        <path
          id="Vector_2"
          d="M17 20C20.3137 20 23 17.3137 23 14C23 10.6863 20.3137 8 17 8C13.6863 8 11 10.6863 11 14C11 17.3137 13.6863 20 17 20Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_1109_308"
          x="0"
          y="0"
          width="34"
          height="43.9999"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1109_308" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1109_308"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

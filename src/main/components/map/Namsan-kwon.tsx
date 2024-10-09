import * as Styled from "../../css/region.map.styled";
import { motion } from "framer-motion";
import * as main from "../../css/main.styled";
import TopAppBar from "../TopAppBar";
import DateandAreaInfo from "../DateAreaInfo";
import useMarkers from "../../../shared/hooks/useMarker";

export default function NamsanKwon() {

    const initialMarkers = [
        { title: "포석정", cx: 150, cy: 350, },
    ];

    const markers = useMarkers(initialMarkers);

    return(
        <main.MainContainer>
            <TopAppBar region="남산권" />
            <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01]
            }}
            >
                <DateandAreaInfo region="남산권" />
                <Styled.RegionSVG
                    id="남산권"
                    data-name="남산권"
                    width={390}
                    height={544}
                    viewBox="0 0 390 544"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ transform: 'translate(0px, -150px)' }}
                >
                    <g clipPath="url(#clip0_2071_308)">
                    <path
                        d="M26 338.728L72.0698 337.295L116.976 368.94L108.639 386.262L26 338.728Z"
                        fill="#4E3529"
                    />
                    <path
                        d="M156.062 323H199.452L219.564 327.81L289.183 339.403L322.449 373.75L340.855 425.418L365 454.469L341.559 515.406L309.754 513.461L240.46 361.778L156.062 323Z"
                        fill="#4E3529"
                    />
                    <path
                        d="M53.2846 337.89L68.3344 339.673L113.89 372.588L107.285 380.316L54.5838 344.078L26 338.728L53.2846 337.89Z"
                        fill="#B6836D"
                    />
                    <path
                        d="M42.6468 338.214L63.2185 341.619L110.642 376.371L107.285 380.316L26 338.728L42.6468 338.214Z"
                        fill="#3C6827"
                    />
                    <path
                        d="M191.656 323L218.318 330.35L283.525 341.673L314.681 374.615L333.276 425.581L355.337 452.901L331.571 514.812L309.754 513.461L243.708 354.915L156.062 323H191.656Z"
                        fill="#B6836D"
                    />
                    <path
                        d="M177.906 323L212.634 332.458L272.806 343.43L304.53 377.236L324.723 426.31L344.645 451.55L321.989 514.217L309.754 513.461L280.142 384.775L156.062 323H177.906Z"
                        fill="#3C6827"
                    />
                    <path
                        d="M315.601 428.013L294.434 377.29L262.764 344.835L199.75 334.566L156.062 323L107.285 380.317L57.5072 342.781L26 338.728V384.37L30.791 520.973L58.2651 506.597L159.121 457.333C163.289 455.306 168.161 455.36 172.276 457.495L268.475 507.596C270.072 508.434 271.832 508.975 273.645 509.191L309.781 513.433L334.927 450.28L315.628 427.959L315.601 428.013Z"
                        fill="#67A043"
                    />
                    <path
                        opacity={0.2}
                        d="M57.5073 342.781L72.0699 337.295L116.976 368.94L107.285 380.317L57.5073 342.781Z"
                        fill="#231F20"
                    />
                    <path
                        opacity={0.2}
                        d="M262.764 344.808L289.183 339.403L322.449 373.75L294.434 377.263L262.764 344.808Z"
                        fill="#231F20"
                    />
                    <path
                        opacity={0.2}
                        d="M334.927 450.307L365 454.469L341.559 515.406L309.754 513.46L334.927 450.307Z"
                        fill="#231F20"
                    />
                    <path
                        opacity={0.2}
                        d="M315.601 428.013L340.855 425.418L332.546 402.097L307.535 408.637L315.601 428.013Z"
                        fill="#231F20"
                    />
                    </g>
                    <defs>
                    <clipPath id="clip0_2071_308">
                        <rect
                        width={339}
                        height={198}
                        fill="white"
                        transform="translate(26 323)"
                        />
                    </clipPath>
                    </defs>
                    <defs>
                        <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                            <feGaussianBlur in="SourceAlpha" stdDeviation="5" />
                            <feOffset dx="0" dy="10" result="offsetBlur" />
                            <feFlood floodColor="#00000040" />
                            <feComposite in2="offsetBlur" operator="in" />
                            <feMerge>
                                <feMergeNode />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                        {/* <mask id="circleMask">
                            <circle cx="25" cy="16" r="25" fill="white" /> 
                        </mask> */}
                    </defs>
                    {markers.map((marker, index) => (
                        <g key={index}>
                            <circle
                                cx={marker.cx}
                                cy={marker.cy}
                                r="20"
                                fill="white"
                                filter="url(#shadow)"
                            />
                            {/* 이미지가 존재할 경우에만 렌더링 */}
                            {marker.image && (
                                <image
                                    // href = "/png/chumsungdae_map.png"
                                    href={`https://${marker.image}`}
                                    x={marker.cx - 20} // 이미지 중앙 정렬
                                    y={marker.cy - 20} // 이미지 중앙 정렬
                                    width="40" // 이미지 너비
                                    height="40" // 이미지 높이
                                    // mask="url(#circleMask)"
                                /> 
                            )}
                        </g>
                    ))}
                </Styled.RegionSVG>
            </motion.div>
            <main.ExplainContainer>구경하고 싶은 지역을 클릭해 주세요</main.ExplainContainer>
        </main.MainContainer>      
    );    
}

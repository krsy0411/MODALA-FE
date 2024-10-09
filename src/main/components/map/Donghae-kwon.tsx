import * as Styled from "../../css/region.map.styled";
import { motion } from "framer-motion";
import * as main from "../../css/main.styled";
import TopAppBar from "../TopAppBar";
import DateandAreaInfo from "../DateAreaInfo";
import useMarkers from "../../../shared/hooks/useMarker";

export default function DonghaeKwon() {

    const initialMarkers = [
        { title: "관성솔밭해변", cx: 150, cy: 350, },
    ];

    const markers = useMarkers(initialMarkers);


    return(
        <main.MainContainer>
            <TopAppBar region="동해권" />
            <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01]
            }}
            >
                <DateandAreaInfo region="동해권" />
                <div style={{ position: 'relative' }}>
                    <Styled.RegionSVG
                        id="동해권"
                        data-name="동해권"
                        width={390}
                        height={644}
                        viewBox="0 0 390 644"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ transform: 'translate(0px, -130px)' }}
                    >
                        <g clipPath="url(#clip0_2071_281)">
                        <path
                            d="M231.609 629.572L245.632 632V608.214L282.876 583.89L330 354.384L269.697 291.591L236.736 279.266L203.705 248.057L197.97 246.843L228.168 282.861L265.249 297.334L310.242 354.384L260.801 575.02L226.529 596.215L231.609 629.572Z"
                            fill="#4E3529"
                        />
                        <path
                            d="M165.571 240.587L197.97 246.843L233.154 282.651L264.757 293.062L317.921 354.384L271.359 580.296L233.786 606.276L231.609 629.572L204.501 624.624L189.168 572.032L215.55 566.78L263.868 354.897L236.642 305.644L167.233 307.395L165.571 240.587Z"
                            fill="#B6836D"
                        />
                        <path
                            d="M204.501 624.624L214.661 596.215L248.066 578.965L299.029 351.559L259.982 293.389L217.821 285.452L187.037 244.742L165.571 240.587L201.809 301.956L247.294 301.279L270.68 348.618L215.55 566.78L185.211 587.299L181.84 621.379L204.501 624.624Z"
                            fill="#3C6827"
                        />
                        <path
                            opacity={0.2}
                            d="M236.736 279.266L199.819 288.837L165.571 240.587L203.705 248.057L236.736 279.266Z"
                            fill="#231F20"
                        />
                        <path
                            opacity={0.2}
                            d="M269.697 291.591H240.154L277.679 348.455L330 354.384L269.697 291.591Z"
                            fill="#231F20"
                        />
                        <path
                            opacity={0.2}
                            d="M282.877 583.89L222.573 570.655L187.857 593.858L245.632 608.214L282.877 583.89Z"
                            fill="#231F20"
                        />
                        <path
                            d="M245.936 291.591H204.922C202.862 291.591 200.943 290.541 199.819 288.814L170.346 243.505C169.27 241.871 167.514 240.797 165.571 240.611L149.395 239C147.592 238.813 145.954 240.027 145.579 241.778L140.148 266.661C139.61 269.159 137.386 270.933 134.834 270.933H92.6966L76.8015 299.178L91.7368 334.239L61 354.384L72.4239 381.998L66.7119 405.224L72.4239 467.526L85.6035 486.738L79.6809 589.913L181.84 621.402C185.492 622.523 189.378 620.515 190.549 616.897L197.619 595.048C198.578 592.107 200.592 589.656 203.284 588.139L223.58 576.818C226.366 575.254 228.355 572.593 229.058 569.465L277.703 348.478C278.124 346.517 277.843 344.463 276.884 342.689L250.571 294.369C249.658 292.665 247.879 291.615 245.936 291.615V291.591Z"
                            fill="#6EAF46"
                        />
                        <path
                            d="M72.4239 467.503L119.782 459.053L153.328 463.278L197.97 489.585L241.746 511.761L253.895 456.532L213.865 403.053L201.153 341.242L199.819 288.837L170.346 243.505L165.571 240.587L149.395 239L145.579 241.778L136.215 270.56L92.6966 270.933L76.8249 299.178L91.7602 334.239L61 354.384L72.4239 381.998L66.7119 405.201L72.4239 467.503Z"
                            fill="#87C662"
                        />
                        <path
                            d="M199.819 288.837C199.819 288.837 201.387 291.615 204.922 291.615C208.457 291.615 244.555 291.615 244.555 291.615C244.555 291.615 249.26 291.125 251.039 295.256C252.818 299.388 276.86 342.666 276.86 342.666C276.86 342.666 278.943 344.65 277.094 351.092C275.245 357.535 253.895 456.532 253.895 456.532L213.841 403.053L201.153 341.242L199.819 288.814V288.837Z"
                            fill="#67A043"
                        />
                        </g>
                        <defs>
                        <clipPath id="clip0_2071_281">
                            <rect
                            width={269}
                            height={393}
                            fill="white"
                            transform="translate(61 239)"
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
                            <mask id="circleMask">
                                <circle cx="20" cy="20" r="15" fill="white" /> 
                            </mask>
                        </defs>
                    </Styled.RegionSVG>

                    {markers.map((marker, index) => (
                        <Styled.MarkerImgContainer
                            key={index}
                            className="marker-container"
                            style={{
                                left: `${marker.cx}px`,
                                top: `${marker.cy}px`,
                            }}
                        >
                            <Styled.MarkerImage
                                src={`https://${marker.image}`}
                                alt={marker.title}
                            />
                        </Styled.MarkerImgContainer>
                    ))}                    
                </div>

            </motion.div>
            <main.ExplainContainer style={{ bottom:'10vh' }}>구경하고 싶은 지역을 클릭해 주세요</main.ExplainContainer>
        </main.MainContainer>      
    );    
}

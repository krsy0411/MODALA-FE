import * as Styled from "../../css/region.map.styled";
import { motion } from "framer-motion";
import * as main from "../../css/main.styled";
import TopAppBar from "../TopAppBar";
import DateandAreaInfo from "../DateAreaInfo";
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAttractionInfo } from "../../../shared/function/regionInfo";

interface Attraction {
    id: string;
    area: string;
    is_represent: number;
    title: string;
    image: string;
    address: string;
    latitude: number;
    longitude: number;
    created_at: string;
}

interface Marker {
    title: string;
    cx: number;
    cy: number;
    image?: string; // 선택적 속성
}

export default function Downtown() {
    const location = useLocation();
    const areaId = location.state.id; // 전달받은 id 값 가져오기

    const [markers, setMarkers] = useState<Marker[]>([
        { title: "동궁과 월지", cx: 270, cy: 320 },
        { title: "황룡사지", cx: 430, cy: 560 },
        { title: "첨성대", cx: 600, cy: 500 },
    ]);

    useEffect(() => {
        const fetchAndUpdateMarkers = async () => {
            try {
                // isRepresent는 '1', area는 areaId, page는 1로 설정
                const attractions: Attraction[] = await getAttractionInfo(1, areaId, "", 1);
                
                const updatedMarkers = markers.map(marker => {
                    // attractions 배열에서 title이 일치하는 객체 찾기
                    // console.log(marker.title);
                    // console.log(attractions.find(attr => attr.title === marker.title));
                    const attraction = attractions.find(attr => attr.title === marker.title);
                    if (attraction) {
                        // title이 일치하면 해당 attraction의 정보를 포함하여 업데이트
                        return {
                            ...marker,
                            id: attraction.id,
                            area: attraction.area,
                            is_represent: attraction.is_represent,
                            image: attraction.image,
                            address: attraction.address,
                            latitude: attraction.latitude,
                            longitude: attraction.longitude,
                            created_at: attraction.created_at,
                        };
                    }
                    return marker; // 일치하지 않으면 기존 marker 반환
                });
                setMarkers(updatedMarkers);
                console.log("Updated markers:", updatedMarkers); // 업데이트된 markers 로그 출력
            } catch (error) {
                console.error("Error fetching attractions:", error);
            }
        };

        fetchAndUpdateMarkers();
        //console.log(areaId);
        console.log(markers);
    }, [areaId]); // areaId가 변경될 때마다 요청
    return(
        <main.MainContainer>
            <TopAppBar region="경주시내권" />
            <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01]
            }}
            >
                <DateandAreaInfo region="경주시내권" />
                <Styled.RegionSVG
                id="경주시내권"
                data-name="경주시내권"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 1200"
                style={{ transform: 'translate(0px, 100px)' }}
                >
                    <defs>
                        <style>
                            {
                            ".cls-1 {fill: #231f20; opacity: .2;}.cls-1, .cls-2, .cls-3, .cls-4, .cls-5, .cls-6, .cls-7, .cls-8, .cls-9 {stroke-width: 0px;}.cls-2 {fill: #86c562;}.cls-3 {fill: #99cc6e;}.cls-4 {fill: #3b6827;}.cls-5 {fill: #679f43;}.cls-6 {fill: #6eae46;}.cls-7 {fill: #4d3429;}.cls-8 {fill: #b1d471;}.cls-9 {fill: #b5826d;}"
                            }
                        </style>
                    </defs>
                    <polygon
                    className="cls-9"
                    points="235.13 157.2 353.35 175.28 533.55 274.3 486.35 314.72 235.13 157.2"
                    />
                    <polygon
                    className="cls-9"
                    points="594.81 249.47 705.16 267.53 771.67 314.72 786.68 502.78 917.54 570 1057.69 846.73 969.98 912.9 846.75 1110.41 732.59 1110.41 857.47 840.29 743.78 582.87 640.81 509.93 642.95 314.72 594.81 249.47"
                    />
                    <polygon
                    className="cls-4"
                    points="294.59 166.29 517.24 280.92 435.94 339.39 235.13 157.2 294.59 166.29"
                    />
                    <polygon
                    className="cls-4"
                    points="651.57 258.76 733.05 314.72 758.8 507.79 881.07 578.58 1007.96 835.68 921.82 895.22 795.26 1110.41 732.59 1110.41 857.47 840.29 917.54 812.41 767.38 587.16 666.55 505.64 642.95 314.72 594.81 249.47 651.57 258.76"
                    />
                    <polygon
                    className="cls-7"
                    points="353.35 175.28 395.18 181.72 554.16 265.95 533.55 274.3 353.35 175.28"
                    />
                    <polygon
                    className="cls-7"
                    points="705.16 267.53 732.52 272.16 797.41 314.72 808.85 499.21 944 567.14 1077 846.73 1001.3 912.13 878.21 1110.41 846.75 1110.41 969.98 906.67 1052.28 841.56 917.54 570 786.68 502.78 771.67 314.72 705.16 267.53"
                    />
                    <polygon
                    className="cls-1"
                    points="683.48 309.54 797.41 314.72 808.85 499.21 703.5 509.75 683.48 309.54"
                    />
                    <polygon
                    className="cls-1"
                    points="848.89 583.94 944 567.14 1077 846.73 969.98 830.1 848.89 583.94"
                    />
                    <polygon
                    className="cls-1"
                    points="880.84 884.45 1001.3 912.13 878.21 1110.41 732.59 1110.41 880.84 884.45"
                    />
                    <polygon
                    className="cls-3"
                    points="511.66 709.37 359.7 573.58 206.54 573.58 193.41 744.3 287.3 878.82 511.66 845.17 511.66 709.37"
                    />
                    <path
                    className="cls-5"
                    d="M511.66,573.58l119.63-148.73,66.58,38.29-15.36-153.6-88.67-60.07-105.83,42.9-253.85-135.18c-18.71,3.79-43.03,5.47-94.26,11.36l-43.75,140.97,114.41,211.66-4.03,52.38h153.16l87.3-50.25,64.66,50.25Z"
                    />
                    <polygon
                    className="cls-5"
                    points="582.79 774.04 597.62 724.8 511.66 709.37 511.66 845.17 287.3 878.82 342.14 957.39 465.13 989.91 629.13 1016.7 666.85 878.82 582.79 774.04"
                    />
                    <polygon
                    className="cls-6"
                    points="872.12 633.13 718.59 686.74 605.42 726.2 597.62 724.8 582.79 774.04 666.85 878.82 629.13 1016.7 642.47 1018.88 731.63 1110.41 879.87 884.45 969.01 830.1 872.12 633.13"
                    />
                    <polygon
                    className="cls-2"
                    points="446.99 523.33 359.7 573.58 501.27 700.09 582.79 638.24 511.66 573.58 446.99 523.33"
                    />
                    <polygon
                    className="cls-8"
                    points="611.04 450.02 511.66 573.58 582.79 638.24 597.78 650.33 615.91 486.28 611.04 450.02"
                    />
                    <polygon
                    className="cls-2"
                    points="702.53 509.75 697.87 463.14 631.29 424.85 611.04 450.02 615.91 486.28 602.25 609.93 697.87 593.79 702.53 509.75"
                    />
                    <polygon
                    className="cls-5"
                    points="847.93 583.94 702.53 509.75 697.87 593.79 602.25 609.93 597.78 650.33 665.76 705.16 718.59 686.74 872.12 633.13 847.93 583.94"
                    />
                    <polygon
                    className="cls-6"
                    points="501.27 700.09 511.66 709.37 575.71 720.87 582.79 638.24 501.27 700.09"
                    />
                    <polygon
                    className="cls-3"
                    points="665.76 705.16 582.79 638.24 575.71 720.87 605.42 726.2 665.76 705.16"
                    />
                    <svg width={1200} height={1200} viewBox="0 0 1200 1200" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                                <circle cx="25" cy="16" r="25" fill="white" /> 
                            </mask>
                        </defs>
                        {markers.map((marker, index) => (
                            <g key={index}>
                                <circle
                                    cx={marker.cx}
                                    cy={marker.cy}
                                    r="50"
                                    fill="white"
                                    filter="url(#shadow)"
                                />
                                {/* 이미지가 존재할 경우에만 렌더링 */}
                                {marker.image && (
                                   <image
                                        // href = "/png/chumsungdae_map.png"
                                        href={`https://${marker.image}`}
                                        x={marker.cx - 35} // 이미지 중앙 정렬
                                        y={marker.cy - 35} // 이미지 중앙 정렬
                                        width="70" // 이미지 너비
                                        height="70" // 이미지 높이
                                        // mask="url(#circleMask)"
                                    /> 
                                )}
                            </g>
                        ))}
                    </svg>

                </Styled.RegionSVG>
            </motion.div>
            <main.ExplainContainer>구경하고 싶은 지역을 클릭해 주세요</main.ExplainContainer>
        </main.MainContainer>      
    );    
}

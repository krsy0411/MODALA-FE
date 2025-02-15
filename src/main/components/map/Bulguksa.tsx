import { motion } from "framer-motion";
import * as Styled from "../../css/region.map.styled";
import * as main from "../../css/main.styled";
import TopAppBar from "../TopAppBar";
import DateandAreaInfo from "../DateAreaInfo";
import { useState, useContext } from "react";
import { TourContext } from "../../../context/Tour";
import MapMarker from "../MapMarker";

// Marker 인터페이스 정의
export interface Marker {
    title: string;
    cx: number;
    cy: number;
    image?: string;
}

// 캐시된 데이터의 타입 정의
export interface CachedTourData {
    address: string;
    area: string;
    created_at: string;
    id: string;
    image: string;
    is_represent: number;
    latitude: string;
    longitude: string;
    title: string;
}

export default function Bulguksa() {
    const { cachedData, isDataValid } = useContext(TourContext); // TourContext에서 값 가져오기

    // 캐시된 데이터 가져오기
    const cacheKey = 'tour';
    const valid = isDataValid(cacheKey);
    const cachedTourData = valid ? cachedData(cacheKey) as CachedTourData[] : [];

    // 마커 title과 위치 정보
    const markerPositions = [
        { title: "국립경주문화재연구소 천존고", cx: 410, cy: 430 },
        { title: "불국사", cx: 430, cy: 560 },
        { title: "석굴암", cx: 580, cy: 820 },
    ];

    // initialMarkers 배열 생성
    const initialMarkers: Marker[] = markerPositions
        .filter(marker => 
            cachedTourData.some(data => data.title === marker.title) 
        )
        .map(marker => {
            const data = cachedTourData.find(data => data.title === marker.title); 
            return {
                title: marker.title,
                cx: marker.cx,
                cy: marker.cy,
                image: data?.image,
                address: data?.address,
                area: data?.area,
                created_at: data?.created_at,
                id: data?.id,
                is_represent: data?.is_represent,
                latitude: data?.latitude,
                longitude: data?.longitude,

            };
        });

    console.log('Initial Markers:', initialMarkers);
    const [markersWithData, setMarkersWithData] = useState<Marker[]>(initialMarkers);

    return(
        <main.MainContainer>
            <TopAppBar region="불국사권" />
            <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01]
            }}
            >
                <DateandAreaInfo region="불국사권" />
                <Styled.RegionSVG
                    id="불국사권"
                    data-name="불국사권"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 1200"
                    style={{ transform: 'translate(0px, 100px)' }}
                >
                    <defs>
                        <style>
                            {
                            ".cls-1 {fill: #231f20;opacity: .2;}.cls-1, .cls-2, .cls-3, .cls-4, .cls-5, .cls-6 {stroke-width: 0px;}.cls-2 {fill: #86c562;}.cls-3 {fill: #3b6827;}.cls-4 {fill: #6eae46;}.cls-5 {fill: #4d3429;}.cls-6 {fill: #b5826d;}"
                            }
                        </style>
                    </defs>
                    <polygon
                    className="cls-5"
                    points="648.05 1087.83 694.36 1087.83 900.42 968.44 875.19 961.01 648.05 1087.83"
                    />
                    <polygon
                    className="cls-6"
                    points="875.19 961.01 648.05 1087.83 470.65 1087.83 802.84 938.65 875.19 961.01"
                    />
                    <polygon
                    className="cls-3"
                    points="484.7 1090.08 558.12 1087.83 838.97 949.81 762.81 925.11 484.7 1090.08"
                    />
                    <polygon
                    className="cls-3"
                    points="626.5 110.49 705.45 122.03 807.52 196.37 846.04 281.62 826.14 370.82 843.3 543.04 887.9 609.59 900.42 968.44 802.84 938.65 821.36 615.48 780.19 555.33 762.35 360.24 780.19 287.51 744.51 201.06 626.5 110.49"
                    />
                    <polygon
                    className="cls-6"
                    points="838.97 949.81 850.16 613.02 799.38 547.16 788.41 361.9 805.22 284.71 769.82 199.18 662.62 115.77 705.45 122.03 807.52 196.37 846.04 281.62 826.14 370.82 843.3 543.04 887.9 609.59 900.42 968.44 838.97 949.81"
                    />
                    <polygon
                    className="cls-5"
                    points="875.19 961.01 875.19 611.99 829.92 542.1 814.48 366.02 831.98 282.65 791.33 197.58 685.14 119.06 705.45 122.03 807.52 196.37 846.04 281.62 826.14 370.82 843.3 543.04 887.9 609.59 900.42 968.44 875.19 961.01"
                    />
                    <polygon
                    className="cls-1"
                    points="780.19 287.51 846.04 281.62 826.14 370.82 762.35 360.24 780.19 287.51"
                    />
                    <polygon
                    className="cls-1"
                    points="780.19 555.33 843.3 543.04 887.9 609.59 821.36 615.48 780.19 555.33"
                    />
                    <polygon
                    className="cls-1"
                    points="802.84 938.65 900.42 968.44 694.36 1087.83 479.65 1088.51 802.84 938.65"
                    />
                    <polygon
                    className="cls-2"
                    points="762.49 361.74 762.35 360.24 780.19 287.51 744.51 201.06 626.5 110.49 549.65 110.49 503 201.06 470.52 165.38 384.98 217.52 242.74 434.34 299.9 571.57 352.05 631.95 576.2 395.85 762.49 361.74"
                    />
                    <path
                    className="cls-4"
                    d="M762.49,361.74l-186.3,34.11-224.15,236.1-67.93,170.85v184.28c0,8.13,4.7,15.53,12.06,18.98l174.46,81.78c7.01,3.29,15.13,3.25,22.11-.11l310.08-149.08,18.53-323.17-41.17-60.15-17.7-193.59Z"
                    />
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
                    </defs>
                    {markersWithData.map((marker, index) => (
                        <g key={index}>
                            <circle
                                cx={marker.cx}
                                cy={marker.cy}
                                r="55"
                                fill="white"
                                filter="url(#shadow)"
                            />
                            <MapMarker
                                key={index}
                                cx={marker.cx}
                                cy={marker.cy}
                                r={40}
                                imageUrl={`https://${marker.image}`} // 이미지 URL
                            />
                        </g>
                    ))}
                </Styled.RegionSVG>
            </motion.div>
            <main.ExplainContainer>구경하고 싶은 지역을 클릭해 주세요</main.ExplainContainer>
        </main.MainContainer>
        
    );
    
}

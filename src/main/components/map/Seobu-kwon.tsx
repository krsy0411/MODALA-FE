import * as Styled from "../../css/region.map.styled";
import { motion } from "framer-motion";
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

export default function SeobuKwon(){

    const { cachedData, isDataValid } = useContext(TourContext); // TourContext에서 값 가져오기

    // 캐시된 데이터 가져오기
    const cacheKey = 'tour';
    const valid = isDataValid(cacheKey);
    const cachedTourData = valid ? cachedData(cacheKey) as CachedTourData[] : [];

    // 마커 title과 위치 정보
    const markerPositions = [
        { title: "김유신장군묘", cx: 300, cy: 500, },
        { title: "무열왕릉", cx: 330, cy: 570, },
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
            <TopAppBar region="서부권" />
            <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01]
            }}
            >
                <DateandAreaInfo region="서부권" />
                <Styled.RegionSVG
                    id="서부권"
                    data-name="서부권"
                    width={554.502}
                    height={899.999}
                    viewBox="0 0 554.502 899.999"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ transform: 'translate(0px, -130px)' }}

                >
                <g clipPath="url(#a)">
                    <path
                        d="M243.19 891.315h39.65l-24.925 -44.442 14.21 -33.263 24.257 -17.706 -4.882 -175.112 -17.113 -55.804 -59.41 235.24v61.996zm173.397 -283.342 -35.434 54.55 -42.374 -6.192 -49.798 -281.04 27.88 -38.15 35.666 16.172 -3.468 39.07 28.676 62.201 -1.824 72.357z"
                        fill="#4E3529"
                    />
                    <path
                        d="m406.437 605.67 -36.642 55.19 -31.015 -4.528 -49.798 -304.349 27.88 -14.841 24.078 10.926 -5.216 40.093 29.987 67.879 -3.058 72.23z"
                        fill="#B6836D"
                    />
                    <path
                        d="m396.853 604.109 -40.908 54.729 -17.166 -2.507 -49.798 -304.349 27.88 -14.841 11.846 5.375 -8.275 44.161 33.2 69.671 -4.24 72.716z"
                        fill="#3C6827"
                    />
                    <path
                        d="m282.84 619.666 4.574 174.395 -23.281 15.941 -14.801 37.764 22.381 43.625 -28.523 -0.077 -31.914 -57.466 50.313 -216.896z"
                        fill="#B6836D"
                    />
                    <path
                        d="m271.483 618.207 5.293 173.834 -21.096 14.071 -15.109 42.243 19.709 43.062 -17.089 -0.103 -31.914 -57.466 50.313 -216.896 21.25 2.713"
                        fill="#3C6827"
                    />
                    <path
                        opacity={0.2}
                        d="M302.113 384.502 349.059 392.383l3.469 -39.07 -35.667 -16.172zm75.623 70.082h-38.133l-4.678 75.914 40.986 -3.557zm38.852 153.389 -35.434 54.55 -42.374 -6.192 46.305 -54.269zm-150.45 181.56 30.244 6.371 -24.257 17.706 -25.079 -12.051 -2.929 -5.987zm-8.222 57.34 -34.689 2.302 19.966 42.141h39.648z"
                        fill="#231F20"
                    />
                    <path
                        d="m137.915 786.693 50.235 17.962a6.941 6.941 0 0 1 4.574 5.96l4.934 62.406a4.935 4.935 0 0 0 3.393 4.298l42.141 13.996c1.492 0.486 2.853 -1.024 2.185 -2.431l-16.214 -34.618a12.338 12.338 0 0 1 -0.283 -9.876l16.008 -40.221a13.077 13.077 0 0 1 6.091 -6.755l15.186 -7.932 -4.548 -129.339v-43.216l29.909 3.839 47.282 35.539 46.304 -54.269 -50.158 -71.565 5.344 -69.263c0.283 -3.684 -0.515 -7.393 -2.262 -10.644l-35.871 -66.09 14.748 -47.335c-21.84 -0.23 -49.592 -1.918 -65.01 -2.968a24.352 24.352 0 0 0 -19.683 7.907l-43.194 47.437c-4.78 5.271 -7.452 12.101 -7.452 19.214v47.795a33.686 33.686 0 0 1 -3.752 15.455l-39.906 77.527"
                        fill="#87C662"
                    />
                    <path
                        d="m137.915 549.509 73.362 5.194 65.421 -88.221 27.984 -22.056 14.62 -28.298 -17.164 -31.624 14.748 -47.335 -65.036 -2.994s-11.589 -1.024 -19.683 7.907c-7.297 8.059 -43.194 47.437 -43.194 47.437s-7.556 7.751 -7.452 19.214c0.103 8.93 0 47.795 0 47.795s0.719 6.781 -3.752 15.455 -39.854 77.526 -39.854 77.526"
                        fill="#67A043"
                    />
                    <path
                        d="m137.915 549.509 73.362 5.194 11.974 41.783 38.365 20.468 4.548 172.58 -15.186 7.932s-4.241 2.097 -6.091 6.755l-15.546 39.095s-2.955 5.015 -0.153 10.976l16.214 34.618s0.615 3.378 -2.184 2.431l-41.627 -13.817s-3.573 -0.333 -3.958 -5.143l-4.882 -61.739s-0.281 -3.839 -3.623 -5.527c-3.34 -1.689 -48.694 -17.475 -48.694 -17.475"
                        fill="#6EAF46"
                    />
                    </g>
                    <defs>
                    <clipPath id="a">
                        <path fill="#fff" d="M137.915 334.123h278.673v557.346H137.915z" />
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
                    </defs>
                    {markersWithData.map((marker, index) => (
                        <g key={index}>
                            <circle
                                cx={marker.cx}
                                cy={marker.cy}
                                r="20"
                                fill="white"
                                filter="url(#shadow)"
                            />
                            <MapMarker
                                key={index}
                                cx={marker.cx}
                                cy={marker.cy}
                                r={15}
                                imageUrl={`https://${marker.image}`} // 이미지 URL
                            />
                        </g>
                    ))}
                </Styled.RegionSVG>
            </motion.div>
            <main.ExplainContainer style={{ bottom:'10vh' }}>구경하고 싶은 지역을 클릭해 주세요</main.ExplainContainer>
        </main.MainContainer>      
    );    
}
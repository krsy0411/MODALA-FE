import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getAttractionInfo } from "../function/regionInfo";

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
    image?: string;
}

// 마커의 정보를 얻어오는 커스텀 훅
const useMarkers = (initialMarkers: Marker[]) => {
    const location = useLocation();
    const region = location.state.region; // 전달받은 id 값 가져오기
    const [markers, setMarkers] = useState<Marker[]>(initialMarkers);

    const fetchAndUpdateMarkers = async () => {
        try {
            console.log("region:", region); // region 확인
            const attractions: Attraction[] = await getAttractionInfo(1, region, "", 1);
            console.log("Fetched attractions:", attractions); // API 호출 확인
            
            const updatedMarkers = markers.map(marker => {
                const attraction = attractions.find(attr => attr.title === marker.title);
                if (attraction) {
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
            console.log("Updated markers:", updatedMarkers); // 업데이트된 markers 확인
        } catch (error) {
            console.error("Error fetching attractions:", error);
        }
    };

    // useEffect(() => {
    //     fetchAndUpdateMarkers();
    // }, [region]); // region이 변경될 때마다 요청

    return markers;
};

// 마커 위치 업데이트 함수
const updateMarkerPositions = (markers: Marker[], svgElement: SVGSVGElement | null) => {
    if (!svgElement) return [];

    const svgWidth = svgElement.clientWidth;
    const svgHeight = svgElement.clientHeight;
    const viewBox = svgElement.viewBox.baseVal;

    const xRatio = svgWidth / viewBox.width;
    const yRatio = svgHeight / viewBox.height;

    // 마커 위치 업데이트
    return markers.map(marker => ({
        ...marker,
        cx: marker.cx * xRatio, // x 비율로 위치 조정
        cy: marker.cy * yRatio, // y 비율로 위치 조정
    }));
};

export { useMarkers, updateMarkerPositions };

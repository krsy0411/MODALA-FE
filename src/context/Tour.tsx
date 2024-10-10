import { createContext } from "react"

// 밀리초 단위 시간 상수
const ONE_HOUR_MS = 60 * 60 * 1000;

export type TourDataType = {
    address: string;
    area: string;
    created_at: string;
    id: string;
    image: string;
    latitude: string;
    longitude: string;
    title: string;
}
// 캐싱 로직을 관리하는 함수 : 만료시간은 1시간
function cacheManager(expirationDuration: number = ONE_HOUR_MS) {
    // 캐시 데이터 저장 객체 : 키는 문자열, 값은 객체(데이터, 만료시간)
    const cache: Record<string, { data: TourDataType[], expirationTime: number }> = {};

    return {
        cachedData: (key: string, data: TourDataType[] = []) => {
            // 만약 키가 존재한다면, 만료시간을 확인하고, 만료되지 않았다면 캐싱된 데이터를 반환
            if (cache[key]) {
                const { data: cachedData, expirationTime } = cache[key];

                if (expirationTime > Date.now()) {
                    return cachedData;
                }
            }
            // 키가 존재하지 않는다면, 새로운 데이터를 저장하고 유효시간을 업데이트
            cache[key] = { data: data, expirationTime: Date.now() + expirationDuration }

            return cache[key].data;
        },
        isDataValid: (key: string) => {
            // 잘못된 키값에 대해 방어
            if (!cache[key]) {
                return false;
            }
            // 만료된 데이터인지 확인
            const { expirationTime } = cache[key];

            return expirationTime > Date.now();
        }
    }
}

interface TourContextType {
    cachedData: (key: string, data?: TourDataType[]) => TourDataType[];
    isDataValid: (key: string) => boolean;
}
export const TourContext = createContext<TourContextType>({
    cachedData: () => [],
    isDataValid: () => false
});
export default function Tour({ children }: { children: React.ReactNode }) {
    const { cachedData, isDataValid } = cacheManager();

    return (
        <TourContext.Provider value={{ cachedData, isDataValid }}>
            {children}
        </TourContext.Provider>
    )

}
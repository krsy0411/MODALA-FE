import * as Styled from '../css/region.bubble.styled';

interface RegionBubbleProps {
    region: string; // regionname 타입 string으로 지정
    style?: React.CSSProperties; // style 속성 추가
}

type ArrowBubbleSize = '3' | '4' | '5';

export default function RegionBubble({ region }: RegionBubbleProps) {
    let size: ArrowBubbleSize;

    // 길이에 따라 size 결정
    if (region.length <= 3) {
        size = '3';
    } else if (region.length <= 4) {
        size = '4';
    } else {
        size = '5'; // 5 이상일 경우 최대값
    }

    return (
        <>
            {region && (
                <Styled.ArrowBubble size={size}>
                    <Styled.ArrowBubbleText>
                        {/* 말풍선 내용 */}
                        {region} 
                    </Styled.ArrowBubbleText>
                </Styled.ArrowBubble>
            )}
        </>
    );
}

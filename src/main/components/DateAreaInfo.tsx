import * as Styled from "../css/date.area.info.styled";
import RegionBubble from "./RegionBubble";

interface DateandAreaInfoProps {
    region?: string;
    isSvg?: boolean;
}

export default function DateandAreaInfo({ region, isSvg }: DateandAreaInfoProps) {
    const today = new Date();
    const formattedDate = `${today.getFullYear()}.${(today.getMonth() + 1) < 10 ? "0" + (today.getMonth() + 1) : (today.getMonth() + 1)}.${today.getDate()}`;

    return (
        <Styled.InfoContainer>
            {!region && <Styled.DateInfo>{formattedDate}</Styled.DateInfo>}
            <Styled.AreaInfo>경주</Styled.AreaInfo>
            {region && <RegionBubble region={region} isSvg={isSvg} />}
        </Styled.InfoContainer>
    );
}

import * as Styled from "../css/town.menu.styled";

export default function TownMenu() { // 각 동네에 있는 관광지 리스트 모달
    return (
        <Styled.TownMenuBox>
            <Styled.TownMenuItem style={{ fontWeight: 800, fontSize: "18px"}}>
                황남동 
            </Styled.TownMenuItem>
            <Styled.TownMenuItem>
                첨성대
                <Styled.FamousMark>대표</Styled.FamousMark> 
            </Styled.TownMenuItem>
            <Styled.TownMenuItem>
                월정교
            </Styled.TownMenuItem>
            <Styled.TownMenuItem>
                경주 대릉원
            </Styled.TownMenuItem>
        </Styled.TownMenuBox>
    );
}
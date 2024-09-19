import * as Styled from "../../css/state.container.styled";
import StateIcon from "./StateIcon";

export default function StateContainer() {

    return (
        <Styled.StateContainer>
            <Styled.StateBox>
                <Styled.StateTitle>스탬프 현황</Styled.StateTitle>
                <StateIcon state="stamp" />
                <Styled.StateInfo>3/5</Styled.StateInfo>
            </Styled.StateBox>
            <Styled.StateBox>
                <Styled.StateTitle>날씨</Styled.StateTitle>
                <StateIcon state="sunny" />
                <Styled.StateInfo>15/31℃</Styled.StateInfo>
            </Styled.StateBox>
        </Styled.StateContainer>
       
    );
}
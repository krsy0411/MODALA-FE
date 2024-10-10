import * as Styled from './style/stamp-success.styled';

export default function StampSuccess() {

    return (
        <Styled.Container>
            <img src="/src/stamp-page/stamp.gif" alt="Stamp success gif" width={296} height={296} />
            <Styled.Text>스탬프 받기 완료!</Styled.Text>
        </Styled.Container>
    )
}
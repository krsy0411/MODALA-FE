import styled from "styled-components";

export const StateContainer = styled.div`
    height: 152px; // 152/1174px
    right: 10px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    flex-direction: column;
    position: absolute;
`

export const StateBox =  styled.div`
    width: 70px;
    height: 70px;
    border-radius: 10px;
    background-color: #ffffff;
    box-sizing: border-box;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 20px; // topappbar의 아이콘과 패딩 맞춤
    // margin-bottom: 0.75rem;
    z-index: 10;
    cursor: pointer;
    /* &:focus {
        background-color: rgba(0, 0, 0, 0.25);
        box-shadow: none;
    }
    &:active {
        background-color: rgba(0, 0, 0, 0.25);
        box-shadow: none;
    } */
    // stamp 현황 확인으로 이어지는 버튼이 될 수도 있으므로
`
export const StateTitle = styled.div`
    font-size: 0.5rem;
    color: #000000;
    font-weight: 300;
`

export const StateIcon = styled.div`
    width: 2rem;
    height: 2rem;
    margin-bottom: 0.25rem;
`
export const StateInfo = styled.div`
    font-size: 0.5rem;
    font-weight: 500;
`


import styled from 'styled-components';

export const TownMenuBox = styled.div`
    width: 342px;
    height: auto;
    display: flex;
    flex-direction: column;
    background-color: #EEFBD0;
    border-radius: 10px;
`

export const TownMenuItem = styled.div`
    position: relative;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    display: flex;
    padding: 24px; 
    &:last-child {
        border-bottom: none; // 마지막 아이템에 border 없애기
    }  
    border-bottom: 1px solid #000000; // 아래쪽에만 border 설정
`
export const FamousMark = styled.div`
    position: absolute;
    right: 21px;
    width: 50px;
    height: 24px;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    font-size: 16px;
    display: flex;
    border: 1px solid #000000;
    border-radius: 151px;
    background-color: #4CC552;
`
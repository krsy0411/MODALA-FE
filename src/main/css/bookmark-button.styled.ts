import styled from "styled-components";

export const BookmarkButtonContainer = styled.div`
    /* position: relative; */
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
`; 

export const BookmarkButton = styled.div`
    width: 47px;
    height: 47px;
    border-radius: 50%;
    background-color: #FBED6C;
    position: relative;
    margin-bottom: 20px;
    margin-right: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    box-shadow: 0px 4px 4px 0px #00000040;
    z-index: 10;
    
`;
export const BookmarkSvg = styled.svg`
    width: 16px;
    height: 20px;
`;
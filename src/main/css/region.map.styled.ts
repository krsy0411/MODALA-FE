import styled from "styled-components";

export const RegionSVG = styled.svg`
    // 기본 너비 375px(피그마 기준) 화면에 맞춘 반응형 css 설정
    width: 100%;
    max-width: 375px;
    height: auto;
    transition: all 0.3s ease-in-out;

    @media (min-width: 375px) {
        max-width: 100%;
    }
    overflow: hidden;
`;

export const MarkerImgContainer = styled.div`
    position: absolute;
    width: 40px;
    height: 40px;
    mask-image: url(#circleMask); /* SVG 마스크를 사용 */
    -webkit-mask-image: url(#circleMask); /* Safari를 위한 속성 */
    mask-size: cover;
    -webkit-mask-size: cover;
    mask-repeat: no-repeat;
    -webkit-mask-repeat: no-repeat;
    overflow: hidden;
`;

export const MarkerImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover; /* 이미지 비율 유지 */
`;

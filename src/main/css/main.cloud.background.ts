import styled from 'styled-components';
import { MainCloudPropsType } from '../components/MainCloudBackground';

type MainCloudImgStyledPropsType = Pick<MainCloudPropsType, '$size' | '$top' | '$left'>;

export const Cloudimg = styled.img<MainCloudImgStyledPropsType>`
    position: absolute;
    z-index: -1; // 배경 요소로 설정 및 absolute 적용으로 지도 클릭 시 클라우드 이미지가 나타나는 오류 해결
    // * 반응형으로 구름 이미지를 확대 및 축소하는 코드 추가 필요
    width: ${({ $size }) => $size};
    top: ${({ $top }) => $top}px;
    left: ${({ $left }) => $left}px;

`
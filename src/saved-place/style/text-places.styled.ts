import styled from "styled-components";

export const TextPlacesContainer = styled.div`
	width: 100%;
	height: 100%;
	padding: 24px;
`;
export const TextPlacesTitle = styled.p`
	color: var(--kakao-logo, #000);
	font: normal 700 20px / normal "Gmarket Sans TTF";
	text-align: center;
	transform: translateY(-10px);
	margin: 0;
	padding: 0 0 78px;
`;

export const LocationName = styled.div`
	width: 67px;
	height: 29px;
	flex-shrink: 0;
	border-radius: 95px;
	background: var(--kakao-logo, #000);
	box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
	/* 내부 폰트 설정 */
	color: var(--naver-text, #fff);
	font: normal 500 16px / normal "Gmarket Sans TTF";
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 0 18px;
`;

export const ButtonsWrapper = styled.div`
	width: 100%;
	height: 405px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

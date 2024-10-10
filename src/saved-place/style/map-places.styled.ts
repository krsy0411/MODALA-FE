import styled from "styled-components";

export const Container = styled.div`
	padding: 40px 0 0;
`;

export const TopWrapper = styled.div`
	padding: 33px 24px;
	display: flex;
	align-items: center;
`;
export const TopTitle = styled.span`
	color: var(--kakao-logo, #000);
	font: 700 18px / normal "Gmarket Sans TTF";
	padding-left: 79px;
`;

export const BottomWrapper = styled.div`
	padding: 0 27px 49px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;
export const BottomTitle = styled.span`
	color: var(--kakao-logo, #000);
	font: normal 500 16px / normal "Gmarket Sans TTF";
	padding-bottom: 5px;
`;
export const LocationBox = styled.div`
	width: 67px;
	height: 29px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-shrink: 0;
	border-radius: 95px;
	background: var(--kakao-logo, #000);
	box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
	/* 내부 글씨 스타일 설정 */
	color: var(--naver-text, #fff);
	font: normal 700 16px / normal "Gmarket Sans TTF";
`;
export const DescriptionBox = styled.div`
	width: 336px;
	max-height: 147px;
	flex-shrink: 0;
	border-radius: 10px;
	background: #d6efae;
	padding: 16px 44px 16px;
`;
export const DescriptionBoxTitle = styled.p`
	color: var(--kakao-logo, #000);
	font: normal 700 16px / normal "Gmarket Sans TTF";
	text-align: center;
	margin: 0 0 9px;
`;
export const DescriptionBoxAddress = styled.p`
	color: var(--kakao-logo, #000);
	font: normal 300 11px / normal "Gmarket Sans TTF";
	text-align: center;
	margin: 0 0 27px;
`;
export const DescriptionBoxTexts = styled.p`
	color: var(--kakao-logo, #000);
	text-align: center;
	font: normal 500 14px / normal "Gmarket Sans TTF";
	margin: 0;
`;

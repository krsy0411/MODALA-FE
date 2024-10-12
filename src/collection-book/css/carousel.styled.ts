import styled from "styled-components";

export const CarouselContainer = styled.div`
	width: 100%;
	height: fit-content;
	margin-top: 54px;
`;

export const Slide = styled.div`
	/* 기본, 최소, 최대 */
	width: 258px;
	height: 316px;
	padding-bottom: 15px;

	text-align: center;
	font-size: 18px;

	border-radius: 20px;
	background: linear-gradient(180deg, #c1f0fa 0%, #cfdefd 100%);
	box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.05);

	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	flex-shrink: 0;
`;

export const SlideLocationName = styled.p`
	color: #4e6caa;
	font-family: var(--Gmarket-Sans-Bold);
	font-size: 24px;
	font-style: normal;
	font-weight: 500;
	line-height: normal;
`;

export const SlideTime = styled.div`
	color: var(--kakao-logo, #000);
	font-family: var(--Gmarket-Sans-Medium);
	font-size: 10px;
	font-style: normal;
	font-weight: 500;
	line-height: normal;
	margin-bottom: 7px;
`;

export const SlideImg = styled.img`
	display: block;
	width: 212px;
	height: 142px;
	flex-shrink: 0;
	border-radius: 10px;
	object-fit: cover;
	box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const SlideDescription = styled.p`
	color: var(--kakao-logo, #000);
	font-family: var(--Gmarket-Sans-Medium);
	font-size: 14px;
	font-style: normal;
	font-weight: 500;
	line-height: normal;

	margin: 0;
`;

export const SlideSiteLocationText = styled.p`
	color: var(--kakao-logo, #000);
	font-family: var(--Gmarket-Sans-Light);
	font-size: 10px;
	font-style: normal;
	font-weight: 300;
	line-height: normal;

	margin: 0;
	margin-top: 5px;
`;

export const SlideStampNumberDiv = styled.div`
	width: 84px;
	height: 16px;
	flex-shrink: 0;
	border-radius: 16px;
	background: rgba(255, 255, 255, 0.3);

	/* 내부 텍스트 설정 */
	color: var(--kakao-logo, #000);
	font-family: var(--Gmarket-Sans-Light);
	font-size: 8px;
	font-style: normal;
	font-weight: 300;
	line-height: normal;

	/* flex 설정 */
	display: flex;
	justify-content: center;
	align-items: center;
`;

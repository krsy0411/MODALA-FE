import styled from "styled-components";

export const BukbuKwonSVG = styled.svg`
	// 기본 너비 375px(피그마 기준) 화면에 맞춘 반응형 css 설정
	width: 100%;
	max-width: 375px;
	height: auto;
	transition: all 0.3s ease-in-out;

	@media (min-width: 375px) {
		max-width: 100%;
	}
`;

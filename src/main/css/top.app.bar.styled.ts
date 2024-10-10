import styled from "styled-components";

export const TopAppBarContainer = styled.div<{ justifyContent: string }>`
	width: 100%;
	height: 160px;
	box-sizing: border-box;
	display: flex;
	justify-content: ${(props) => props.justifyContent};
	align-items: flex-end;
	padding: 50px 30px;
`;

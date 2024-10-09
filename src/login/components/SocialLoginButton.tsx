import { useContext } from "react";
import * as Styled from "../css/social.button.styled";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/User";

interface ButtonProps {
	socialName: string;
	backgroundColor: string;
	message: string;
}
export default function SocialLoginButton({
	socialName,
	backgroundColor,
	message,
}: ButtonProps) {
	const link = `${import.meta.env.VITE_BE_URL}/auth/kakao/login`;
	const userContext = useContext(UserContext);
	const navigate = useNavigate();

	async function goRedirection() {
		// 만약 context 내 토큰이 유효한 값이라면, 굳이 로그인할 필요없이 메인페이지로 이동
		if (userContext?.state.accessToken && Number(userContext?.state.expirationTime) < Date.now()) {
			navigate('/');
		} else {
			if (socialName === "kakao") {
				// 아예 다른 페이지로 잠시 이동(Redirection 컴포넌트에서 처리)
				window.location.href = link;
			}
		}
	}

	return (
		<>
			<div>
				<Styled.Button
					$backgroundcolor={backgroundColor}
					onClick={goRedirection}
				>
					<Styled.LogoImg
						src={`/svg/login/${socialName}.logo.svg`}
						alt={`${socialName}-logo`}
						className="logo"
					/>
					<div
						style={{
							display: "flex",
							flex: "1",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<Styled.LoginText $fontcolor={socialName}>
							{message}
						</Styled.LoginText>
					</div>
				</Styled.Button>
			</div>
		</>
	);
}

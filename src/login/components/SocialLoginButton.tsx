import * as Styled from "../css/social.button.styled";

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
	const link = `${import.meta.env.PROD.VITE_BE_URL}/auth/kakao/login`;

	async function goRedirection() {
		if (socialName === "kakao") {
			window.location.href = link;
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

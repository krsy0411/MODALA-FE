import { useNavigate } from "react-router-dom";
import Modal from "../shared/modal/Modal";
import Bookmark from "../shared/svg/Bookmark";
import X from "../shared/svg/X";

export default function MapDescription() {
	const navigate = useNavigate();
	return (
		<Modal>
			<div
				className="modal-container__wrapper"
				style={{
					width: "340px",
					flexShrink: 0,
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<div
					className="map-description__title"
					style={{
						width: "100%",
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						marginBottom: "8px",
					}}
				>
					<X
						style={{
							flexShrink: 0,
							width: "50px",
							height: "50px",
							fill: "#323232",
						}}
						clickHandler={() => navigate("/")}
					/>
					<span
						style={{
							color: "var(--kakao-logo, #000)",
							fontSize: "16px",
							fontStyle: "normal",
							fontWeight: 700,
							lineHeight: "normal",
						}}
					>
						첨성대
					</span>
					<div
						className="nothing"
						style={{
							display: "block",
							width: "50px",
							height: "50px",
						}}
					></div>
				</div>
				<div
					className="map-description__content"
					style={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<div
						className="content-image"
						style={{
							width: "264px",
							height: "225px",
							flexShrink: 0,
							background:
								'url("/png/sukgulam.png") lightgray 50% / cover no-repeat',
							borderRadius: "10px",
						}}
					>
						<Bookmark
							style={{
								flexShrink: 0,
								width: "20.059px",
								height: "26px",
								fill: "var(--naver-text, #FFF)",
								transform: "translate(233px, 10px)",
							}}
						/>
					</div>
					<div
						className="content-description"
						style={{
							width: "264px",
							height: "95px",
							padding: "20px 15px",
							borderRadius: "10px",
							background: "var(--naver-text, #FFF)",
							boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.25)",
							color: "var(--kakao-logo, #000)",
							fontSize: "12px",
							fontWeight: 500,
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							margin: "18px 0",
						}}
					>
						석굴암 석굴은 신라 불교예술의 전성기에 이룩된 최고 걸작으로 국보로
						지정되어 관리되고 있다.
					</div>
				</div>
				<div
					className="map-description__buttons"
					style={{
						width: "264px",
						padding: "0 8px",
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
					}}
				>
					<button
						className="video-play"
						style={{
							width: "112px",
							height: "50px",
							flexShrink: 0,
							borderRadius: "10px",
							border: "1px solid var(--kakao-logo, #000)",
							background: "#D6EFAE",
						}}
					>
						설명 보기
					</button>
					<button
						className="photo-shot"
						style={{
							width: "112px",
							height: "50px",
							flexShrink: 0,
							borderRadius: "10px",
							border: "1px solid var(--kakao-logo, #000)",
							background: "#D6EFAE",
						}}
					>
						인증샷
					</button>
				</div>
			</div>
		</Modal>
	);
}

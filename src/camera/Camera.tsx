import { useState, useEffect, useRef, MutableRefObject } from "react";
import { useNavigate } from "react-router-dom";

const View = () => {
	const videoRef = useRef<HTMLVideoElement>(
		null
	) as MutableRefObject<HTMLVideoElement>;
	const [isCaptured, setIsCaptured] = useState(false);
	const [isConfirmVisible, setIsConfirmVisible] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const navigate = useNavigate();

	const downloadUrl = (url: string, name?: string) => {
		const ae = document.createElement("a");
		const fileName = name || Date.now();
		ae.href = url;
		ae.download = fileName + ".png";
		document.body.appendChild(ae);
		ae.click();
		document.body.removeChild(ae);
	};

	const playVideo = () => {
		videoRef.current
			.play()
			.then(() => {
				setIsCaptured(false);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const pauseVideo = () => {
		videoRef.current.pause();
		setIsCaptured(true);
		setIsConfirmVisible(true);
	};

	const saveImage = () => {
		const canvas = document.createElement("canvas");
		canvas.width = videoRef.current.videoWidth;
		canvas.height = videoRef.current.videoHeight;

		const context = canvas.getContext("2d");
		if (context != null) {
			context.drawImage(videoRef.current, 0, 0);
		}

		const dataUrl = canvas.toDataURL("image/png");
		downloadUrl(dataUrl);
	};

	const handleConfirm = (confirmed: boolean) => {
		if (confirmed) {
			setIsLoading(true);
			videoRef.current.pause();
			setTimeout(() => {
				navigate("/stamp-complete");
			}, 3000);
		} else {
			playVideo();
		}
		setIsConfirmVisible(false);
		setIsCaptured(false);
	};

	useEffect(() => {
		navigator.mediaDevices
			.getUserMedia({ video: true, audio: false })
			.then((stream) => {
				if (videoRef && videoRef.current) {
					videoRef.current.srcObject = stream;
				}
			})
			.catch((error) => {
				console.error("error 발생", error);
			});
	}, []);

	return (
		<div style={{ position: "relative", width: "100%", height: "100%" }}>
			<video
				ref={videoRef}
				autoPlay={true}
				className="videos"
				playsInline
			></video>
			<div
				style={{
					position: "absolute",
					top: "10%",
					color: "white",
					fontSize: "24px",
					backgroundColor: "rgba(0, 0, 0, 0.5)",
					padding: "10px",
					borderRadius: "5px",
				}}
			>
				{isLoading ? (
					<>
						분석하고 있어요!
						<br />
						잠시만 기다려 주세요.
					</>
				) : (
					<>
						{isConfirmVisible ? (
							<>
								좋아요!
								<br />
								사진이 마음에 드시나요?
							</>
						) : (
							"카메라 오버레이"
						)}
					</>
				)}
			</div>
			<button disabled={!isCaptured} onClick={playVideo}>
				재생
			</button>
			{isConfirmVisible ? (
				<div
					style={{
						position: "absolute",
						top: "80%",
						left: "50%",
						transform: "translate(-50%, -50%)",
					}}
				>
					<button
						style={{
							background: "#3753F2",
							color: "white",
							width: "80px",
							padding: "5px",
							border: "none",
							borderRadius: "20px",
							fontSize: "16pt",
							marginRight: "20px",
						}}
						onClick={() => handleConfirm(true)}
					>
						예
					</button>
					<button
						style={{
							background: "white",
							width: "80px",
							padding: "5px",
							border: "none",
							borderRadius: "20px",
							fontSize: "16pt",
						}}
						onClick={() => {
							handleConfirm(false);
							playVideo();
						}}
					>
						아니오
					</button>
				</div>
			) : (
				<button
					style={{
						position: "absolute",
						borderRadius: "50%",
						border: "5px solid #F2F2F2",
						backgroundColor: "rgba(242,242,242,0.5)",
						top: "80%",
						left: "50%",
						transform: "translate(-50%, -50%)",
						width: "100px",
						height: "100px",
					}}
					disabled={isCaptured}
					onClick={pauseVideo}
				></button>
			)}
			<button disabled={!isCaptured} onClick={saveImage}>
				다운로드
			</button>
			{isLoading && (
				<div
					style={{
						position: "fixed",
						top: "50%",
						left: "50%",
						transform: "translate(-50%, -50%)",
						zIndex: 1000,
					}}
				>
					<div className="loader"></div>
				</div>
			)}
			<style>
				{`
          .videos {
            height: 100%;
            width: 100%;
            --s: 50px;
            border: 5px solid #b38184;
            -webkit-mask:
              conic-gradient(at var(--s) var(--s), #0000 75%, #000 0) 0 0 / calc(100% - var(--s))
                calc(100% - var(--s)),
              linear-gradient(#000 0 0) content-box;
          }
          .loader {
            border: 16px solid #f3f3f3; /* Light grey */
            border-top: 16px solid #3498db; /* Blue */
            border-radius: 50%;
            width: 70px;
            height: 70px;
            animation: spin 2s linear infinite;
          }

          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
			</style>
		</div>
	);
};

export default View;

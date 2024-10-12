import { useRef } from "react"

export default function Nothing() {
    const videoRef = useRef<HTMLVideoElement>(null);
    if (videoRef.current) {
        videoRef.current.playbackRate = 0.5;
    }

    return (
        <div className="video-layout-container" style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <video src="/nothing.webm" controls={false} loop={true} autoPlay={true} ref={videoRef} width={230} height={230}></video>
            <p>컬렉션 기록이 존재하지 않습니다</p>
        </div>
    )
}
interface MapMarkerProps {
    cx: number;
    cy: number;
    r: number;
    imageUrl: string;
}

export default function MapMarker({ cx, cy, imageUrl, r }: MapMarkerProps) {
    return (
        <>
            <defs>
                <mask id="circleMask2">
                    <circle cx={cx} cy={cy} r={r} fill="white" />
                </mask>
            </defs>
            <image
                href={imageUrl}
                x={cx-r} // 중심을 맞추기 위해 조정
                y={cy-r} // 중심을 맞추기 위해 조정
                width={r*2}
                height={r*2}
                mask="url(#circleMask2)"
                preserveAspectRatio="xMidYMid slice"
            />
        </>
    );
}

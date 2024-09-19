import * as Styled from "../css/main.cloud.background";

export interface MainCloudPropsType {
    $size: string;
    $top: number;
    $left: number;
}

export default function MainCloudBackground() {


return (
    <>
            <Styled.Cloudimg src={`/png/cloud/cloud_transparent.png`} $size="138px" $left={-8} $top={103} />
            <Styled.Cloudimg src={`/png/cloud/cloud_transparent.png`} $size="90px" $left={-32} $top={193} />
            <Styled.Cloudimg src={`/png/cloud/cloud_transparent.png`} $size="54px" $left={344} $top={294} />
    </>
);
}
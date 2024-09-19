import * as Styled from '../css/cloud.background-img.styled';
import Cloud from './Cloud';

export default function CloudBackgroundImg() {
  return (
    <Styled.Container>
      <div
        className="clouds-wrapper"
        style={{
          position: 'relative',
          transform: 'translate(90px, 20px)',
        }}
      >
        <Cloud $cloudFileName="cloud_transparent" $size="120px" $posX={58} $posY={-18} />
        <Cloud $cloudFileName="cloud_white" $size="160px" $posX={0} $posY={0} />
      </div>
      <Cloud $cloudFileName="cloud_white" $size="270px" $posX={-30} $posY={-65} />
      <Cloud $cloudFileName="cloud_transparent" $size="180px" $posX={260} $posY={-135} />
    </Styled.Container>
  );
}

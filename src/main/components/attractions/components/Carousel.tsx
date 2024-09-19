import { useEffect, useRef } from 'react';
import * as Styled from '../style/carousel.styled';
import Swiper from 'swiper';

export default function Carousel() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      new Swiper(containerRef.current, {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        spaceBetween: 16,
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true,
        },
      });
    }
  }, []);

  return (
    <div
      className="swiper-container"
      ref={containerRef}
      style={{
        marginTop: '23px',
      }}
    >
      <div className="swiper-wrapper">
        <Slide name="석굴암" backgroundImg="/png/sukgulam.png" />
        <Slide name="첨성대" backgroundImg="/png/chumsungdae.png" />
        <Slide name="불국사" backgroundImg="/png/bulguksa.png" />
      </div>
      <div className="swiper-pagination"></div>
    </div>
  );
}

interface SlidePropsType {
  name: string;
  backgroundImg: string;
}
function Slide({ name, backgroundImg }: SlidePropsType) {
  return (
    <Styled.Container className="swiper-slide container">
      <Styled.Name>{name}</Styled.Name>
      <Styled.ImgBox src={backgroundImg} />
      {/* TODO: Link to property 수정 필요 */}
      <Styled.MapLink to={'/modal'}>지도</Styled.MapLink>
    </Styled.Container>
  );
}

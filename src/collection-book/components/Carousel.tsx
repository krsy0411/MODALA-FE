import { useEffect, useRef } from 'react';
import * as Styled from '../css/carousel.styled';
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
        spaceBetween: 20,
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
    <Styled.CarouselContainer className="swiper-container" ref={containerRef}>
      <div className="swiper-wrapper">
        <CarouselSlide name="천마총" />
        <CarouselSlide name="첨성대" />
        <CarouselSlide name="불국사" />
      </div>
      <div className="swiper-pagination"></div>
    </Styled.CarouselContainer>
  );
}

interface SlideDataProps {
  name: string;
  backgroundImg?: string;
}
function CarouselSlide({ name }: SlideDataProps) {
  return (
    <>
      <Styled.Slide className="swiper-slide">
        <Styled.SlideLocationName>{name}</Styled.SlideLocationName>
        <div className="img-wrapper">
          <Styled.SlideTime>2024.06.17</Styled.SlideTime>
          <Styled.SlideImg />
        </div>
        <div
          className="description-wrapper"
          style={{
            margin: '15px 0 15px',
          }}
        >
          <Styled.SlideDescription>삼국시대 신라 시기의 천문 관측소</Styled.SlideDescription>
          <Styled.SlideSiteLocationText>경북 경주시 인왕동 839-1</Styled.SlideSiteLocationText>
        </div>
        <Styled.SlideStampNumberDiv>스탬프 번호: 47625</Styled.SlideStampNumberDiv>
        <img
          src="/svg/certificate/certificate.svg"
          style={{
            position: 'absolute',
            top: '-49px',
            left: '-48px',
            flexShrink: 0,
            filter: 'drop-shadow(-3px 6px 8px lightgray)',
          }}
        />
        <img
          src="/svg/logo/background.small.svg"
          style={{
            position: 'absolute',
            top: '275px',
            left: '217px',
            flexShrink: 0,
            width: '30px',
            height: '30px',
          }}
        />
      </Styled.Slide>
    </>
  );
}

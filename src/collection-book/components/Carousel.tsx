import { useEffect, useRef } from 'react';
import * as Styled from '../css/carousel.styled';
import Swiper from 'swiper';
import { StampDataType } from '../Collection';

interface CarouselComponentProps {
  stamps: StampDataType[];
}
export default function Carousel({ stamps }: CarouselComponentProps) {
  const containerRef = useRef(null);

  // Swiper 초기화 useEffect훅
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
        {
          stamps.map((stamp, index) => (
            <CarouselSlide data={stamp} key={index} />
          ))
        }
      </div>
      <div className="swiper-pagination"></div>
    </Styled.CarouselContainer>
  );
}

interface CarouselSlideProps {
  data: StampDataType;
}
function CarouselSlide({ data }: CarouselSlideProps) {
  return (
    <>
      <Styled.Slide className="swiper-slide">
        <Styled.SlideLocationName>{data.tourism_spot.title}</Styled.SlideLocationName>
        <div className="img-wrapper">
          <Styled.SlideTime>{data.created_at}</Styled.SlideTime>
          <Styled.SlideImg src={`https://${data.tourism_spot.image}`} alt='명소사진' />
        </div>
        <div
          className="description-wrapper"
          style={{
            margin: '15px 0 15px',
          }}
        >
          <Styled.SlideDescription>{data.tourism_spot.area}</Styled.SlideDescription>
          <Styled.SlideSiteLocationText>{data.tourism_spot.address}</Styled.SlideSiteLocationText>
        </div>
        <Styled.SlideStampNumberDiv>{`스탬프 번호: ${data.id}`}</Styled.SlideStampNumberDiv>
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

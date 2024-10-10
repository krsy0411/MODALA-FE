import { useEffect, useRef } from 'react';
import * as Styled from '../style/carousel.styled';
import Swiper from 'swiper';
import { TourDataType } from '../../../../context/Tour';
import { COLORS } from '../../../../shared/constant';

interface CarouselPropsType {
  data: TourDataType[];
}
export default function Carousel({ data }: CarouselPropsType) {
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
        {
          data && data.map((representedTour, index) => {
            return <Slide name={representedTour.title} backgroundImg={`https://${representedTour.image}`} key={index} backgroundColor={COLORS[index % 3]} />
          })
        }
      </div>
      <div className="swiper-pagination"></div>
    </div>
  );
}

interface SlidePropsType {
  name: string;
  backgroundImg: string;
  backgroundColor: string;
}
function Slide({ name, backgroundImg, backgroundColor }: SlidePropsType) {
  return (
    <Styled.Container className="swiper-slide container" backgroundColor={backgroundColor}>
      <Styled.Name isShort={name.length <= 7}>{name}</Styled.Name>
      <Styled.ImgBox src={backgroundImg} />
      {/* TODO: Link to property 수정 필요 */}
      <Styled.MapLink to={'/modal'}>지도</Styled.MapLink>
    </Styled.Container>
  );
}

import { Dispatch, useEffect, useRef } from 'react';
import * as Styled from '../style/carousel.styled';
import Swiper from 'swiper';
import { TourDataType } from '../../../../context/Tour';
import { COLORS } from '../../../../shared/constant';
import { SelectedLocationType } from '../Attractions';

interface CarouselPropsType {
  data: TourDataType[];
  currentLocationHandler: Dispatch<React.SetStateAction<SelectedLocationType>>;
}
export default function Carousel({ data, currentLocationHandler }: CarouselPropsType) {
  const containerRef = useRef(null);

  function onClickHandler(selectedLocation: SelectedLocationType) {
    currentLocationHandler(selectedLocation);
  }

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
            const selectedLocation = {
              latitude: representedTour.latitude,
              longitude: representedTour.longitude,
              title: representedTour.title
            }

            return (
              <Styled.Container className="swiper-slide container" backgroundColor={COLORS[index % 3]}>
                <Styled.Name isShort={representedTour.title.length <= 7}>{representedTour.title}</Styled.Name>
                <Styled.ImgBox src={`https://${representedTour.image}`} />
                {/* TODO: Link to property 수정 필요 */}
                <Styled.MapLink onClick={() => onClickHandler(selectedLocation)}>지도</Styled.MapLink>
              </Styled.Container>
            )
          })
        }
      </div>
      <div className="swiper-pagination"></div>
    </div>
  );
}
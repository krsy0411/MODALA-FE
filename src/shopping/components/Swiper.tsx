// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import * as Styled from '../css/page.styled';
import { Pagination } from 'swiper/modules';
import ImgFile from '/svg/Shopping/Img1.svg';
import styled from 'styled-components';

const navItems = [
  {
    id: 1,
    img: ImgFile,
  },
  {
    id: 2,
    img: 'url',
  },
  {
    id: 3,
    img: 'url',
  },
  {
    id: 4,
    img: 'url',
  },
];

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; // 비율 유지하며 채우기
  border-radius: 20px; // SliderItem과 동일한 모서리 반경 적용
`;

interface SwipersProps {
  type: 'shopping' | 'shoppingContent'; // type prop 추가
}

// 광고랑, 상품내의 swiper의 조건 달리 해야함
export default function Swipers({ type }: SwipersProps) {
  const swiperMargin = type === 'shopping' ? '20px 5% 20px 0' : '20px 0';
  return (
    <Swiper
      style={{ margin: swiperMargin, height: '270px' }}
      pagination={true}
      modules={[Pagination]}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      {navItems.map((item, index) => (
        <SwiperSlide key={index}>
          <Styled.AdSwiperItem>
            <Image src={ImgFile}></Image>
          </Styled.AdSwiperItem>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

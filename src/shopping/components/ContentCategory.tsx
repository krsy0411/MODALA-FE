import styled from 'styled-components';

const Slider = styled.div`
  width: 100%;
  min-height: 30px;
  height: auto;
  border-radius: 5px;
  display: flex;
  flex-wrap: nowrap;
  box-sizing: border-box;
  overflow-x: scroll;
  gap: 20px;
  margin: 20px 0 0 0;
  user-select: none;
  outline: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const SliderItem = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 70px;
  max-width: auto;
  height: 30px;
  width: auto;
  border-radius: 20px;
  background-color: #000000;
  color: white;
  font-weight: bolder;
`;

interface ContentCategoryProps {
  text: string;
}

export default function ContentCategory({ text }: ContentCategoryProps) {
  return (
    <Slider>
      <SliderItem>{text}</SliderItem>
    </Slider>
  );
}

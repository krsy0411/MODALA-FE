import React from 'react';
import styled from 'styled-components';
import Like from '/public/svg/Shopping/Like.svg';
import Star from '/public/svg/Shopping/Star.svg';
import Share from '/public/svg/Shopping/Share.svg';

// 버튼 컨테이너 스타일
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

// 버튼 스타일
const Button = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s;
  background-color: transparent;

  font-size: 14px;
  gap: 10px;
`;

const ButtonGroup: React.FC = () => {
  return (
    <ButtonContainer>
      <Button onClick={() => alert('좋아요!')}>
        <img width="24px" height="24px" src={Like} />
        찜하기
      </Button>
      <Button onClick={() => alert('즐겨찾기 추가!')}>
        <img width="24px" height="24px" src={Star} />
        즐겨찾기
      </Button>
      <Button onClick={() => alert('공유하기!')}>
        <img width="24px" height="24px" src={Share} />
        공유하기
      </Button>
    </ButtonContainer>
  );
};

export default ButtonGroup;

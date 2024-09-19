import React from 'react';
import styled from 'styled-components';

const StarContainer = styled.div`
  display: flex;
`;

const Star = styled.span<{ filled: boolean }>`
  font-size: 24px;
  color: ${({ filled }) => (filled ? 'black' : 'lightgray')};
  margin-right: 5px;
`;

interface StarRatingProps {
  score: number; // 0부터 5까지의 점수
}

const StarRating: React.FC<StarRatingProps> = ({ score }) => {
  // 점수가 0~5 범위 내인지 확인
  const normalizedScore = Math.max(0, Math.min(score, 5));

  return (
    <StarContainer>
      {[...Array(5)].map((_, index) => (
        <Star key={index} filled={index < normalizedScore}>
          ★
        </Star>
      ))}
    </StarContainer>
  );
};

export default StarRating;
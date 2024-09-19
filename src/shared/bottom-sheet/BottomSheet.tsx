import { ReactNode } from 'react';
import Content from './components/Content';
import Header from './components/Header';
import * as Styled from './css/bottomSheet.styled';
import * as StyledContent from './css/sheet.content.styled';
import useBottomSheet from './hooks/useBottomSheet';

// TODO : BottomSheetProps로 외부에서 전달받는 react 컴포넌트가 항상 최상위 요소를 감싼 형태이도록 강제하는 법 찾아보기
interface BottomSheetProps {
  children: ReactNode;
}
export default function BottomSheet({ children }: BottomSheetProps) {
  const { sheet, content } = useBottomSheet();

  return (
    <Styled.BottomSheetContainer ref={sheet}>
      <Header />
      {/* 주의사항 : contentChildNode는 "항상" 감싸는 최상위 요소를 하나 둘 것 : 레이아웃에 영향 안 주려고 풀어둠 */}
      <StyledContent.BottomSheetContent ref={content}>
        <Content>{children}</Content>
      </StyledContent.BottomSheetContent>
    </Styled.BottomSheetContainer>
  );
}

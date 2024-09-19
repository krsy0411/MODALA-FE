# Modal

react-modal 라이브러리를 이용했습니다.

## 사용법

Modal 폴더 내의 Modal 컴포넌트(`주의할점 : react-modal의 modal X`)는 화면의 정중앙에 잡히도록 **레이아웃만 잡아주는 역할**입니다.<br>
레이아웃만 잡아주는 역할을 수행하기 위해, content 내용은 추상화시키고 **children props로 누구나 사용 가능**하도록 우선 분리시켰어요.

# BottomSheet 사용법

Page가 있다고 가정해봅시다.<br>
`페이지 내`에 `Container div(또는 Wrapper div)`가 있을 거예요. `해당 div 태그를 최상위 요소로` 잡고 `최상위 요소의 자식노드로 BottomSheet 컴포넌트를` 넣어주시면 됩니다.<br>

> 예시는 다음과 같습니다

```javascript
export default function Page() {
  return (
    <Container>
      <BottomSheet contentChildNode={'컴포넌트 사용'} />
    </Container>
  );
}
```

현재 구조는 다음과 같습니다

```markdown
Page -> BottomSheet -> Content + Header (with useBottomSheet)
```

이때 `Page 수준에서` content 내용으로 사용할 `컴포넌트를` `props로` 전달해주시면 돼요.<br>
**Content 컴포넌트**는 감싸는 컴포넌트가 없습니다.

> 이는 **정렬 방식에 제한을 주고 싶지 않아서**인데요.<br>그래서 각자 **최상위 div 컨테이너를 감싼 채로 사용**하시는게 좋습니다.
>
> > 이건 제가 타입스크립트로 강제하도록 컴파일 에러 나게끔 수정해볼게요(이시영)

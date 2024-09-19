# go-back button

기존 컴포넌트의 click eventhandler는 단순히 navigate(-1)을 통해, 라우팅 경로에 따라 한 페이지 뒤로 이동하는 형태였습니다. 저는 이 컴포넌트의 재사용성을 높이고자, 단순히 `서브 디렉토리` 구조에 따른 뒤로가기보다는, 기존의 `서브 디렉토리` 구조를 따르는 이벤트핸들러 위에 추가적으로 `상태`에 따른 서브 컴포넌트 전환에도 뒤로가기를 사용 가능하도록 만들고자 했습니다.

### 형태

```javascript
export default function GoBackButton({
  extraHandler,
  navigateNumber = -1,
}: {
  extraHandler?: () => void;
  navigateNumber?: 0 | -1;
}) {
  // 나머지는 기존과 동일
  const handleGoBack = () => {
    if (extraHandler) {
      extraHandler();
    }
    navigate(navigateNumber);
  };
  // 나머지는 기존과 동일
}
```

prop을 하나 추가해줬습니다. 이름 그대로 `추가 기능을 수행하는 핸들러 함수`입니다. optional-parameter를 사용해서, 만약 함수가 유효하면, 해당 함수만을 수행합니다.<br>
기존 컴포넌트의 역할을 수행하기 위해서, optional-paramter로 설정하고 default-parameter 값으로 navigateNumber를 -1로 지정합니다(옵셔널이라 값 안 주면 런타임 에러 나기 때문에 디폴트값을 주는 겁니다).

#### 만약 기존의 `navigate(-1)`를 수행하지 않게 하고 싶다면

navigateNumber를 0으로 사용하면 됩니다

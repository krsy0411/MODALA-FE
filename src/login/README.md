# 로그인 방법

### 순서(흐름)

- env파일에 저장해둔 BE URL을 이용해서 해당 **도메인 이름**에 접근하여 `/auth/kakao/auth` 주소에 요청합니다
  - 이때 client가 요청을 합니다
- 그럼 `KAKAO Auth Server`에 `Service Server`가 요청을 전송하는데요. 이때 `Service Server`쪽에서 설정해둔 redirction url로 `Client`가 이동합니다.
- **redirection page**에서 우린 `KAKAO Auth Server`에서 요청하는 카카오계정 로그인을 수행하게 됩니다(**카카오 로그인 페이지**)
- 동의 화면도 마저 수행하고 계속하기 버튼을 클릭하면, `Service Server`에 인가코드를 `KAKAO Auth Server`가 전달하게 됩니다
- 그럼 `Service Server`가 토큰 발급 요청을 `KAKAO Auth Server`에 하게되고, 토큰을 응답으로 받아옵니다
- 이제 `Service Server`는 유효성 체크를 수행하고, `Client`에게 로그인 완료 응답을 줍니다
  - 이때 서버가 어떤 체크를 할지는 개발자 마음이겠구요
  - 이때 server가 응답을 줍니다
  - 이때 어떤 url 주소로 해당 응답을 받아올지는 협의 문제고, 제 경우엔 `/redirect`쪽으로 응답을 받기로 했습니다

### 참고 자료

다음 블로그 및 공식문서를 참고하면 좋을 거 같아요

> https://velog.io/@leemhoon00/Nestjs-JWT-%EC%9D%B8%EC%A6%9D-%EA%B5%AC%ED%98%84<br>https://developers.kakao.com/docs/latest/ko/kakaologin/rest-api

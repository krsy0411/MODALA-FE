import { useEffect, useReducer } from 'react';

interface StateType {
  loading: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any | undefined; // 이 경우 : 범용적인 fetch훅이므로, 어떤 데이터가 들어올 지는 추후에 명시하는게 맞다고 판단됨
  error: Error | undefined;
}
interface ActionType {
  type: 'FETCH_INIT' | 'FETCH_SUCCESS' | 'FETCH_FAILURE';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any; // stateType의 데이터들 형태가 결정될때, 얘도 변경 가능할 듯?
}
interface ConfigType {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  headers?: {
    [key: string]: string; // 인덱스 시그니처
  };
  body?: string | FormData; // JSON string(직렬화) or FormData
  mode?: 'cors' | 'no-cors' | 'same-origin'; // CORS settings
  credentials?: 'omit' | 'same-origin' | 'include'; // include credentials (cookies, authorization headers, etc.)
  cache?: 'default' | 'no-store' | 'reload' | 'no-cache' | 'force-cache' | 'only-if-cached'; // cache strategies
  redirect?: 'follow' | 'manual' | 'error'; // how to handle redirects
  referrerPolicy?:
    | 'no-referrer'
    | 'no-referrer-when-downgrade'
    | 'origin'
    | 'origin-when-cross-origin'
    | 'same-origin'
    | 'strict-origin'
    | 'strict-origin-when-cross-origin'
    | 'unsafe-url'; // referrer policy settings
  signal?: AbortSignal; // for request cancellation
}

const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case 'FETCH_INIT':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case 'FETCH_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      // 타입스크립트에서 action의 타입을 3가지로 강제하기 때문에, default쪽에 걸릴 일이 없음
      return { ...state };
  }
};

export default function useFetch(url: string, config: ConfigType = {}) {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: null,
  });

  useEffect(() => {
    let isCanceled = false;

    const fetchData = async () => {
      // 요청 초기화 (로딩 시작)
      dispatch({ type: 'FETCH_INIT' });

      try {
        const response = await fetch(url, config); // config로 fetch 요청 구성
        if (!response.ok) {
          throw new Error(`HTTP error - status: ${response.status}`);
        }

        const result = await response.json();

        if (!isCanceled) {
          // 요청 성공 (데이터 설정)
          dispatch({ type: 'FETCH_SUCCESS', payload: result });
        }
      } catch (error: unknown) {
        if (!isCanceled && error instanceof Error) {
          // 요청 실패 (에러 설정)
          dispatch({ type: 'FETCH_FAILURE', payload: error.message });
        }
      }
    };

    fetchData();

    return () => {
      isCanceled = true;
    };
  }, [url, config]);

  return state;
}

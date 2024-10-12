import { createContext, useEffect, useReducer } from "react";

interface UserState {
    accessToken: string | null;
    refreshToken: string | null;
    expirationTime: string | null;
}

type UserAction =
    | { type: "SET_ACCESS_TOKEN"; payload: UserState }
    | { type: "SET_REFRESH_TOKEN"; payload: UserState }
    | { type: "SET_EXPIRATION_TIME"; payload: string };

const initialState: UserState = {
    accessToken: localStorage.getItem("access_token"),
    refreshToken: localStorage.getItem("refresh_token"),
    expirationTime: localStorage.getItem("expiration_time"),
};

// 리듀서 함수
const reducer = (state: UserState, action: UserAction): UserState => {
    switch (action.type) {
        case "SET_ACCESS_TOKEN":
            return { ...state, accessToken: action.payload.accessToken, refreshToken: action.payload.refreshToken, expirationTime: action.payload.expirationTime };
        case "SET_REFRESH_TOKEN":
            return { ...state, accessToken: action.payload.accessToken, refreshToken: action.payload.refreshToken, expirationTime: action.payload.expirationTime };
        case "SET_EXPIRATION_TIME":
            return { ...state, expirationTime: action.payload };
        default:
            return state;
    }
};

// Context 생성
export const UserContext = createContext<{
    state: UserState;
    dispatch: React.Dispatch<UserAction>;
} | null>(null);


export default function User({ children }: { children: React.ReactNode }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    // 로컬 스토리지 업데이트
    useEffect(() => {
        localStorage.setItem("access_token", state.accessToken || "");
        localStorage.setItem("refresh_token", state.refreshToken || "");
        localStorage.setItem("expiration_time", state.expirationTime || "");
    }, [state.accessToken, state.refreshToken, state.expirationTime]);

    return (
        <UserContext.Provider value={{ state, dispatch }}>
            {children}
        </UserContext.Provider>
    )
}
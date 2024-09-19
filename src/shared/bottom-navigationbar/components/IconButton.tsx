import * as Styled from '../css/icon.button.styled';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
  
export default function IconButton() {
    const navigate = useNavigate();
    const [activeNav, setActiveNav] = useState<number>(1); // activeNav의 타입을 number로 명시

    // handleNavigation 함수의 매개변수 타입 지정
    /* 화면이 작을때는 이동 잘 되는데, 클때는 main에서만 이동이 안되는 문제 있음 main 지도 svg의 viewbox가 너무 커서 버튼이 안 눌리는듯 */
    const handleNavigation = (path: string, navIndex: number) => {
        console.log(`Navigating to ${path} with navIndex ${navIndex}`);
        setActiveNav(navIndex);
        navigate(path);
    };

    return (
        <>
            <Styled.IconButton
                id="collectionbook.icon"
                onClick={() => handleNavigation("/collection", 0)} 
                width={16}
                height={20}
                viewBox="0 0 16 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                fill={activeNav == 0 ? '#ffffff' : '#71923C'}
                d="M14 0H2C0.9 0 0 0.9 0 2V18C0 19.1 0.9 20 2 20H14C15.1 20 16 19.1 16 18V2C16 0.9 15.1 0 14 0ZM5 2H7V7L6 6.25L5 7V2ZM14 18H2V2H3V11L6 8.75L9 11V2H14V18Z"
                />
            </Styled.IconButton>

            <Styled.IconButton
                id="main.icon"
                onClick={() => handleNavigation("/", 1)} 
                width={23}
                height={20}
                viewBox="0 0 23 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                fill={activeNav == 1 ? '#ffffff' : '#71923C'}
                d="M11.5 3.0935L17.25 8.2685V17.25H14.95V10.35H8.05V17.25H5.75V8.2685L11.5 3.0935ZM11.5 0L0 10.35H3.45V19.55H10.35V12.65H12.65V19.55H19.55V10.35H23L11.5 0Z"
                />
            </Styled.IconButton>

            <Styled.IconButton
                id="shop.icon"
                onClick={() => handleNavigation("/shopping", 2)} 
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                fill={activeNav == 2 ? '#ffffff' : '#71923C'}
                d="M14.5446 11C15.2943 11 15.9541 10.59 16.2939 9.97L19.8726 3.48C20.2425 2.82 19.7627 2 19.0029 2H4.20844L3.26879 0H0V2H1.99926L5.59792 9.59L4.24842 12.03C3.51869 13.37 4.47834 15 5.99777 15H17.9933V13H5.99777L7.09736 11H14.5446ZM5.15808 4H17.3036L14.5446 9H7.5272L5.15808 4ZM5.99777 16C4.89818 16 4.00851 16.9 4.00851 18C4.00851 19.1 4.89818 20 5.99777 20C7.09736 20 7.99703 19.1 7.99703 18C7.99703 16.9 7.09736 16 5.99777 16ZM15.9941 16C14.8945 16 14.0048 16.9 14.0048 18C14.0048 19.1 14.8945 20 15.9941 20C17.0937 20 17.9933 19.1 17.9933 18C17.9933 16.9 17.0937 16 15.9941 16Z"
                />
            </Styled.IconButton>
        </>
    );
}
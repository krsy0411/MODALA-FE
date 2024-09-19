import IconButton from "./components/IconButton";
import * as Styled from "./css/bottom.navigation.bar.styled";
import { useLocation } from "react-router-dom";

export default function BottomNavigationBar() {
    const locationNow = useLocation();

    return (
        locationNow.pathname === "/login" || locationNow.pathname === "/landing" || locationNow.pathname === "/redirect" ? (
            null
        ) : (
            <Styled.NavigationBar>
                <IconButton />
            </Styled.NavigationBar>
        )
    );
}
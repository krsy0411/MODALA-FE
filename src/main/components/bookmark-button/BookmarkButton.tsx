import { Link } from "react-router-dom";
import * as Styled from "../../css/bookmark-button.styled";

export default function BookmarkButton() {
  return (
    <Link to={"/save"}>
      <Styled.BookmarkButtonContainer>
        <Styled.BookmarkButton>
          <Styled.BookmarkSvg
            xmlns="http://www.w3.org/2000/svg"
            width={25}
            viewBox="0 0 25 30.952"
            fill="none"
            height={30.952}
          >
            <path
              d="M21.395 0H4.338C2.462 0 0.929 1.548 0.929 3.439V30.952l11.94 -5.158L24.806 30.952V3.439C24.807 1.548 23.271 0 21.395 0m0 25.794 -8.529 -3.75 -8.529 3.75V3.439h17.057z"
              fill="#323232"
            />
          </Styled.BookmarkSvg>
        </Styled.BookmarkButton>
      </Styled.BookmarkButtonContainer>
    </Link>
  );
}

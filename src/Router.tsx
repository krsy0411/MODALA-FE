import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./login/Login";
import Main from "./main/Main";

import Shopping from "./shopping/Shopping";
import CollectionBook from "./collection-book/Collection";
import MyPage from "./my-page/MyPage";
import Landing from "./landing/Landing";
import Redirection from "./shared/redirection/Redirection";
import Reservation from "./shopping/Reservation";
import View from "./camera/Camera";
import Bulguksa from "./main/components/map/Bulguksa";
import BomunKwon from "./main/components/map/Bomun-kwon";
import NamsanKwon from "./main/components/map/Namsan-kwon";
import BukbuKwon from "./main/components/map/Bukbu-kwon";
import DonghaeKwon from "./main/components/map/Donghae-kwon";
import SeobuKwon from "./main/components/map/Seobu-kwon";
import Downtown from "./main/components/map/Downtown";
import MapDescription from "./map-description/MapDescription";
import SavedPlaces from "./saved-place/SavedPlaces";
import StampSuccess from "./stamp-page/StampSuccess";

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/Gyeongju-sinae-kwon" element={<Downtown />}></Route>
        <Route path="/Bulguksa-kwon" element={<Bulguksa />}></Route>
        <Route path="/Bomun-kwon" element={<BomunKwon />}></Route>
        <Route path="/Namsan-kwon" element={<NamsanKwon />}></Route>
        <Route path="/Bukbu-kwon" element={<BukbuKwon />}></Route>
        <Route path="/Donghae-kwon" element={<DonghaeKwon />}></Route>
        <Route path="/Seobu-kwon" element={<SeobuKwon />}></Route>
        <Route path="/landing" element={<Landing />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/shopping" element={<Shopping />}></Route>
        <Route path="/camera" element={<View />}></Route>
        <Route path="/reservation" element={<Reservation />}></Route>
        <Route path="/collection" element={<CollectionBook />}></Route>
        <Route path="/mypage" element={<MyPage />}></Route>
        <Route path="/modal" element={<MapDescription />}></Route>
        <Route path="/save" element={<SavedPlaces />}></Route>
        <Route path="/stamp" element={<StampSuccess />}></Route>
        {/* 소셜로그인 하는 경우의 리디렉션 페이지 */}
        <Route path="/redirect" element={<Redirection />}></Route>
        {/* 잘못된 경로로 입력된 경우의 default 페이지 */}
        <Route path="*" element={<Navigate to="/" />}></Route>
      </Routes>
    </>
  );
}

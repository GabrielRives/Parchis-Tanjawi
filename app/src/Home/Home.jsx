import Header from "./Header/Header";
import NavBar from "./NavBar/NavBar";
import StartPopup from "../Components/StartPopup/StartPopup";
import "./Home.scss";

export default function Home() {
  return (
    <div className="home">
      <Header />
      <div className="home__body">
        <NavBar />
        <div className="home__body__buttonStart">
        <StartPopup/>
        </div>
      </div>
    </div>
  );
}

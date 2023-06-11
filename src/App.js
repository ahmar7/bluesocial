import "./assets/css/styles.css";
import Banner from "./components/Banner/Banner";
import Buytoke from "./components/Buytoken/Buytoken";
import Countdown from "./components/Countdown/Countdown";
import HowToPlay from "./components/HowToPlay/HowToPlay";
import Platfroms from "./components/Platforms/Platfroms";
import Privatesale from "./components/Privatesale/Privatesale";
import ScocialToken from "./components/SocialToken/ScocialToken";
import Welcome from "./components/Welcome/Welcome";
import Header from "./layout/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Platfroms />
      <Countdown />
      <Privatesale />
      <Buytoke />
      <Welcome />
      <HowToPlay />
      <ScocialToken />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default App;

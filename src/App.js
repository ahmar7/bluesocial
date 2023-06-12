import "./assets/css/styles.css";
import Banner from "./components/Banner/Banner";
import Buytoke from "./components/Buytoken/Buytoken";
import Countdown from "./components/Countdown/Countdown";
import HowToPlay from "./components/HowToPlay/HowToPlay";
import Platfroms from "./components/Platforms/Platfroms";
import Privatesale from "./components/Privatesale/Privatesale";
import Quote from "./components/Quote/Quote";
import Reviews from "./components/Reviews/Reviews";
import Roadmap from "./components/Roadmap/Roadmap";
import ScocialToken from "./components/SocialToken/ScocialToken";
import Team from "./components/Team/Team";
import TokenDistribution from "./components/TokenDistribution/TokenDistribution";
import Welcome from "./components/Welcome/Welcome";
import Footer from "./layout/Footer/Footer";
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
      <TokenDistribution />
      <Team />
      <Quote />
      <Reviews />
      <Roadmap />
      <Footer />
    </div>
  );
}

export default App;

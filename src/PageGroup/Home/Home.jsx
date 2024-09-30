import Footer from "./Component/Footer";
import "./Home.css";
import { NoticeBoard } from "./Component/NoticeBoard";
import Events from "./Component/Events";
import Achievements from "./Component/Achievements";
import JmiCarousel from "./Component/Carousel";
import HeroRemastered from "./Component/HeroRemastered";
import { Hero } from "./Component/Hero";

function Home() {
  return (
    <div>
      <HeroRemastered />
      {/* <Hero /> */}
      <div className="flex h-full w-full flex-col items-center justify-center gap-6 p-4 md:flex-row md:items-start md:px-10 lg:px-16">
        <NoticeBoard />
        <Events />
      </div>
      <Achievements />
      <JmiCarousel />
      <Footer />
    </div>
  );
}

export default Home;

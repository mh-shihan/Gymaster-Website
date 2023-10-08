import { useEffect } from "react";
import Banner from "../../Header/Banner";
import About from "../../components/About/About";
import CardContainer from "../../components/CardContainer/CardContainer";
import Footer from "../../components/Footer/Footer";
import Teem from "../../components/Teem/Teem";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
    });
  }, []);
  return (
    <div data-aos="fade-up">
      <div className="-mt-4 mb-20">
        <Banner></Banner>
      </div>
      <div className="max-w-7xl mx-auto flex justify-center">
        <CardContainer></CardContainer>
      </div>
      <div className="max-w-7xl mx-auto my-20">
        <About data-aos="fade-up"></About>
      </div>
      <div className="mt-30 max-w-7xl mx-auto">
        <Teem></Teem>
      </div>
      <div className="mt-20">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;

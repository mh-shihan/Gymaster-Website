import Banner from "../../Header/Banner";
import CardContainer from "../../components/CardContainer/CardContainer";

const Home = () => {
  return (
    <div>
      <div className="-mt-4 mb-20">
        <Banner></Banner>
      </div>
      <div className="max-w-7xl mx-auto flex justify-center">
        <CardContainer></CardContainer>
      </div>
    </div>
  );
};

export default Home;

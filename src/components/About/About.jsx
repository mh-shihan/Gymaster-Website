import about from "../../assets/about.jpg";
const About = () => {
  return (
    <div className="flex flex-col md:flex-row gap-12 mx-4 md:mx-4 ">
      <div>
        <img className="rounded-lg  " src={about} alt="" />
      </div>
      <div className="space-y-4 ">
        <h3 className="text-orange-500 text-2xl font-bold text-center md:text-left">
          ABOUT US
        </h3>
        <h1 className="text-3xl sm:text-center md:text-5xl text-white font-extrabold text-center md:text-left">
          WELCOME TO GYMESTER
        </h1>
        <h4 className="md:text-xl font-medium text-justify">
          Welcome to GYMESTER, where fitness becomes a way of life. Our passion
          is to empower individuals like you to transform their health and
          achieve their fitness goals.
        </h4>
        <p className="text-white text-justify text-sm md:text-base">
          At GYMESTER, we believe that every journey to fitness is unique.
          Whether you are a seasoned athlete or taking your first step towards a
          healthier lifestyle, we are here to guide and support you every step
          of the way.
        </p>
        <p className="text-white text-justify text-sm md:text-base">
          {" "}
          Our mission is simple: to inspire and motivate you to reach your
          highest potential. We provide a welcoming and inclusive environment
          where everyone can thrive, regardless of age, fitness level, or
          background.
        </p>
      </div>
    </div>
  );
};

export default About;

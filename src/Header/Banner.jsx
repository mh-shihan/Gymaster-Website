import banner from "../assets/carousel-1.jpg";

const Banner = () => {
  return (
    <div className=" relative">
      <img className="h-[80vh] w-full" src={banner} alt="" />
      <div className="absolute inset-0 bg-center  bg-gray-900 opacity-60"></div>
      <div className="absolute inset-0 top-[30%] text-white space-y-3     ">
        <h3 className="text-center text-xl md:text-3xl">BEST GYM CENTER</h3>
        <h2 className="text-center text-2xl md:text-5xl xl:text-7xl font-bold md:font-extrabold">
          BUILD YOUR BODY STRONG
          <br />
          WITH GYMESTER
        </h2>
      </div>
    </div>
  );
};

export default Banner;

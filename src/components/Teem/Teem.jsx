import teem1 from "../../assets/team-1.jpg";
import teem2 from "../../assets/team-2.jpg";
import teem3 from "../../assets/team-3.jpg";
import "./Teem.css";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Teem = () => {
  return (
    <div>
      {/* First Card */}
      <h3 className="text-center text-2xl text-orange-500 font-bold">TEEM</h3>
      <h2 className="text-center text-5xl font-extrabold text-white ">
        EXPERT TRAINERS
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:gap-4 xl:gap-10 mx-4 md:mx-4">
        <div className="cursor-pointer mt-2 xl:mt-10 ">
          <div className="max-w-md mx-auto my-4">
            <div className="card-container">
              <img src={teem1} alt="Your Image" className="w-full rounded-lg" />
              <div className="overlay flex flex-col ">
                <div className="flex gap-3 text-3xl text-white ">
                  <FaFacebook></FaFacebook>
                  <FaInstagram></FaInstagram>
                  <FaTwitter></FaTwitter>
                </div>
                <div className="mt-4 text-white  text-center">
                  <h2 className="text-4xl font-bold">JHON DEO</h2>
                  <h2 className="text-xl">TRAINER</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Card */}
        <div className="cursor-pointer mt-2 xl:mt-10 ">
          <div className="max-w-md mx-auto my-4">
            <div className="card-container">
              <img src={teem2} alt="Your Image" className="w-full rounded-lg" />
              <div className="overlay flex flex-col ">
                <div className="flex gap-3 text-3xl text-white ">
                  <FaFacebook></FaFacebook>
                  <FaInstagram></FaInstagram>
                  <FaTwitter></FaTwitter>
                </div>
                <div className="mt-4 text-white  text-center">
                  <h2 className="text-4xl font-bold">JAMSE TAYLoR</h2>
                  <h2 className="text-xl">TRAINER</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Third card */}
        <div className="cursor-pointer mt-2 xl:mt-10 ">
          <div className="max-w-md mx-auto my-4">
            <div className="card-container">
              <img src={teem3} alt="Your Image" className="w-full rounded-lg" />
              <div className="overlay flex flex-col ">
                <div className="flex gap-3 text-3xl text-white ">
                  <FaFacebook></FaFacebook>
                  <FaInstagram></FaInstagram>
                  <FaTwitter></FaTwitter>
                </div>
                <div className="mt-4 text-white  text-center">
                  <h2 className="text-4xl font-bold">ADAM PHILIP</h2>
                  <h2 className="text-xl">TRAINER</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teem;

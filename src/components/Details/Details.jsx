import PropTypes from "prop-types";
const Details = ({ card }) => {
  const { image, name, price, description } = card;
  return (
    <div className="max-w-3xl mx-auto my-10">
      <div className="relative ">
        <img className=" w-full h-[60vh] rounded-lg" src={image} alt="" />
        <div className="absolute inset-x-0 bottom-[0] bg-black opacity-30 h-12 md:h-16 lg:h-24 rounded-b-lg "></div>
        <button className="z-10 absolute bottom-[3%] left-10  bg-orange-500 px-2 md:px-4 py-1 text-white rounded-md font-semibold md:text-[20px]">
          Price ${price}
        </button>
      </div>
      <h2 className="text-10 font-bold mt-12 text-white text-4xl">{name}</h2>
      <p className="mt-6 text-white opacity-70 text-justify">{description}</p>
    </div>
  );
};

export default Details;
Details.propTypes = {
  card: PropTypes.object,
};

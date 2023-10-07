import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Card = ({ data }) => {
  //   console.log("Inside Card:", data);
  const { id, name, image, description, price } = data;
  return (
    <div className="card card-compact bg-gray-800 shadow-xl mt-4">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-orange-500 font-bold">{name}</h2>
        <p className="font-font-popins text-white">{description}</p>
        <h4 className="font-bold text-xl text-orange-500">$ {price}</h4>
        <div className="card-actions justify-end">
          <Link to={`/details/${id}`}>
            <button className="btn bg-orange-600 text-white font-bold">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
Card.propTypes = {
  data: PropTypes.obj,
};

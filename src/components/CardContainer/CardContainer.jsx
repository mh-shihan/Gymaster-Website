import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Card from "./Card";

const CardContainer = () => {
  const { gymData } = useContext(AuthContext);
  return (
    <div>
      <h2 className="text-5xl font-bold text-white text-center my-10">
        Our Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:4 xl:gap-10 mx-4 md:mx-2">
        {gymData?.map((data) => (
          <Card key={data.id} data={data}></Card>
        ))}
      </div>
    </div>
  );
};

export default CardContainer;

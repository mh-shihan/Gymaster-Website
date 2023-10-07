import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

import Details from "../Details/Details";

const CardDetails = () => {
  const [card, setCard] = useState({});

  const id = useParams();
  //   console.log(id?.id);

  const cards = useLoaderData();
  //   const cards = useLoaderData();

  useEffect(() => {
    const findCard = cards.find(
      (card) => parseInt(card?.id) === parseInt(id?.id)
    );
    setCard(findCard);
  }, [cards, id]);
  //   console.log(card);

  return <Details card={card}></Details>;
};

export default CardDetails;

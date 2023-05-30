import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const VanDetail = () => {
  const { id } = useParams();
  const [van, setVan] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/vans/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setVan(data.vans);
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!van) {
    return (
      <div className="van-detail=container">
        No matching data found for that ID
      </div>
    );
  }

  return (
    <div className="van-detail-container">
      <div className="van-detail">
        <img src={van.imageUrl} alt={van.name} />
        <i className={`van-type ${van.type}`}>{van.type}</i>
        <h2>{van.name}</h2>
        <p className="van-price">
          <span>${van.price}</span>/day
        </p>
        <p>{van.description}</p>
        <button className="link-button">Rent this van</button>
      </div>
    </div>
  );
};

export default VanDetail;

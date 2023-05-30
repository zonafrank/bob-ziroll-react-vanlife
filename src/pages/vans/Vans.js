import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Vans = () => {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch("/api/vans")
      .then((response) => response.json())
      .then((data) => {
        setVans(data.vans);
      });
  }, []);

  const vanElements = vans.map((van) => {
    return (
      <Link to={`/vans/${van.id}`} key={van.id}>
        <div className="van-tile" key={van.id}>
          <img src={van.imageUrl} alt={van.name} />
          <div className="van-info">
            <h3>{van.name}</h3>
            <p>${van.price}/day</p>
          </div>
          <i className={`van-type ${van.type}`}>{van.type}</i>
        </div>
      </Link>
    );
  });

  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="van-list">{vanElements}</div>
    </div>
  );
};

export default Vans;

import "./Card.css";
import instance from "../Api";
import React, { useEffect, useState } from "react";

function Card() {
  const [data, setData] = useState([]);

  const coffee = async () => {
    const res = await instance.get("/coffee");
    setData(res.data);
  };

  // const dataArray = data.map((coffee) => (
  //   <div key = {coffee._id}></div>
  //   <li>{coffee.coffeeKeyTag}</li>

  // ));

  // console.log(dataArray);
  useEffect(() => {
    coffee();
  }, []);

  return (
    <div className="cards">
      <div className="card">
        {data.map((coffee) => (
          <div key={coffee._id}>
            <h4>
              <b>{coffee.coffeeName}</b>
            </h4>
            <img src={coffee.image} alt="photo of coffee bag"></img>
            <div className="container">
              <ul>
                {" "}
                <li>Type: {coffee.coffeeType}</li>
                <li>Description: {coffee.description}</li>
                <li>Date: {coffee.meta.coffeeDate}</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;

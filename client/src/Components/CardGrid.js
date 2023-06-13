import { useEffect, useState } from "react";
import instance from "../Api";
import "./CardGrid.css";

function CardGrid() {
  const [data, setData] = useState([]);

  const coffee = async () => {
    const res = await instance.get("/coffee");
    setData(res.data);
  };

  useEffect(() => {
    coffee();
  }, []);

  return (
    <div className="card-grid">
      {data.map((coffee, index) => (
        <div className="card" key={index}>
          <h4>
            <b>{coffee.coffeeName}</b>
          </h4>
          <span>Date: {coffee.meta.coffeeDate.createAt}</span>
          <img src={coffee.image} alt="bag of coffee"></img>
          <div className="container">
            <ul>
              <li>Type:{coffee.coffeeType}</li>
              <li>Description:{coffee.description}</li>
              {coffee.coffeeKeyTag.map((tags, index) => (
                <div key={index} className="tags">
                  {tags},
                </div>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardGrid;

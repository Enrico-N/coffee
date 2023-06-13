import "./Card.css";

// import instance from "../Api";
import { useState } from "react";
import CardGrid from "./CardGrid";

function Card() {
  const [data] = useState([]);

  return (
    <div className="cards">
      {}

      <CardGrid data={data} />
    </div>
  );
}

export default Card;

// const [data, setData] = useState([]);

// const coffee = async () => {
//   const res = await instance.get("/coffee");
//   setData(res.data);
// };

// const tagsItems = {data.coffeeKeyTag}.map((tags, index) => (
//   <li key={tags}>
//     {tags}
//     {index}
//   </li>
// ));

// const dataArray = data.map((coffee) => (
//   <div key = {coffee._id}></div>
//   <li>{coffee.coffeeKeyTag}</li>

// ));

// console.log(dataArray);

// useEffect(() => {
//   coffee();
// }, []);

/* <div className="card">
        {data.map((CardGrid, coffee) => (
          <div key={coffee._id}>
            <h4>
              <b>{coffee.coffeeName}</b>
            </h4>
            Date: {coffee.meta.coffeeDate.createAt}
            <img src={coffee.image} alt="photo of coffee bag"></img>
            <div className="container">
              <ul>
                {" "}
                <li>Type: {coffee.coffeeType}</li>
                <li>Description: {coffee.description}</li>
                {coffee.coffeeKeyTag.map((tags, index) => (
                  <div key={index} className="tags">
                    {" "}
                    {tags},
                  </div>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div> */

/* <div className="card">{data.map(CardGrid)} </div> */

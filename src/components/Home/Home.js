import React from "react";
import "./Home.css";
import DishesOrder from "../DishesOrder/DishesOrder";
function Home() {
  return (
    <div className="home">
      <div className="home__introduction">
        <img
          className="home__introImage"
          src="https://www.tljus.com/wp-content/uploads/2019/12/brand-header1.jpg"
          alt=""
        />
        <div className="home__introPopup">
          <h1>Delicous Food, Delivered To You</h1>
          <p>
            Choose your favorite dish from our broad selection of available
            dishs and enjoy a delicious lunch or dinner at home.
          </p>
          <p>
            All our ishs are cooked with high-quality ingredients, just-in-time
            and of course by experienced chefs
          </p>
        </div>
      </div>
      <div className="home__order-list">
        <DishesOrder />
      </div>
      <div className="home__order"></div>
    </div>
  );
}

export default Home;
